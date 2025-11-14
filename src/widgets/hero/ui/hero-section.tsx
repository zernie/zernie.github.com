import Image from "next/image";

import { profile } from "@/entities/profile";
import { socialLinks } from "@/entities/social";
import { Section, SocialLink } from "@/shared/ui";

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
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
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
              src="/images/avatar.webp"
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
