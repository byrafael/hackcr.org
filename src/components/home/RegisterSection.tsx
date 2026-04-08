import { Bell } from "lucide-react";

import { ParticipationNotice } from "../common/ParticipationNotice.tsx";

interface RegisterSectionProps {
  onOpenNotify: () => void;
}

export function RegisterSection({ onOpenNotify }: RegisterSectionProps) {
  return (
    <section id="register" className="relative py-32 md:py-40 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#39ff14]">
            06 / Register
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold mt-6 mb-8">
            Ready to build?
          </h2>
          <p className="text-lg md:text-xl text-[#f8f9fa]/40 max-w-2xl mx-auto mb-12">
            Join 200 students
            <ParticipationNotice className="ml-0.5" /> for 24 hours of coding, learning, and
            creating. Spots are limited.
          </p>
          <button
            onClick={onOpenNotify}
            className="btn-primary px-12 py-5 text-lg inline-flex items-center gap-3"
          >
            <Bell className="w-5 h-5" />
            Get Notified
          </button>
          <p className="text-sm text-[#f8f9fa]/20 mt-6 font-mono">
            Registration opens October 1st, 2026
          </p>
        </div>
      </div>
    </section>
  );
}
