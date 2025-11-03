import Image from "next/image";
import Link from "next/link";

import { profile } from "@/entities/profile";
import { socialLinks } from "@/entities/social";
import { Button, Section, SocialLink } from "@/shared/ui";

export function HeroSection() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pt-36"
    >
      <div className="container relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-8">
          <span className="inline-flex items-center rounded-full bg-muted px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {profile.headline}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hey, I&apos;m {profile.name}
          </h1>
          <div className="space-y-6 text-lg text-muted-foreground">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold text-foreground">{profile.availability}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="#portfolio">View portfolio</Link>
            </Button>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/80 p-8 shadow-soft backdrop-blur">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-accent/20" />
            <Image
              src="/images/face.png"
              alt="Portrait of Ernie Bold"
              width={560}
              height={640}
              className="mx-auto rounded-[1.75rem] border border-border/50 object-cover shadow-soft"
            />
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <dt className="font-semibold text-foreground">Experience</dt>
                <dd>{profile.experience}+ years</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-gradient-to-b from-accent/20 via-transparent" />
    </Section>
  );
}
