import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { ParticipationNotice } from "../common/ParticipationNotice.tsx";

export function AboutSection() {
  const { copy } = useLanguage();

  return (
    <section id="about" className="relative py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-matrix">
              {copy.home.about.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-8 leading-[1.1]">
              {copy.home.about.titleBeforeAccent}
              <br />
              <span className="text-cyber">{copy.home.about.titleAccent}</span>{" "}
              {copy.home.about.titleAfterAccent}
            </h2>
            <p className="text-lg text-cream/50 leading-relaxed mb-6">
              {copy.home.about.descriptionOne}
            </p>
            <p className="text-lg text-cream/50 leading-relaxed mb-10">
              {copy.home.about.descriptionTwo}
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-cyber">24h</div>
                <div className="text-xs font-mono uppercase tracking-wider text-cream/30 mt-1">
                  {copy.home.about.stats.hacking}
                </div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-matrix">200+</div>
                <div className="text-xs font-mono uppercase tracking-wider text-cream/30 mt-1 flex items-start gap-1">
                  {copy.home.about.stats.hackers}
                  <ParticipationNotice />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-cyber/10 to-matrix/10 blur-2xl" />
              <div className="relative glass-card p-1">
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-matrix" />
                    <div className="terminal-dot bg-cyber" />
                    <div className="terminal-dot bg-violet" />
                  </div>
                  <div className="terminal-body text-sm md:text-base">
                    <p>
                      <span className="terminal-prompt">$</span> whoami
                    </p>
                    <p className="mb-4 text-cream/40">{copy.home.about.terminal.identity}</p>
                    <p>
                      <span className="terminal-prompt">$</span> cat mission.txt
                    </p>
                    <p className="mb-4 text-cream/40">{copy.home.about.terminal.mission}</p>
                    <p>
                      <span className="terminal-prompt">$</span> ls tracks/
                    </p>
                    <p className="text-cream/40">{copy.home.about.terminal.tracksLineOne}</p>
                    <p className="mb-4 text-cream/40">{copy.home.about.terminal.tracksLineTwo}</p>
                    <p>
                      <span className="terminal-prompt">$</span>{" "}
                      <span className="animate-pulse">_</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
