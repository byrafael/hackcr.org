import type { TeamMember } from "./types.ts";
import { getAvatarToken, getInitials } from "./utils.ts";

type TeamMemberCircleSize = "large" | "medium" | "small";

interface TeamMemberCircleProps {
  member: TeamMember;
  size: TeamMemberCircleSize;
  onSelect: (member: TeamMember) => void;
}

const sizeConfig = {
  large: {
    buttonClassName:
      "w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 flex items-center justify-center text-3xl md:text-4xl font-display font-bold text-[#0c0c10] mx-auto transition-transform duration-300 group-hover:scale-105",
    titleClassName: "font-display text-lg md:text-xl font-bold",
    subtitleClassName: "text-xs md:text-sm font-mono uppercase tracking-wider",
  },
  medium: {
    buttonClassName:
      "w-20 h-20 md:w-24 md:h-24 rounded-full mb-3 flex items-center justify-center text-xl md:text-2xl font-display font-bold text-[#0c0c10] mx-auto transition-transform duration-300 group-hover:scale-105",
    titleClassName: "font-display text-sm md:text-base font-bold",
    subtitleClassName: "text-xs font-mono uppercase tracking-wider",
  },
  small: {
    buttonClassName:
      "w-14 h-14 md:w-16 md:h-16 rounded-full mb-2 flex items-center justify-center text-sm md:text-base font-display font-bold text-[#0c0c10] mx-auto transition-transform duration-300 group-hover:scale-105",
    titleClassName: "text-xs font-mono text-[#f8f9fa]/40",
    subtitleClassName: "",
  },
} as const;

export function TeamMemberCircle({ member, size, onSelect }: TeamMemberCircleProps) {
  const config = sizeConfig[size];

  return (
    <div className="text-center group">
      <button
        onClick={() => onSelect(member)}
        className={config.buttonClassName}
        style={{ backgroundColor: member.color }}
      >
        {getAvatarToken(member.name)}
      </button>

      {size === "small" ? (
        <p className={config.titleClassName}>{getInitials(member.name)}</p>
      ) : (
        <>
          <h3 className={config.titleClassName}>{member.name}</h3>
          <p className={config.subtitleClassName} style={{ color: member.color }}>
            {member.role}
          </p>
        </>
      )}
    </div>
  );
}
