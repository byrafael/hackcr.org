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

interface CodeSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}

function CodeSection({ icon, title, children, accentColor = "#00f5d4" }: CodeSectionProps) {
  return (
    <div className="glass-card rounded-xl p-8 md:p-10 transition-all duration-300 hover:border-white/10">
      <div className="flex items-start gap-6">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ background: `rgba(0, 245, 212, 0.1)`, color: accentColor }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <div className="text-[#f8f9fa]/70 leading-relaxed space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function CocContentSection() {
  return (
    <section className="relative py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Card */}
        <div className="relative mb-16">
          {/* Gradient border effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00f5d4] via-[#39ff14] to-[#b967ff] rounded-2xl opacity-30" />
          <div className="relative glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00f5d4]/20 to-[#39ff14]/20 flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#00f5d4]" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
                A Safe Space for Everyone
              </h2>
              <p className="text-lg text-[#f8f9fa]/70 max-w-2xl leading-relaxed mb-8">
                Hack Costa Rica is dedicated to providing a harassment-free experience for everyone.
                We welcome participants from all backgrounds and identities.
              </p>

              {/* Protected Characteristics Grid */}
              <div className="w-full">
                <p className="text-sm font-mono uppercase tracking-wider text-[#f8f9fa]/40 mb-4">
                  This includes, but is not limited to
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {[
                    "Gender",
                    "Gender Identity",
                    "Age",
                    "Sexual Orientation",
                    "Disability",
                    "Physical Appearance",
                    "Body Size",
                    "Race",
                    "Ethnicity",
                    "Nationality",
                    "Religion",
                    "Technology Choices",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/20 hover:bg-[#00f5d4]/20 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Sections */}
        <div className="space-y-6">
          <CodeSection icon={<Heart className="w-6 h-6" />} title="Our Values">
            <p>
              We believe in fostering a community where everyone feels welcome to learn, create, and
              collaborate. Our hackathon is built on the principles of:
            </p>
            <ul className="space-y-2 mt-4 list-disc list-inside">
              <li>
                <strong className="text-[#f8f9fa]">Inclusivity:</strong> Everyone has something
                valuable to contribute, regardless of experience level.
              </li>
              <li>
                <strong className="text-[#f8f9fa]">Respect:</strong> Treat all participants,
                mentors, judges, and organizers with kindness and professionalism.
              </li>
              <li>
                <strong className="text-[#f8f9fa]">Collaboration:</strong> Help others learn and
                grow while working together toward common goals.
              </li>
              <li>
                <strong className="text-[#f8f9fa]">Integrity:</strong> Be honest in your work and
                respectful of others&apos; intellectual property.
              </li>
            </ul>
          </CodeSection>

          <CodeSection icon={<Users className="w-6 h-6" />} title="Expected Behavior">
            <p>We expect all participants to:</p>
            <ul className="space-y-2 mt-4 list-disc list-inside">
              <li>
                Participate in an authentic and active way, contributing to the health and longevity
                of the community.
              </li>
              <li>Exercise consideration and respect in your speech and actions.</li>
              <li>Attempt collaboration before conflict.</li>
              <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
              <li>Be mindful of your surroundings and of your fellow participants.</li>
              <li>
                Alert community leaders if you notice a dangerous situation, someone in distress, or
                violations of this Code of Conduct.
              </li>
            </ul>
          </CodeSection>

          <CodeSection icon={<AlertTriangle className="w-6 h-6" />} title="Unacceptable Behavior">
            <p>Unacceptable behaviors include, but are not limited to:</p>
            <ul className="space-y-2 mt-4 list-disc list-inside">
              <li>
                Intimidation, harassment, abuse, discrimination, derogatory or demeaning conduct.
              </li>
              <li>
                Offensive comments related to personal characteristics or choices, including those
                related to gender, gender identity, sexual orientation, race, religion, or
                disability.
              </li>
              <li>Inappropriate use of nudity and/or sexual images or language.</li>
              <li>Threats of violence or violent language directed against another person.</li>
              <li>Stalking or following someone without their consent.</li>
              <li>
                Harassing photography or recording, including logging online activity for harassment
                purposes.
              </li>
              <li>Sustained disruption of talks or other events.</li>
              <li>Unwelcome sexual attention or advances.</li>
              <li>Advocating for, or encouraging, any of the above behavior.</li>
            </ul>
          </CodeSection>

          <CodeSection icon={<Shield className="w-6 h-6" />} title="Enforcement">
            <p>
              Participants asked to stop any unacceptable behavior are expected to comply
              immediately. If a participant engages in unacceptable behavior, the organizers retain
              the right to take any actions to keep the event a welcoming environment for all
              participants.
            </p>
            <p className="mt-4">
              This includes warning the offender, expulsion from the hackathon with a report to
              parents/guardians/educational institutions, and/or reporting their behavior to local
              law enforcement / appropriate authorities.
            </p>
            <p className="mt-4">
              Organizers may take action to redress anything designed to, or with the clear impact
              of, disrupting the event or making the environment hostile for any participants.
            </p>
          </CodeSection>

          <CodeSection icon={<MessageCircle className="w-6 h-6" />} title="Reporting">
            <p>
              If you are subject to or witness unacceptable behavior, or have any other concerns,
              please notify a hackathon organizer as soon as possible. You can also contact us via
              email at any time, at{" "}
              <a
                href="mailto:conduct@hackcr.org"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] font-mono text-xs hover:bg-[#00f5d4]/20 hover:border-[#00f5d4]/50 transition-all duration-300"
              >
                conduct@hackcr.org
              </a>
              .
            </p>
            <p className="mt-4">
              All reports will be handled with discretion and confidentiality. We will investigate
              promptly and thoroughly, and take appropriate action based on the circumstances.
            </p>
            <p className="mt-4">In your report, please include:</p>
            <ul className="space-y-2 mt-4 list-disc list-inside">
              <li>Your contact information</li>
              <li>Names (real, nicknames, or pseudonyms) of any individuals involved</li>
              <li>Description of the incident</li>
              <li>Date and time of the incident</li>
              <li>Any additional context or evidence</li>
            </ul>
          </CodeSection>
        </div>

        {/* This Policy */}
        <div className="mt-6">
          <CodeSection icon={<FilePen className="w-6 h-6" />} title="This Policy">
            <p>
              Hack Costa Rica reserves the right to amend, modify, or update this Code of Conduct,
              as well as any and all other policies, guidelines, or terms, at any time without prior
              notice. Changes will become effective immediately upon posting to our website or
              communication through official channels.
            </p>
            <p className="mt-4">
              Continued participation in HackCR events constitutes acceptance of any revised
              policies. We encourage all participants to review our policies periodically to stay
              informed of any updates.
            </p>
            <p className="mt-4">
              The HackCR Leads and Organizing Team reserve the right and authority to interpret this
              Code of Conduct, including what constitutes the spirit of the conduct, and may issue
              violations when behavior violates the spirit of this code even if it does not
              explicitly violate the text.
            </p>
          </CodeSection>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <Mail className="w-12 h-12 text-[#00f5d4] mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold mb-4">Questions or Concerns?</h3>
            <p className="text-[#f8f9fa]/60 mb-6 max-w-lg mx-auto">
              If you have any questions about this Code of Conduct, or need to report an incident,
              please don&apos;t hesitate to reach out to our team.
            </p>
            <a
              href="mailto:conduct@hackcr.org"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f5d4]/10 border border-[#00f5d4]/30 text-[#00f5d4] font-mono text-sm tracking-wide hover:bg-[#00f5d4]/20 hover:border-[#00f5d4]/50 hover:scale-[1.02] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              conduct@hackcr.org
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#f8f9fa]/30 font-mono">Last updated: April 7th, 2026</p>
        </div>
      </div>
    </section>
  );
}
