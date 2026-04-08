import {
  Database,
  FileText,
  Scale,
  Shield,
  Mail,
  Clock,
  Lock,
  Globe,
  AlertCircle,
  BarChart3,
} from "lucide-react";

interface PrivacySectionProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function PrivacySection({ number, icon, title, children }: PrivacySectionProps) {
  return (
    <div className="glass-card rounded-xl p-8 md:p-10 transition-all duration-300 hover:border-white/10">
      <div className="flex items-start gap-6">
        <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-cyber/10 text-cyber">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-cyber/60">{number}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
          </div>
          <div className="text-cream/70 leading-relaxed space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyContentSection() {
  const contactEmail = "legal@hackcr.org";
  const currentDate = "April 7th, 2026";

  return (
    <section className="relative py-12 md:py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Last Updated Banner */}
        <div className="relative mb-12">
          <div className="absolute -inset-px bg-linear-to-r from-cyber via-matrix to-violet rounded-2xl opacity-30" />
          <div className="relative glass-card rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyber/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-cyber" />
                </div>
                <div>
                  <p className="text-sm text-cream/50 font-mono uppercase tracking-wider">
                    Last Updated
                  </p>
                  <p className="text-lg font-display font-bold text-cream">{currentDate}</p>
                </div>
              </div>
              <p className="text-sm text-cream/60 max-w-md text-center md:text-right">
                This Privacy Policy explains how we collect, use, and protect your personal
                information when you sign up to be notified about our upcoming events or interact
                with our website.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6">
          <PrivacySection
            number="01"
            icon={<Database className="w-6 h-6" />}
            title="Information We Collect"
          >
            <p className="font-medium text-cream mb-4">
              When you use our website or click Get Notified, we may collect:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-cyber font-medium mb-2">Information you provide:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>School name (optional)</li>
                </ul>
              </div>

              <div>
                <p className="text-cyber font-medium mb-2">Information collected automatically:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>IP address</li>
                  <li>
                    Basic usage and interaction data (telemetry), such as page visits, clicks, and
                    actions on the site
                  </li>
                  <li>Analytics data collected through Google Analytics</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-cream/50 italic">
              Providing optional information is entirely voluntary.
            </p>
          </PrivacySection>

          <PrivacySection
            number="02"
            icon={<FileText className="w-6 h-6" />}
            title="How We Use Your Information"
          >
            <p className="mb-4">We use your information to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Notify you when event registration opens</li>
              <li>Send relevant updates about the event</li>
              <li>Analyze website usage and improve our services</li>
              <li>Maintain the security and proper functioning of the website</li>
              <li>
                Prevent abuse or misuse of the platform, including restricting access when necessary
              </li>
            </ul>
            <p className="mt-4">
              We do <strong className="text-cream">not</strong> use your data for unrelated
              marketing purposes.
            </p>
          </PrivacySection>

          <PrivacySection
            number="03"
            icon={<Scale className="w-6 h-6" />}
            title="Legal Basis (Costa Rica)"
          >
            <p className="mb-4">
              In accordance with <strong className="text-cream">Law No. 8968</strong> (Protection of
              the Person against the Processing of Personal Data), we process your personal data
              based on:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Your <strong className="text-cream">consent</strong> (when you submit your
                information)
              </li>
              <li>
                Our <strong className="text-cream">legitimate interests</strong>, such as
                maintaining security, preventing abuse, and improving our services
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection
            number="04"
            icon={<BarChart3 className="w-6 h-6" />}
            title="Google Analytics"
          >
            <p className="mb-4">
              We use Google Analytics, a web analytics service provided by Google LLC, to understand
              how users interact with our website.
            </p>
            <p className="mb-4">Google Analytics may collect information such as:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>IP address</li>
              <li>Device and browser information</li>
              <li>Pages visited and time spent on the site</li>
            </ul>
            <p className="mt-4">
              This data is used in aggregated form to analyze website performance and improve user
              experience.
            </p>
            <p className="mt-4">
              For more information on how Google processes data, please visit:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber hover:underline break-all"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </PrivacySection>

          <PrivacySection number="05" icon={<Shield className="w-6 h-6" />} title="Data Sharing">
            <p className="mb-4">
              We do <strong className="text-cream">not</strong> sell or rent your personal
              information. We may share data only:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                With service providers (such as Google Analytics and email platforms) under
                confidentiality obligations
              </li>
              <li>When required by law or legal process</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            number="06"
            icon={<Lock className="w-6 h-6" />}
            title="Data Storage and Security"
          >
            <p>
              We take reasonable technical and organizational measures to protect your personal data
              against unauthorized access, loss, or misuse.
            </p>
          </PrivacySection>

          <PrivacySection number="07" icon={<Globe className="w-6 h-6" />} title="Your Rights">
            <p className="mb-4">Under Costa Rican law, you have the right to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Access your personal data</li>
              <li>Request correction or updates</li>
              <li>Request deletion of your data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-mono text-xs hover:bg-cyber/20 hover:border-cyber/50 transition-all duration-300"
              >
                {contactEmail}
              </a>
            </p>
          </PrivacySection>

          <PrivacySection number="08" icon={<Clock className="w-6 h-6" />} title="Data Retention">
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes
              described in this policy, or until you request its deletion, unless a longer retention
              period is required by law.
            </p>
          </PrivacySection>

          <PrivacySection
            number="09"
            icon={<AlertCircle className="w-6 h-6" />}
            title="Access Restrictions"
          >
            <p>
              We reserve the right to restrict or block access to our website when we detect misuse,
              suspicious activity, or behavior that violates our terms or compromises the integrity
              of the platform.
            </p>
          </PrivacySection>

          <PrivacySection
            number="10"
            icon={<FileText className="w-6 h-6" />}
            title="Updates to This Policy"
          >
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated date.
            </p>
          </PrivacySection>

          <PrivacySection number="11" icon={<Mail className="w-6 h-6" />} title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how your data is handled,
              please contact us at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-mono text-xs hover:bg-cyber/20 hover:border-cyber/50 transition-all duration-300"
              >
                {contactEmail}
              </a>
            </p>
          </PrivacySection>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <Mail className="w-12 h-12 text-cyber mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
            <p className="text-cream/60 mb-6 max-w-lg mx-auto">
              If you have any questions about this Privacy Policy or how your data is handled,
              please do not hesitate to reach out to our team.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber/10 border border-cyber/30 text-cyber font-mono text-sm tracking-wide hover:bg-cyber/20 hover:border-cyber/50 hover:scale-[1.02] transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-6 text-center">
          <p className="text-sm text-cream/30 font-mono">Last updated: {currentDate}</p>
        </div>
      </div>
    </section>
  );
}
