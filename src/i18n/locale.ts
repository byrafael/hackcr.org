export type Locale = "en" | "es";

export const LOCALE_STORAGE_KEY = "hackcr.locale";

type StorageLike = Pick<Storage, "getItem">;

interface ResolveInitialLocaleOptions {
  storage?: StorageLike | null;
  languages?: readonly string[] | null;
}

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) {
    return null;
  }

  const [language] = value.trim().toLowerCase().split(/[-_]/);

  if (language === "en" || language === "es") {
    return language;
  }

  return null;
}

function getBrowserStorage(): StorageLike | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getBrowserLanguages(): readonly string[] {
  if (typeof navigator === "undefined") {
    return [];
  }

  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return navigator.languages;
  }

  return navigator.language ? [navigator.language] : [];
}

export function readStoredLocale(storage: StorageLike | null = getBrowserStorage()): Locale | null {
  if (!storage) {
    return null;
  }

  try {
    return normalizeLocale(storage.getItem(LOCALE_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function detectBrowserLocale(
  languages: readonly string[] | null = getBrowserLanguages(),
): Locale | null {
  if (!languages) {
    return null;
  }

  for (const language of languages) {
    const normalizedLanguage = normalizeLocale(language);

    if (normalizedLanguage) {
      return normalizedLanguage;
    }
  }

  return null;
}

export function resolveInitialLocale(options: ResolveInitialLocaleOptions = {}): Locale {
  const storedLocale = readStoredLocale(options.storage);

  if (storedLocale) {
    return storedLocale;
  }

  const browserLocale = detectBrowserLocale(options.languages);

  return browserLocale ?? "es";
}
