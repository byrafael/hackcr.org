import { teamLeads, teamMedium, teamSmall } from "./data.ts";
import { TeamMemberCircle } from "./TeamMemberCircle.tsx";
import type { TeamMember } from "./types.ts";
import { toCamelCaseId } from "./utils.ts";

interface TeamGridSectionProps {
  onSelect: (member: TeamMember) => void;
}

export function TeamGridSection({ onSelect }: TeamGridSectionProps) {
  return (
    <section className="relative py-12 md:py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          {teamLeads.map((member, index) => (
            <TeamMemberCircle
              key={`${toCamelCaseId(member.name)}-lead-${index}`}
              member={member}
              size="large"
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
          {teamMedium.map((member, index) => (
            <TeamMemberCircle
              key={`${toCamelCaseId(member.name)}-medium-${index}`}
              member={member}
              size="medium"
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3 md:gap-6 mb-8 flex-wrap">
          {teamSmall.slice(0, 8).map((member, index) => (
            <TeamMemberCircle
              key={`${toCamelCaseId(member.name)}-small-a-${index}`}
              member={member}
              size="small"
              onSelect={onSelect}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
          {teamSmall.slice(8).map((member, index) => (
            <TeamMemberCircle
              key={`${toCamelCaseId(member.name)}-small-b-${index}`}
              member={member}
              size="small"
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
