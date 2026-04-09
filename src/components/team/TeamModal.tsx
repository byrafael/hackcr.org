import { useEffect } from "react";
import { Link2, X } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../common/SocialIcons.tsx";
import type { TeamMember } from "./types.ts";
import { getAvatarToken } from "./utils.ts";

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const { locale } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !member) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative glass-card rounded-2xl p-8 max-w-lg w-full mx-auto animate-slide-up"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream/40 hover:text-cream transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex gap-6">
          <div
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shrink-0 flex items-center justify-center text-3xl md:text-4xl font-display font-bold text-void"
            style={{ backgroundColor: member.color }}
          >
            {getAvatarToken(member.name)}
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-1">{member.name}</h2>
            <p
              className="text-sm md:text-base font-mono uppercase tracking-wider mb-4"
              style={{ color: member.color }}
            >
              {member.role[locale]}
            </p>

            <p className="text-cream/60 text-sm md:text-base italic mb-6">
              &ldquo;{member.quote[locale]}&rdquo;
            </p>

            {member.socials && (
              <div className="flex items-center gap-4">
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 hover:text-cyber transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 hover:text-cyber transition-colors"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 hover:text-cyber transition-colors"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/40 hover:text-cyber transition-colors"
                  >
                    <Link2 className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
