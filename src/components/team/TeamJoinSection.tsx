import { UserPlus } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";

export function TeamJoinSection() {
  const { copy } = useLanguage();

  return (
    <section className="relative py-16 md:py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{copy.team.join.title}</h2>
        <p className="text-cream/40 mb-8 max-w-xl mx-auto">{copy.team.join.description}</p>
        <a
          href="/apply"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-8 py-4 inline-flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          {copy.team.join.cta}
        </a>
      </div>
    </section>
  );
}
