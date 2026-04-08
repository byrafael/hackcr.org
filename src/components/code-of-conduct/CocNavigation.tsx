import { Link } from "react-router-dom";

interface CocNavigationProps {
  scrollY: number;
}

export function CocNavigation({ scrollY }: CocNavigationProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrollY > 50 ? "rgba(12, 12, 16, 0.9)" : "transparent",
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-[#00f5d4]">
          hackcr
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#00f5d4] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="text-sm font-display uppercase tracking-wider text-[#f8f9fa]/50 hover:text-[#00f5d4] transition-colors duration-300"
          >
            Team
          </Link>
          <span className="text-sm font-display uppercase tracking-wider text-[#00f5d4]">
            Code of Conduct
          </span>
        </div>
      </div>
    </nav>
  );
}
