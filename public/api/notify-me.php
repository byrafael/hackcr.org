<?php

declare(strict_types=1);

header("Content-Type: application/json; charset=utf-8");
header("X-Content-Type-Options: nosniff");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

const RATE_LIMIT_MAX_REQUESTS_PER_HOUR = 5;

/**
 * @param array<string, mixed> $payload
 */
function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function normalizedHostFromUrl(string $url): string
{
    if ($url === "") {
        return "";
    }

    $host = parse_url($url, PHP_URL_HOST);
    if (!is_string($host) || $host === "") {
        return "";
    }

    return rtrim(strtolower($host), ".");
}

/**
 * @param list<string> $allowedHosts
 */
function isSubmissionFromAllowedHost(array $allowedHosts): bool
{
    $origin = trim((string) ($_SERVER["HTTP_ORIGIN"] ?? ""));
    $referer = trim((string) ($_SERVER["HTTP_REFERER"] ?? ""));

    $originHost = normalizedHostFromUrl($origin);
    $refererHost = normalizedHostFromUrl($referer);

    $originAllowed = $originHost !== "" && in_array($originHost, $allowedHosts, true);
    $refererAllowed = $refererHost !== "" && in_array($refererHost, $allowedHosts, true);

    return $originAllowed || $refererAllowed;
}

function detectClientIp(): string
{
    $candidates = [];

    $cfConnectingIp = trim((string) ($_SERVER["HTTP_CF_CONNECTING_IP"] ?? ""));
    if ($cfConnectingIp !== "") {
        $candidates[] = $cfConnectingIp;
    }

    $xForwardedFor = trim((string) ($_SERVER["HTTP_X_FORWARDED_FOR"] ?? ""));
    if ($xForwardedFor !== "") {
        $parts = explode(",", $xForwardedFor);
        $candidates[] = trim($parts[0] ?? "");
    }

    $remoteAddr = trim((string) ($_SERVER["REMOTE_ADDR"] ?? ""));
    if ($remoteAddr !== "") {
        $candidates[] = $remoteAddr;
    }

    foreach ($candidates as $candidate) {
        if ($candidate !== "" && filter_var($candidate, FILTER_VALIDATE_IP) !== false) {
            return $candidate;
        }
    }

    return "";
}

function isValidPhoneNumber(string $phone): bool
{
    if ($phone === "") {
        return true;
    }

    if (preg_match('/^\+?[0-9\s().-]+$/', $phone) !== 1) {
        return false;
    }

    $digitsOnly = preg_replace('/\D+/', '', $phone);
    if (!is_string($digitsOnly)) {
        return false;
    }

    $digitCount = strlen($digitsOnly);
    return $digitCount >= 7 && $digitCount <= 15;
}

$envFilePath = __DIR__ . "/env.php";
if (!is_file($envFilePath)) {
    respond(500, [
        "ok" => false,
        "message" => "Missing server config file.",
    ]);
}

$config = require $envFilePath;
if (!is_array($config)) {
    respond(500, [
        "ok" => false,
        "message" => "Invalid server config format.",
    ]);
}

$originHostsConfig = $config["security"]["origin_hosts"] ?? [];
if (!is_array($originHostsConfig)) {
    respond(500, [
        "ok" => false,
        "message" => "Invalid origin host config.",
    ]);
}

$allowedOriginHosts = [];
foreach ($originHostsConfig as $host) {
    if (!is_string($host)) {
        continue;
    }

    $normalized = rtrim(strtolower(trim($host)), ".");
    if ($normalized !== "") {
        $allowedOriginHosts[] = $normalized;
    }
}
$allowedOriginHosts = array_values(array_unique($allowedOriginHosts));

if ($allowedOriginHosts === []) {
    respond(500, [
        "ok" => false,
        "message" => "No allowed origin hosts configured.",
    ]);
}

if (!isSubmissionFromAllowedHost($allowedOriginHosts)) {
    respond(403, [
        "ok" => false,
        "message" => "Forbidden origin.",
    ]);
}

if (
    isset($_SERVER["HTTP_ORIGIN"])
    && is_string($_SERVER["HTTP_ORIGIN"])
    && normalizedHostFromUrl($_SERVER["HTTP_ORIGIN"]) !== ""
    && in_array(normalizedHostFromUrl($_SERVER["HTTP_ORIGIN"]), $allowedOriginHosts, true)
) {
    header("Access-Control-Allow-Origin: " . $_SERVER["HTTP_ORIGIN"]);
    header("Vary: Origin");
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Allow: POST, OPTIONS");
    respond(405, [
        "ok" => false,
        "message" => "Method not allowed.",
    ]);
}

$contentType = $_SERVER["CONTENT_TYPE"] ?? "";
$rawInput = file_get_contents("php://input");
$data = [];

if (str_contains(strtolower($contentType), "application/json")) {
    if ($rawInput === false || trim($rawInput) === "") {
        respond(400, [
            "ok" => false,
            "message" => "Request body is required.",
        ]);
    }

    try {
        $decoded = json_decode($rawInput, true, 512, JSON_THROW_ON_ERROR);
    } catch (JsonException $e) {
        respond(400, [
            "ok" => false,
            "message" => "Invalid JSON body.",
        ]);
    }

    if (!is_array($decoded)) {
        respond(400, [
            "ok" => false,
            "message" => "Invalid request format.",
        ]);
    }

    $data = $decoded;
} else {
    $data = $_POST;
}

$name = trim((string) ($data["name"] ?? ""));
$email = trim((string) ($data["email"] ?? ""));
$phone = trim((string) ($data["phone"] ?? ""));
$school = trim((string) ($data["school"] ?? ""));

if ($name === "" || $email === "") {
    respond(422, [
        "ok" => false,
        "message" => "Name and email are required.",
    ]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, [
        "ok" => false,
        "message" => "Email format is invalid.",
    ]);
}

if (mb_strlen($name) > 120 || mb_strlen($email) > 254 || mb_strlen($phone) > 40 || mb_strlen($school) > 200) {
    respond(422, [
        "ok" => false,
        "message" => "One or more fields are too long.",
    ]);
}

if (!isValidPhoneNumber($phone)) {
    respond(422, [
        "ok" => false,
        "message" => "Phone number format is invalid.",
    ]);
}

if (!isset($config["db"]) || !is_array($config["db"])) {
    respond(500, [
        "ok" => false,
        "message" => "Invalid server config format.",
    ]);
}

$dbConfig = $config["db"];
$dbHost = trim((string) ($dbConfig["host"] ?? ""));
$dbPort = (int) ($dbConfig["port"] ?? 3306);
$dbName = trim((string) ($dbConfig["name"] ?? ""));
$dbUser = trim((string) ($dbConfig["user"] ?? ""));
$dbPass = (string) ($dbConfig["pass"] ?? "");
$clientIp = detectClientIp();

if ($dbHost === "" || $dbName === "" || $dbUser === "" || $dbPort < 1 || $dbPort > 65535) {
    respond(500, [
        "ok" => false,
        "message" => "Database configuration is missing.",
    ]);
}

if ($clientIp === "") {
    respond(500, [
        "ok" => false,
        "message" => "Could not identify client address.",
    ]);
}

$dsn = sprintf("mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4", $dbHost, $dbPort, $dbName);

try {
    $pdo = new PDO(
        $dsn,
        $dbUser,
        $dbPass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS notify_request_logs (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            ip_address VARCHAR(45) NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            KEY idx_notify_request_logs_ip_created_at (ip_address, created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );

    $rateLimitStatement = $pdo->prepare(
        "SELECT COUNT(*) FROM notify_request_logs
         WHERE ip_address = :ip
         AND created_at >= (NOW() - INTERVAL 1 HOUR)"
    );
    $rateLimitStatement->execute([
        ":ip" => $clientIp,
    ]);
    $requestsInWindow = (int) $rateLimitStatement->fetchColumn();

    if ($requestsInWindow >= RATE_LIMIT_MAX_REQUESTS_PER_HOUR) {
        respond(429, [
            "ok" => false,
            "message" => "Too many requests from your IP. Please try again later.",
        ]);
    }

    $logRequestStatement = $pdo->prepare(
        "INSERT INTO notify_request_logs (ip_address) VALUES (:ip)"
    );
    $logRequestStatement->execute([
        ":ip" => $clientIp,
    ]);

    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS notify_subscribers (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(120) NOT NULL,
            email VARCHAR(254) NOT NULL,
            phone VARCHAR(40) NULL,
            school VARCHAR(200) NULL,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            UNIQUE KEY uq_notify_subscribers_email (email)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
    );

    $statement = $pdo->prepare(
        "INSERT INTO notify_subscribers (name, email, phone, school)
         VALUES (:name, :email, :phone, :school)"
    );

    $statement->execute([
        ":name" => $name,
        ":email" => strtolower($email),
        ":phone" => $phone !== "" ? $phone : null,
        ":school" => $school !== "" ? $school : null,
    ]);
} catch (PDOException $e) {
    $mysqlErrorCode = isset($e->errorInfo[1]) ? (int) $e->errorInfo[1] : 0;
    if ($mysqlErrorCode === 1062) {
        respond(409, [
            "ok" => false,
            "message" => "That email is already on the notify list.",
        ]);
    }

    error_log("notify-me.php database error: " . $e->getMessage());

    respond(500, [
        "ok" => false,
        "message" => "Unable to save your request right now.",
    ]);
}

respond(201, [
    "ok" => true,
    "message" => "You have been added to the notify list.",
]);
