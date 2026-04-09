import { Globe } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

export function LanguageSwitcher() {
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
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-display uppercase tracking-[0.25em] text-cream/70 transition-all duration-300 hover:border-cyber/40 hover:bg-cyber/10 hover:text-cyber"
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
