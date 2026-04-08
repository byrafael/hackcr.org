import { SiteFooter } from "./components/common/SiteFooter.tsx";
import { TermsContentSection } from "./components/terms/TermsContentSection.tsx";
import { TermsHeroSection } from "./components/terms/TermsHeroSection.tsx";
import { TermsNavigation } from "./components/terms/TermsNavigation.tsx";
import { useScrollY } from "./hooks/useScrollY.ts";

export default function TermsOfService() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen bg-void text-cream overflow-x-hidden">
      <div className="scanlines" />

      <TermsNavigation scrollY={scrollY} />
      <TermsHeroSection />
      <TermsContentSection />
      <SiteFooter />
    </div>
  );
}
