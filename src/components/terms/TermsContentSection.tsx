import { Link } from "react-router-dom";
import {
  Globe,
  Shield,
  Ban,
  Gavel,
  Copyright,
  Mail,
  Clock,
  AlertTriangle,
  Database,
} from "lucide-react";

interface TermsSectionProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function TermsSection({ number, icon, title, children }: TermsSectionProps) {
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

export function TermsContentSection() {
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
                By accessing or using our website, you agree to be bound by these Terms of Service.
                Please read them carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          <TermsSection number="01" icon={<Globe className="w-6 h-6" />} title="Scope">
            <p className="mb-4">
              These Terms of Service govern your access to and use of{" "}
              <code className="px-1.5 py-0.5 rounded bg-cream/10 text-cyber font-mono text-sm">
                hackcr.org
              </code>
              ,{" "}
              <code className="px-1.5 py-0.5 rounded bg-cream/10 text-cyber font-mono text-sm">
                hackcr.com
              </code>
              , and any subdomains, associated platforms, services, or content provided by Hack
              Costa Rica (HackCR).
            </p>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and
              agree to be bound by these terms. If you do not agree, please do not use our website.
            </p>
          </TermsSection>

          <TermsSection
            number="02"
            icon={<Database className="w-6 h-6" />}
            title="Data and Privacy"
          >
            <p>
              Any personal data or other information you provide to this website, whether
              voluntarily submitted (such as through forms) or automatically collected (such as
              through analytics or cookies), is governed by our{" "}
              <Link to="/privacy" className="text-cyber hover:underline">
                Privacy Policy
              </Link>
              . By using this website, you consent to the collection and use of your information as
              described therein.
            </p>
          </TermsSection>

          <TermsSection number="03" icon={<Shield className="w-6 h-6" />} title="Acceptable Use">
            <p className="mb-4">
              You agree to use our website only for lawful purposes and in a way that does not
              infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of
              the website.
            </p>
            <p className="mb-4">You must not:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Use our website in any way that causes, or may cause, damage to the website or
                impairment of its availability or accessibility
              </li>
              <li>Use our website in any way that is unlawful, illegal, fraudulent, or harmful</li>
              <li>
                Use our website to copy, store, host, transmit, send, use, publish, or distribute
                any material that consists of (or is linked to) any spyware, computer virus, Trojan
                horse, worm, keystroke logger, rootkit, or other malicious computer software
              </li>
              <li>
                Conduct any systematic or automated data collection activities on or in relation to
                our website without our express written consent
              </li>
              <li>
                Access or otherwise interact with our website using any robot, spider, or other
                automated means
              </li>
            </ul>
          </TermsSection>

          <TermsSection number="04" icon={<Ban className="w-6 h-6" />} title="Prohibited Conduct">
            <p className="mb-4">The following activities are strictly prohibited on our website:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Spam, unsolicited communications, or bulk messaging</li>
              <li>
                Attempting to gain unauthorized access to any portion of the website, servers, or
                networks
              </li>
              <li>
                Interfering with or disrupting the security, integrity, or performance of the
                website
              </li>
              <li>
                Impersonating any person or entity, or falsely stating or misrepresenting your
                affiliation
              </li>
              <li>
                Harvesting or collecting email addresses or other contact information of other users
              </li>
              <li>Submitting false or misleading information through any forms on the website</li>
              <li>Any activity that violates our Code of Conduct</li>
            </ul>
          </TermsSection>

          <TermsSection
            number="05"
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Access Restrictions"
          >
            <p className="mb-4">
              We reserve the right to restrict, suspend, or terminate your access to our website at
              any time, without notice or liability, for any reason whatsoever, including without
              limitation:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Violation of these Terms of Service</li>
              <li>Behavior that we believe causes harm to our organization or event</li>
              <li>Suspicious activity or access that we deem to be in bad faith</li>
              <li>Attempts to abuse, exploit, or circumvent the website</li>
            </ul>
            <p className="mt-4">
              We may block your IP address or take any other technical measures to prevent access
              when we determine such action is necessary to protect our interests or the integrity
              of the platform.
            </p>
          </TermsSection>

          <TermsSection number="06" icon={<Gavel className="w-6 h-6" />} title="Enforcement">
            <p className="mb-4">
              We reserve the right to take any action we deem appropriate against anyone who
              violates these terms or engages in conduct that we determine to be harmful, abusive,
              or contrary to the spirit of HackCR. This includes, but is not limited to:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Immediate termination of access to the website</li>
              <li>IP blocking and other technical restrictions</li>
              <li>Reporting to appropriate authorities when warranted</li>
              <li>Pursuit of any legal remedies available to us</li>
            </ul>
            <p className="mt-4">
              We may take action based on our sole discretion and judgment of the circumstances. Our
              decisions are final.
            </p>
          </TermsSection>

          <TermsSection
            number="07"
            icon={<Copyright className="w-6 h-6" />}
            title="Intellectual Property"
          >
            <p className="mb-4">
              All content on this website, including but not limited to text, graphics, logos,
              images, audio clips, digital downloads, data compilations, and software, is the
              property of HackCR or its content suppliers and is protected by international
              copyright laws.
            </p>
            <p className="mb-4">
              <strong className="text-cream">Copyright (c) 2026 hackcr</strong>
            </p>
            <p className="mb-4">
              HackCR is not a registered legal entity. We are a group of individuals who contribute
              our intellectual property, time, and resources to the organization. All intellectual
              property contributed to HackCR is provided for use as determined by the Executive
              Director / Lead Organizer, Rafael Soley, who holds authority over the use and
              disposition of such property on behalf of the group.
            </p>
            <p className="mb-4">
              By contributing to or submitting content to HackCR, you grant us a perpetual,
              irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce,
              modify, adapt, publish, translate, create derivative works from, distribute, and
              display such content in any form, media, or technology now known or later developed,
              as determined by the Executive Director.
            </p>
            <p>
              If local laws do not permit the recognition of HackCR as the copyright holder of the
              content on this website, such content shall be recognized as the intellectual property
              of Rafael Soley.
            </p>
          </TermsSection>

          <TermsSection number="08" icon={<Shield className="w-6 h-6" />} title="Disclaimer">
            <p className="mb-4">
              The information on this website is provided on an &quot;as is&quot; basis. To the
              fullest extent permitted by law, HackCR:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Excludes all representations and warranties relating to this website and its
                contents
              </li>
              <li>
                Excludes liability for any direct, indirect, special, or consequential loss or
                damage incurred by any user in connection with the website
              </li>
              <li>
                Excludes liability for any loss or damage caused by a virus, distributed
                denial-of-service attack, or other technologically harmful material
              </li>
            </ul>
            <p className="mt-4">
              Nothing in these terms shall exclude or limit our liability for fraud, death, or
              personal injury caused by our negligence.
            </p>
          </TermsSection>

          <TermsSection
            number="09"
            icon={<Globe className="w-6 h-6" />}
            title="Modifications to Terms"
          >
            <p>
              We may modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to our website. Continued use of the website after any
              changes constitutes acceptance of the revised terms. We encourage you to review these
              terms periodically.
            </p>
          </TermsSection>

          <TermsSection number="10" icon={<Mail className="w-6 h-6" />} title="Contact Information">
            <p>
              If you have any questions about these Terms of Service, please contact us at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyber/10 border border-cyber/30 text-cyber font-mono text-xs hover:bg-cyber/20 hover:border-cyber/50 transition-all duration-300"
              >
                {contactEmail}
              </a>
            </p>
          </TermsSection>
        </div>

        {/* Contact Section */}
        <div className="mt-6 text-center">
          <div className="glass-card rounded-xl p-8 md:p-12">
            <Mail className="w-12 h-12 text-cyber mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-cream/60 mb-6 max-w-lg mx-auto">
              If you have any questions about these Terms of Service or need clarification on any
              section, please reach out to our team.
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
