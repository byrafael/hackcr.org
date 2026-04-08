export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function getAvatarToken(name: string): string {
  if (name.trim().toLowerCase() === "coming soon") {
    return "?";
  }

  return getInitials(name);
}

export function toCamelCaseId(name: string): string {
  return name.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char: string) => char.toUpperCase());
}
