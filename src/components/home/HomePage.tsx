import { useState } from "react";

import { SiteFooter } from "../common/SiteFooter.tsx";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll.ts";
import { useScrollY } from "../../hooks/useScrollY.ts";
import { AboutSection } from "./AboutSection.tsx";
import { DetailsSection } from "./DetailsSection.tsx";
import { FAQSection } from "./FAQSection.tsx";
import { HeroSection } from "./HeroSection.tsx";
import { HomeNavigation } from "./HomeNavigation.tsx";
import { JoinTeamSection } from "./JoinTeamSection.tsx";
import { NotifyModal } from "./NotifyModal.tsx";
import { RegisterSection } from "./RegisterSection.tsx";
import { SponsorsSection } from "./SponsorsSection.tsx";

export function HomePage() {
  const scrollY = useScrollY();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useRevealOnScroll();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#f8f9fa] overflow-x-hidden">
      <div className="scanlines" />

      <HomeNavigation scrollY={scrollY} onOpenNotify={handleOpenModal} />
      <HeroSection onOpenNotify={handleOpenModal} />
      <AboutSection />
      <JoinTeamSection />
      <DetailsSection />
      <SponsorsSection />
      <FAQSection />
      <RegisterSection onOpenNotify={handleOpenModal} />
      <SiteFooter />

      <NotifyModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
