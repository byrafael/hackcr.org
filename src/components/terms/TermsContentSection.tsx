import {
  AlertTriangle,
  Clock,
  Copyright,
  Database,
  ExternalLink,
  FileText,
  Gavel,
  Globe,
  Handshake,
  Languages,
  Mail,
  Puzzle,
  Scale,
  Shield,
  Ban,
  UserX,
} from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { termsContent } from "./termsContent.tsx";

interface TermsSectionProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function TermsSection({ number, icon, title, children }: TermsSectionProps) {
  return (
    <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:border-white/10 md:p-10">
      <div className="flex items-start gap-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyber/10 text-cyber">
          {icon}
        </div>
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs text-cyber/60">{number}</span>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-cream/70">{children}</div>
        </div>
      </div>
    </div>
  );
}

const termsIcons = [
  <Database className="h-6 w-6" />,
  <Shield className="h-6 w-6" />,
  <Ban className="h-6 w-6" />,
  <FileText className="h-6 w-6" />,
  <Copyright className="h-6 w-6" />,
  <ExternalLink className="h-6 w-6" />,
  <Globe className="h-6 w-6" />,
  <UserX className="h-6 w-6" />,
  <Handshake className="h-6 w-6" />,
  <AlertTriangle className="h-6 w-6" />,
  <Scale className="h-6 w-6" />,
  <Gavel className="h-6 w-6" />,
  <Globe className="h-6 w-6" />,
  <Languages className="h-6 w-6" />,
  <Clock className="h-6 w-6" />,
  <Puzzle className="h-6 w-6" />,
  <FileText className="h-6 w-6" />,
  <Mail className="h-6 w-6" />,
] as const;

export function TermsContentSection() {
  const { locale } = useLanguage();
  const content = termsContent[locale];

  return (
    <section className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-12">
          <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-cyber via-matrix to-violet opacity-30" />
          <div className="relative glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyber/10">
                  <Clock className="h-6 w-6 text-cyber" />
                </div>
                <div>
                  <p className="font-mono text-sm uppercase tracking-wider text-cream/50">
                    {content.lastUpdatedLabel}
                  </p>
                  <p className="font-display text-lg font-bold text-cream">{content.currentDate}</p>
                </div>
              </div>
              <p className="max-w-md text-center text-sm text-cream/60 md:text-right">
                {content.bannerSummary}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 glass-card rounded-xl p-8 md:p-10">
          <div className="space-y-4 leading-relaxed text-cream/70">{content.intro}</div>
        </div>

        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <TermsSection
              key={section.number}
              number={section.number}
              icon={termsIcons[index]}
              title={section.title}
            >
              {section.body}
            </TermsSection>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <Mail className="mx-auto mb-6 h-12 w-12 text-cyber" />
            <h3 className="mb-4 font-display text-2xl font-bold">{content.contactTitle}</h3>
            <p className="mx-auto mb-6 max-w-lg text-cream/60">{content.contactDescription}</p>
            <a
              href="mailto:legal@hackcr.org"
              className="inline-flex items-center gap-2 rounded-lg border border-cyber/30 bg-cyber/10 px-6 py-3 font-mono text-sm tracking-wide text-cyber transition-all duration-300 hover:scale-[1.02] hover:border-cyber/50 hover:bg-cyber/20"
            >
              <Mail className="h-4 w-4" />
              legal@hackcr.org
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-mono text-sm text-cream/30">
            {content.lastUpdatedPrefix} {content.currentDate}
          </p>
        </div>
      </div>
    </section>
  );
}
