import Image from "next/image";
import Link from "next/link";

import { projects } from "@/entities/project";
import { cn } from "@/shared/lib";
import { Section, SectionHeading } from "@/shared/ui";
import { Card } from "@/shared/ui/shadcn";

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="py-0">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected product partnerships"
          className="mb-8"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="cursor-pointer flex h-full flex-col items-center gap-4 py-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <p className="text-muted-foreground text-base">
                {project.description}
              </p>
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
                  className={cn("object-contain transition-transform duration-300 group-hover:scale-105", project.logoWidth ?? "w-40")}
                />
                <span className="text-accent mt-6 text-sm font-semibold group-hover:underline">
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
