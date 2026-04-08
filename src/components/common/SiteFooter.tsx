import { Coffee, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { GithubIcon, InstagramIcon, XIcon } from "./SocialIcons.tsx";

export function SiteFooter() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
          <div>
            <div className="font-display text-3xl font-bold tracking-tight mb-4 text-cyber">
              hackcr
            </div>
            <p className="text-cream/40 max-w-sm mb-6">
              Costa Rica&apos;s first high school hackathon. November 21-22, 2026 in San José, Costa
              Rica.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="http://instagram.com/hackcostarica"
                className="text-cream/40 hover:text-cyber transition-colors duration-300"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/HackCostaRica"
                className="text-cream/40 hover:text-cyber transition-colors duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/hackcostarica"
                className="text-cream/40 hover:text-cyber transition-colors duration-300"
              >
                <XIcon className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="text-cream/40 hover:text-cyber transition-colors duration-300"
              >
                <DiscordIcon className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <div className="flex gap-12 md:gap-16 md:text-right">
            <div>
              <h4 className="font-display font-bold mb-4 text-cream/50 text-sm uppercase tracking-wider">
                Get Involved
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/apply/mentor"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a
                    href="/apply/judge"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Become a Judge
                  </a>
                </li>
                <li>
                  <a
                    href="/apply"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Volunteer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4 text-cream/50 text-sm uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                {/* <li>
                  <a
                    href="#"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Student Agreement
                  </a>
                </li> */}
                <li>
                  <Link
                    to="/code-of-conduct"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-cream/30 hover:text-cyber transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/20 font-mono">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://rsrdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-cream transition-colors duration-300"
            >
              rsrdev
            </a>
            . All Rights Reserved.
          </p>
          <p className="text-sm text-cream/20 flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-rose fill-current" /> and{" "}
            <Coffee className="w-3.5 h-3.5 text-rose" />.
          </p>
          <p className="text-sm text-cream/20">Built by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}
