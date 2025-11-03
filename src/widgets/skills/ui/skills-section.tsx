import Image from "next/image";

import { skills } from "@/entities/skill";
import { DownloadCvButton } from "@/features/download-cv";
import { Section, SectionHeading } from "@/shared/ui";
import { Card } from "@/shared/ui/shadcn";

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-card/40 py-0">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Deep experience across the full stack"
          className="mb-8"
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.title} className="flex items-center gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <div className="bg-muted relative flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-foreground text-lg font-semibold">
                {skill.title}
              </h3>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <DownloadCvButton />
        </div>
      </div>
    </Section>
  );
}
