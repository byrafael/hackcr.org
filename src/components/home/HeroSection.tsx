import { Bell, ChevronDown } from "lucide-react";

import { CountdownTimer } from "../common/CountdownTimer.tsx";
import { GridPattern } from "../common/GridPattern.tsx";

interface HeroSectionProps {
  onOpenNotify: () => void;
}

export function HeroSection({ onOpenNotify }: HeroSectionProps) {
  const handleLearnMore = () => {
    const target = document.getElementById("about");
    if (!target) {
      return;
    }

    const navOffset = 96;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0c0c10]" />
      <GridPattern className="absolute inset-0 text-[#00f5d4]" />

      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00f5d4]/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#39ff14]/10 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-[#00f5d4]/60 mb-8 animate-slide-up">
          November 21-22, 2026 &bull; San Jose, CR
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-slide-up delay-200">
          <span className="text-[#00f5d4]">Hack</span>
          <span className="text-[#f8f9fa]"> Costa Rica</span>
        </h1>

        <p className="text-lg md:text-xl text-[#f8f9fa]/40 font-body max-w-xl mx-auto mb-12 animate-slide-up delay-300">
          24 hours. 200+ students. One unforgettable weekend of building.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-400">
          <button
            onClick={onOpenNotify}
            className="btn-primary px-10 py-4 text-base inline-flex items-center gap-2"
          >
            <Bell className="w-4 h-4" />
            Get Notified
          </button>
          <button
            type="button"
            onClick={handleLearnMore}
            className="btn-secondary px-10 py-4 text-base inline-flex items-center gap-2"
          >
            Learn More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-20 animate-slide-up delay-500">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#f8f9fa]/20 mb-6">
            Registration opens in
          </p>
          <div className="flex justify-center">
            <CountdownTimer targetDate="2026-10-01T00:00:00" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/20">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f5d4] to-transparent" />
      </div>
    </section>
  );
}
