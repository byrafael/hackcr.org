export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  color: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}
