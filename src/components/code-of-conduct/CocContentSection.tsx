import {
  AlertTriangle,
  FilePen,
  Heart,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import { useLanguage } from "../../i18n/LanguageProvider.tsx";
import { cocContent } from "./cocContent.tsx";

interface CodeSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}

function CodeSection({ icon, title, children, accentColor = "#00f5d4" }: CodeSectionProps) {
  return (
    <div className="glass-card rounded-xl p-8 transition-all duration-300 hover:border-white/10 md:p-10">
      <div className="flex items-start gap-6">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
          style={{ background: "rgba(0, 245, 212, 0.1)", color: accentColor }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">{title}</h2>
          <div className="space-y-4 leading-relaxed text-cream/70">{children}</div>
        </div>
      </div>
    </div>
  );
}

const sectionIcons = [
  <Heart className="h-6 w-6" />,
  <Users className="h-6 w-6" />,
  <AlertTriangle className="h-6 w-6" />,
  <Shield className="h-6 w-6" />,
  <MessageCircle className="h-6 w-6" />,
  <FilePen className="h-6 w-6" />,
] as const;

export function CocContentSection() {
  const { locale } = useLanguage();
  const content = cocContent[locale];

  return (
    <section className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-16">
          <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-cyber via-matrix to-violet opacity-30" />
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-cyber/20 to-matrix/20">
                <Sparkles className="h-8 w-8 text-cyber" />
              </div>
              <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">
                {content.introTitle}
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-cream/70">
                {content.introDescription}
              </p>

              <div className="w-full">
                <p className="mb-4 text-sm font-mono uppercase tracking-wider text-cream/40">
                  {content.protectedCharacteristicsLabel}
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {content.protectedCharacteristics.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyber/20 bg-cyber/10 px-4 py-2 text-sm font-medium text-cyber transition-colors duration-300 hover:bg-cyber/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <CodeSection key={section.title} icon={sectionIcons[index]} title={section.title}>
              {section.body}
            </CodeSection>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <Mail className="mx-auto mb-6 h-12 w-12 text-cyber" />
            <h3 className="mb-4 font-display text-2xl font-bold">{content.contactTitle}</h3>
            <p className="mx-auto mb-6 max-w-lg text-cream/60">{content.contactDescription}</p>
            <a
              href="mailto:conduct@hackcr.org"
              className="inline-flex items-center gap-2 rounded-lg border border-cyber/30 bg-cyber/10 px-6 py-3 font-mono text-sm tracking-wide text-cyber transition-all duration-300 hover:scale-[1.02] hover:border-cyber/50 hover:bg-cyber/20"
            >
              <Mail className="h-4 w-4" />
              conduct@hackcr.org
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
