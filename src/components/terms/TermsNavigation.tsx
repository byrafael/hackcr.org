import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

interface TermsNavigationProps {
  scrollY: number;
}

export function TermsNavigation({ scrollY }: TermsNavigationProps) {
  const { copy } = useLanguage();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrollY > 50 ? "rgba(12, 12, 16, 0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-cyber">
          hackcr
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-display uppercase tracking-wider text-cream/50 hover:text-cyber transition-colors duration-300"
          >
            {copy.common.nav.home}
          </Link>
          <Link
            to="/team"
            className="text-sm font-display uppercase tracking-wider text-cream/50 hover:text-cyber transition-colors duration-300"
          >
            {copy.common.nav.team}
          </Link>
          <span className="text-sm font-display uppercase tracking-wider text-cyber">
            {copy.common.nav.terms}
          </span>
        </div>
      </div>
    </nav>
  );
}
