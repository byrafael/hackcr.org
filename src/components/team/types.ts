import type { Locale } from "../../i18n/locale.ts";

export type LocalizedText = Record<Locale, string>;

export interface TeamMember {
  name: string;
  role: LocalizedText;
  quote: LocalizedText;
  color: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
