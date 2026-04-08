import { SiteFooter } from "./components/common/SiteFooter.tsx";
import { PrivacyContentSection } from "./components/privacy/PrivacyContentSection.tsx";
import { PrivacyHeroSection } from "./components/privacy/PrivacyHeroSection.tsx";
import { PrivacyNavigation } from "./components/privacy/PrivacyNavigation.tsx";
import { useScrollY } from "./hooks/useScrollY.ts";

export default function PrivacyPolicy() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen bg-void text-cream overflow-x-hidden">
      <div className="scanlines" />

      <PrivacyNavigation scrollY={scrollY} />
      <PrivacyHeroSection />
      <PrivacyContentSection />
      <SiteFooter />
    </div>
  );
}
