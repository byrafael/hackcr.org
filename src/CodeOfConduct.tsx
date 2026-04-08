import { SiteFooter } from "./components/common/SiteFooter.tsx";
import { CocContentSection } from "./components/code-of-conduct/CocContentSection.tsx";
import { CocHeroSection } from "./components/code-of-conduct/CocHeroSection.tsx";
import { CocNavigation } from "./components/code-of-conduct/CocNavigation.tsx";
import { useScrollY } from "./hooks/useScrollY.ts";

export default function CodeOfConduct() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen bg-void text-cream overflow-x-hidden">
      <div className="scanlines" />

      <CocNavigation scrollY={scrollY} />
      <CocHeroSection />
      <CocContentSection />
      <SiteFooter />
    </div>
  );
}
