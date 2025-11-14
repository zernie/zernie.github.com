"use client";

import { useState } from "react";
import { ExternalLink, PlayCircle } from "lucide-react";

import { principles, type PrincipleCategory } from "@/entities/principle";
import { VideoModal } from "@/features/video-modal";
import { Section, SectionHeading } from "@/shared/ui";
import { Card } from "@/shared/ui/shadcn";

export function PrinciplesSection() {
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoUrl: string; title: string }>({
    isOpen: false,
    videoUrl: "",
    title: "",
  });

  const openVideoModal = (videoUrl: string, title: string) => {
    setVideoModal({ isOpen: true, videoUrl, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: "", title: "" });
  };
  // Group principles by category
  const principlesByCategory = principles.reduce((acc, principle) => {
    if (!acc[principle.category]) {
      acc[principle.category] = [];
    }
    acc[principle.category].push(principle);
    return acc;
  }, {} as Record<PrincipleCategory, typeof principles>);

  const categories: PrincipleCategory[] = ["Development", "Architecture", "Favorite Articles"];

  return (
    <Section id="principles" className="bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Philosophy"
          title="Principles & Practices"
          className="mb-8"
        />
        <div className="space-y-10">
          {categories.map((category) => {
            const categoryPrinciples = principlesByCategory[category];
            if (!categoryPrinciples?.length) return null;

            return (
              <div key={category}>
                <h3 className="text-foreground mb-2 text-xl font-bold">
                  {category}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {categoryPrinciples.map((principle) => {
                    const IconComponent = principle.icon;
                    const CardContent = (
                      <>
                        {principle.videoUrl && (
                          <div className="absolute right-3 top-3" title="Watch video">
                            <PlayCircle className="text-accent h-5 w-5" />
                          </div>
                        )}
                        <div className="bg-accent/10 relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300">
                          <IconComponent className="text-accent h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-foreground mb-2 flex items-center gap-2 text-lg font-semibold">
                            {principle.title}
                            {principle.href && (
                              <ExternalLink className="text-accent h-4 w-4 shrink-0" />
                            )}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </>
                    );

                    if (principle.videoUrl) {
                      return (
                        <Card
                          key={principle.title}
                          className="relative flex items-start gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full fade-in-on-scroll"
                          onClick={() => openVideoModal(principle.videoUrl!, principle.title)}
                        >
                          {CardContent}
                        </Card>
                      );
                    }

                    if (principle.href) {
                      return (
                        <a
                          key={principle.title}
                          href={principle.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Card className="relative flex items-start gap-4 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full fade-in-on-scroll">
                            {CardContent}
                          </Card>
                        </a>
                      );
                    }

                    return (
                      <Card key={principle.title} className="relative flex items-start gap-4 p-6 transition-all duration-300 h-full fade-in-on-scroll">
                        {CardContent}
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
      />
    </Section>
  );
}
