import Image from "next/image";
import Link from "next/link";

import { projects } from "@/entities/project";
import { cn } from "@/shared/lib";
import { Card, Section, SectionHeading } from "@/shared/ui";

export function PortfolioSection() {
  return (
    <Section id="portfolio">
      <div className="container">
        <SectionHeading eyebrow="Portfolio" title="Selected product partnerships" />
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex h-full flex-col items-center gap-6 p-10 text-center">
              <p className="text-base text-muted-foreground">{project.description}</p>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 flex-col items-center justify-center"
              >
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={220}
                  height={110}
                  className={cn("object-contain", project.logoWidth ?? "w-40")}
                />
                <span className="mt-6 text-sm font-semibold text-accent group-hover:underline">
                  Visit project
                </span>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
