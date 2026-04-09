<?php

declare(strict_types=1);

/**
 * Prevent direct access and only allow this file to be loaded by notify-me.php.
 */
if (PHP_SAPI !== "cli") {
    $thisFile = realpath(__FILE__) ?: __FILE__;
    $entryScript = realpath((string) ($_SERVER["SCRIPT_FILENAME"] ?? "")) ?: "";

    if ($entryScript === "" || $entryScript === $thisFile) {
        http_response_code(404);
        exit;
    }

    if (basename($entryScript) !== "notify-me.php") {
        http_response_code(403);
        exit;
    }
}

return [
    "security" => [
        "origin_hosts" => [
            "hackcr.org",
            "www.hackcr.org",
            "hackcr.com",
            "www.hackcr.com",
            // "localhost",
            // "127.0.0.1",
            // "::1",
        ],
    ],
    "db" => [
        "host" => "127.0.0.1",
        "port" => 3306,
        "name" => "hackcr",
        "user" => "hackcr_user",
        "pass" => "change_me",
    ],
];
