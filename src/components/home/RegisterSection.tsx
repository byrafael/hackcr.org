import { Bell } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { ParticipationNotice } from "../common/ParticipationNotice.tsx";

interface RegisterSectionProps {
  onOpenNotify: () => void;
}

export function RegisterSection({ onOpenNotify }: RegisterSectionProps) {
  const { copy } = useLanguage();

  return (
    <section id="register" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-matrix">
            {copy.home.register.eyebrow}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mt-6 mb-8">
            {copy.home.register.heading}
          </h2>
          <p className="text-lg md:text-xl text-cream/40 max-w-2xl mx-auto mb-12">
            {copy.home.register.bodyBeforeNotice}
            <ParticipationNotice className="ml-0.5" /> {copy.home.register.bodyAfterNotice}
          </p>
          <button
            type="button"
            onClick={onOpenNotify}
            className="btn-primary px-12 py-5 text-lg inline-flex items-center gap-3"
          >
            <Bell className="w-5 h-5" />
            {copy.home.register.cta}
          </button>
          <p className="text-sm text-cream/20 mt-6 font-mono">{copy.home.register.footnote}</p>
        </div>
      </div>
    </section>
  );
}
