import Image from "next/image";

import { skills, type SkillCategory } from "@/entities/skill";
import { DownloadCvButton } from "@/features/download-cv";
import { Section, SectionHeading } from "@/shared/ui";
import { Card } from "@/shared/ui/shadcn";

export function SkillsSection() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  const categories: SkillCategory[] = ["Frontend", "Backend", "AI/ML", "DevOps/Tools"];

  return (
    <Section id="skills" className="bg-card/40 py-0">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Deep experience across the full stack"
          className="mb-8"
        />
        <div className="space-y-10">
          {categories.map((category) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills?.length) return null;

            return (
              <div key={category}>
                <h3 className="text-foreground mb-4 text-xl font-bold">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <Card key={skill.title} className="relative flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                      {skill.isExpert && (
                        <div className="absolute right-3 top-3" title="Expert">
                          <svg
                            className="h-4 w-4 fill-amber-500"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                      )}
                      <div className="bg-muted relative flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300">
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={32}
                          height={32}
                        />
                      </div>
                      <h4 className="text-foreground text-lg font-semibold">
                        {skill.title}
                      </h4>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <DownloadCvButton />
        </div>
      </div>
    </Section>
  );
}
