import { SiteFooter } from "./components/common/SiteFooter.tsx";
import { CocContentSection } from "./components/code-of-conduct/CocContentSection.tsx";
import { CocHeroSection } from "./components/code-of-conduct/CocHeroSection.tsx";
import { CocNavigation } from "./components/code-of-conduct/CocNavigation.tsx";
import { useScrollY } from "./hooks/useScrollY.ts";

export default function CodeOfConduct() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#f8f9fa] overflow-x-hidden">
      <div className="scanlines" />

      <CocNavigation scrollY={scrollY} />
      <CocHeroSection />
      <CocContentSection />
      <SiteFooter />
    </div>
  );
}
