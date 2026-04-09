import { HeartHandshake } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

export function SponsorsSection() {
  const { copy } = useLanguage();

  return (
    <section id="sponsors" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet">
            {copy.home.sponsors.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6">
            {copy.home.sponsors.heading}
          </h2>
          <p className="text-lg text-cream/40 mt-4 max-w-xl mx-auto">
            {copy.home.sponsors.description}
          </p>
        </div>

        <div className="reveal glass-card rounded-2xl p-12 md:p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-4xl mb-6">🤝</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              {copy.home.sponsors.cardTitle}
            </h3>
            <p className="text-cream/50 text-lg mb-8 leading-relaxed">
              {copy.home.sponsors.cardDescription}
            </p>
            <a
              href="mailto:sponsor@hackcr.org"
              className="btn-primary px-8 py-4 inline-flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              {copy.home.sponsors.cta}
            </a>
          </div>
        </div>

        <div className="text-center mt-12 reveal flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-white/10" />
          <a
            href="mailto:sponsor@hackcr.org"
            className="text-cream/30 hover:text-cyber transition-colors text-sm font-mono"
          >
            sponsor@hackcr.org
          </a>
          <div className="h-px w-12 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
