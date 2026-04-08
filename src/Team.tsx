import { useState } from "react";

import { SiteFooter } from "./components/common/SiteFooter.tsx";
import { TeamGridSection } from "./components/team/TeamGridSection.tsx";
import { TeamHeroSection } from "./components/team/TeamHeroSection.tsx";
import { TeamJoinSection } from "./components/team/TeamJoinSection.tsx";
import { TeamModal } from "./components/team/TeamModal.tsx";
import { TeamNavigation } from "./components/team/TeamNavigation.tsx";
import type { TeamMember } from "./components/team/types.ts";
import { useScrollY } from "./hooks/useScrollY.ts";

export default function Team() {
  const scrollY = useScrollY();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#f8f9fa] overflow-x-hidden">
      <div className="scanlines" />

      <TeamNavigation scrollY={scrollY} />
      <TeamHeroSection />
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <TeamGridSection onSelect={handleSelectMember} />
      <TeamJoinSection />
      <SiteFooter />
    </div>
  );
}
