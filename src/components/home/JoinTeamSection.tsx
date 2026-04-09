import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { teamLeads, teamMedium } from "../team/data.ts";

function countOpenings(members: Array<{ name: string }>): number {
  return members.filter((m) => m.name === "Coming Soon").length;
}

export function JoinTeamSection() {
  const { copy } = useLanguage();
  const coLeadOpenings = countOpenings(teamLeads);
  const directorOpenings = countOpenings(teamMedium);

  return (
    <section className="relative py-24 md:py-32 px-6 border-t border-white/5 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="reveal">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-violet">
              {copy.home.joinTeam.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4">
              {copy.home.joinTeam.title}{" "}
              <span className="text-cyber">{copy.home.joinTeam.titleAccent}</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-2xl mx-auto">
              {copy.home.joinTeam.description}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Co-Leads */}
            <div className="glass-card p-8 text-center group hover:border-matrix/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-matrix mb-2">
                {coLeadOpenings}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-cream/40 mb-2">
                {copy.home.joinTeam.stats.coLeadTitle}
              </div>
              <p className="text-sm text-cream/30">{copy.home.joinTeam.stats.coLeadDescription}</p>
            </div>

            {/* Directors */}
            <div className="glass-card p-8 text-center group hover:border-violet/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-violet mb-2">
                {directorOpenings}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-cream/40 mb-2">
                {copy.home.joinTeam.stats.directorTitle}
              </div>
              <p className="text-sm text-cream/30">
                {copy.home.joinTeam.stats.directorDescription}
              </p>
            </div>

            {/* Team Members */}
            <div className="glass-card p-8 text-center group hover:border-cyber/30 transition-colors">
              <div className="font-display text-5xl md:text-6xl font-bold text-cyber mb-2">∞</div>
              <div className="text-xs font-mono uppercase tracking-wider text-cream/40 mb-2">
                {copy.home.joinTeam.stats.teamMemberTitle}
              </div>
              <p className="text-sm text-cream/30">
                {copy.home.joinTeam.stats.teamMemberDescription}
              </p>
            </div>
          </div>

          {/* Department pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {copy.home.joinTeam.departments.map((dept, i) => (
              <span
                key={dept}
                className="px-4 py-2 rounded-full text-sm font-mono border border-white/10 text-cream/60 hover:border-cyber/50 hover:text-cyber transition-colors"
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
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base inline-flex items-center gap-3"
            >
              <span>{copy.home.joinTeam.cta}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <p className="text-sm text-cream/20 mt-4 font-mono">{copy.home.joinTeam.footnote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
