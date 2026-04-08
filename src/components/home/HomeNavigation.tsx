import { Link } from "react-router-dom";

interface HomeNavigationProps {
  scrollY: number;
  onOpenNotify: () => void;
}

export function HomeNavigation({ scrollY, onOpenNotify }: HomeNavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const navOffset = 96;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrollY > 50 ? "rgba(12, 12, 16, 0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-[#ff9f1c]">
          hackcr
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#ff9f1c] transition-colors duration-300"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("sponsors")}
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#ff9f1c] transition-colors duration-300"
          >
            Sponsors
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("faq")}
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#ff9f1c] transition-colors duration-300"
          >
            FAQ
          </button>
          <Link
            to="/team"
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#ff9f1c] transition-colors duration-300"
          >
            Team
          </Link>
          <button onClick={onOpenNotify} className="btn-primary px-6 py-2 text-sm">
            Get Notified
          </button>
        </div>
      </div>
    </nav>
  );
}
