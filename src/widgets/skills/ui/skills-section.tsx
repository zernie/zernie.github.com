import Image from "next/image";

import { DownloadCvButton } from "@/features/download-cv";
import { skills } from "@/entities/skill";
import { Card, Section, SectionHeading } from "@/shared/ui";

export function SkillsSection() {
  return (
    <Section id="skills" className="bg-card/40">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Deep experience across the full stack" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.title} className="flex items-center gap-4 p-6">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-muted">
                <Image src={skill.icon} alt={skill.title} width={32} height={32} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{skill.title}</h3>
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
