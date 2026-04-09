import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { LOCALE_STORAGE_KEY, type Locale, resolveInitialLocale } from "./locale.ts";
import { siteCopy, type SiteCopy } from "./siteCopy.ts";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: SiteCopy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(() => resolveInitialLocale());

  useEffect(() => {
    document.documentElement.lang = locale;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // Ignore storage failures and keep the in-memory preference.
    }
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
    };

    const toggleLocale = () => {
      setLocaleState((currentLocale) => (currentLocale === "en" ? "es" : "en"));
    };

    return {
      locale,
      setLocale,
      toggleLocale,
      copy: siteCopy[locale],
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}
