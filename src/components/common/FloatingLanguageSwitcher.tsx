import { Globe } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

export function FloatingLanguageSwitcher() {
  const { locale, toggleLocale, copy } = useLanguage();
  const nextLocaleLabel =
    locale === "en"
      ? copy.common.languageSwitcher.switchToSpanish
      : copy.common.languageSwitcher.switchToEnglish;

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={nextLocaleLabel}
      title={nextLocaleLabel}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-lg border border-cyber/30 bg-void-light/90 px-4 py-3 text-sm font-display font-semibold uppercase tracking-wider text-cream shadow-lg shadow-cyber/10 backdrop-blur-md transition-all duration-300 hover:border-cyber hover:bg-void-light hover:text-cyber hover:shadow-cyber/20"
    >
      <Globe className="h-4 w-4 text-cyber" />
      <span className="flex items-center gap-1.5">
        <span className={locale === "en" ? "text-cyber" : "text-cream/50"}>EN</span>
        <span className="text-cream/30">/</span>
        <span className={locale === "es" ? "text-cyber" : "text-cream/50"}>ES</span>
      </span>
    </button>
  );
}
