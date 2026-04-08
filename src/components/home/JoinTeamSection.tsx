import { teamLeads, teamMedium } from "../team/data.ts";

function countOpenings(members: { name: string; role: string }[]): number {
  return members.filter((m) => m.name === "Coming Soon").length;
}

export function JoinTeamSection() {
  const coLeadOpenings = countOpenings(teamLeads);
  const directorOpenings = countOpenings(teamMedium);

  return (
    <section className="relative py-24 md:py-32 px-6 border-t border-white/5 bg-[#0c0c10]">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#9d4edd]">
              02 / Join The Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4">
              Help us build <span className="text-[#00f5d4]">HackCR</span>
            </h2>
            <p className="text-lg text-[#f8f9fa]/50 max-w-2xl mx-auto">
              We&apos;re looking for passionate high school students to join our organizing team. No
              experience needed—just enthusiasm and a willingness to learn.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Co-Leads */}
            <div className="glass-card p-8 text-center group hover:border-[#39ff14]/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-[#39ff14] mb-2">
                {coLeadOpenings}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/40 mb-2">
                Co-Lead Positions
              </div>
              <p className="text-sm text-[#f8f9fa]/30">
                Work directly with the founder to shape HackCR
              </p>
            </div>

            {/* Directors */}
            <div className="glass-card p-8 text-center group hover:border-[#b967ff]/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-[#b967ff] mb-2">
                {directorOpenings}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/40 mb-2">
                Director Positions
              </div>
              <p className="text-sm text-[#f8f9fa]/30">Lead one of our key departments</p>
            </div>

            {/* Team Members */}
            <div className="glass-card p-8 text-center group hover:border-[#00f5d4]/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-[#00f5d4] mb-2">
                ∞
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#f8f9fa]/40 mb-2">
                Team Members
              </div>
              <p className="text-sm text-[#f8f9fa]/30">Join a department and help make it happen</p>
            </div>
          </div>

          {/* Department pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Operations",
              "Outreach",
              "Sponsorship",
              "Design",
              "Tech",
              "Finance",
              "Community",
            ].map((dept, i) => (
              <span
                key={dept}
                className="px-4 py-2 rounded-full text-sm font-mono border border-white/10 text-[#f8f9fa]/60 hover:border-[#00f5d4]/50 hover:text-[#00f5d4] transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {dept}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/apply"
              className="btn-primary px-10 py-4 text-base inline-flex items-center gap-3"
            >
              <span>Apply to Join</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <p className="text-sm text-[#f8f9fa]/20 mt-4 font-mono">
              Open to all high school students (ages 13-18)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
