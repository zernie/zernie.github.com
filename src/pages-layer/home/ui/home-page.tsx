import { HeroSection } from "@/widgets/hero";
import { PortfolioSection } from "@/widgets/portfolio";
import { PrinciplesSection } from "@/widgets/principles";
import { SkillsSection } from "@/widgets/skills";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <PrinciplesSection />
      <PortfolioSection />
    </>
  );
}
