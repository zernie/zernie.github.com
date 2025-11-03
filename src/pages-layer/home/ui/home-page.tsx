import { ClientsSection } from "@/widgets/clients";
import { HeroSection } from "@/widgets/hero";
import { PortfolioSection } from "@/widgets/portfolio";
import { SkillsSection } from "@/widgets/skills";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ClientsSection />
    </>
  );
}
