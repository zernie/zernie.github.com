import { HeroSection } from "@/widgets/hero";
import { PortfolioSection } from "@/widgets/portfolio";
import { PrinciplesSection } from "@/widgets/principles";
import { SkillsSection } from "@/widgets/skills";
import { VideosSection } from "@/widgets/videos";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <PrinciplesSection />
      <VideosSection />
      <PortfolioSection />
    </>
  );
}
