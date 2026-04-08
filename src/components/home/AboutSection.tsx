import { ParticipationNotice } from "../common/ParticipationNotice.tsx";

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#39ff14]">
              01 / About
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-8 leading-[1.1]">
              Build the
              <br />
              <span className="text-[#00f5d4]">future</span> in 24 hours
            </h2>
            <p className="text-lg text-[#f8f9fa]/50 leading-relaxed mb-6">
              HackCR is Costa Rica&apos;s first high school hackathon, bringing together 200+
              students for a weekend of innovation. Whether you&apos;re writing your first line of
              code or deploying your tenth app, this is where you level up.
            </p>
            <p className="text-lg text-[#f8f9fa]/50 leading-relaxed mb-10">
              Join workshops, network with industry mentors, and turn ideas into working prototypes.
              You don&apos;t need any experience, just curiosity and a laptop.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-[#00f5d4]">
                  24h
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/30 mt-1">
                  Of hacking
                </div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-[#39ff14]">
                  200+
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/30 mt-1 flex items-start gap-1">
                  Hackers
                  <ParticipationNotice />
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00f5d4]/10 to-[#39ff14]/10 blur-2xl" />
              <div className="relative glass-card p-1">
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#39ff14]" />
                    <div className="terminal-dot bg-[#00f5d4]" />
                    <div className="terminal-dot bg-[#b967ff]" />
                  </div>
                  <div className="terminal-body text-sm md:text-base">
                    <p>
                      <span className="terminal-prompt">$</span> whoami
                    </p>
                    <p className="mb-4 text-[#f8f9fa]/40">high_school_innovator</p>
                    <p>
                      <span className="terminal-prompt">$</span> cat mission.txt
                    </p>
                    <p className="mb-4 text-[#f8f9fa]/40">
                      Empower students to build the future through code, creativity, and community.
                    </p>
                    <p>
                      <span className="terminal-prompt">$</span> ls tracks/
                    </p>
                    <p className="text-[#f8f9fa]/40">
                      AI_&_ML/ Web_Dev/ OpenClaw/ Game_Dev/ Mobile/
                    </p>
                    <p className="mb-4 text-[#f8f9fa]/40">Social_Good/ Cybersecurity/</p>
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
