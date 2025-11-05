import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { profile } from "@/entities/profile";
import { socialLinks } from "@/entities/social";
import { Section, SocialLink } from "@/shared/ui";
import { Button } from "@/shared/ui/shadcn";

const bioLinks = {
  "Claude Code": "https://claude.ai/claude-code",
  "OpenAI Codex": "https://openai.com/index/openai-codex/",
  "GitHub Spec Kit": "https://github.com/github/spec-kit",
  "OpenAI APIs": "https://platform.openai.com/docs/api-reference",
} as const;

function BioText({ children }: { children: string }) {
  const parts: (string | ReactNode)[] = [];
  let remainingText = children;
  let key = 0;

  while (remainingText.length > 0) {
    let earliestMatch: { text: string; index: number; url: string } | null =
      null;

    // Find the earliest occurrence of any linkable term
    for (const [text, url] of Object.entries(bioLinks)) {
      const index = remainingText.indexOf(text);
      if (index !== -1 && (!earliestMatch || index < earliestMatch.index)) {
        earliestMatch = { text, index, url };
      }
    }

    if (earliestMatch) {
      // Add text before the match
      if (earliestMatch.index > 0) {
        parts.push(remainingText.slice(0, earliestMatch.index));
      }

      // Add the link
      parts.push(
        <a
          key={key++}
          href={earliestMatch.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-muted-foreground/40 decoration-1 underline-offset-2 transition-colors hover:decoration-foreground/60"
        >
          {earliestMatch.text}
        </a>
      );

      // Continue with remaining text
      remainingText = remainingText.slice(
        earliestMatch.index + earliestMatch.text.length
      );
    } else {
      // No more matches, add remaining text
      parts.push(remainingText);
      break;
    }
  }

  return <>{parts}</>;
}

export function HeroSection() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-12 pb-0 sm:pt-36"
    >
      <div className="relative z-10 container flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <span className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold tracking-[0.3em] uppercase">
            {profile.headline}
          </span>
          <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            Hey, I&apos;m {profile.name}
          </h1>
          <div className="text-muted-foreground space-y-6 text-lg">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>
                <BioText>{paragraph}</BioText>
              </p>
            ))}
            <p className="text-foreground font-semibold">
              {profile.availability}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/*<Button asChild size="lg">*/}
            {/*  <Link href="#portfolio">View portfolio</Link>*/}
            {/*</Button>*/}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto">
          <div className="border-border/60 bg-card/80 shadow-soft relative isolate overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur">
            <div className="from-accent/10 to-accent/20 absolute inset-0 -z-10 bg-gradient-to-br via-transparent" />
            <Image
              src="/images/avatar.jpg"
              alt="Portrait of Ernie"
              width={560}
              height={640}
              className="border-border/50 shadow-soft mx-auto rounded-[1.75rem] border object-cover"
            />
            <dl className="text-muted-foreground mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-foreground font-semibold">Experience</dt>
                <dd>{profile.experience}+ years</dd>
              </div>
              <div>
                <dt className="text-foreground font-semibold">Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="from-accent/20 absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b via-transparent" />
    </Section>
  );
}
