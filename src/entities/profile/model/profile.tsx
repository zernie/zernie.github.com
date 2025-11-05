import type { ReactNode } from "react";

export interface SocialLink {
  label: string;
  href: string;
}

const BioLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-foreground underline decoration-muted-foreground/40 decoration-1 underline-offset-2 transition-colors hover:decoration-foreground/60"
  >
    {children}
  </a>
);

export const profile = {
  name: "Ernie",
  headline: "AI-Native Full Stack Engineer & Technical Leader",
  location: "Remote",
  experience: 9,
  bio: [
    <>
      AI-native Full Stack engineer with 9 years scaling startups to tens of
      millions in revenue. Power user of{" "}
      <BioLink href="https://claude.ai/claude-code">Claude Code</BioLink>,{" "}
      <BioLink href="https://openai.com/index/openai-codex/">
        OpenAI Codex
      </BioLink>
      , <BioLink href="https://github.com/github/spec-kit">GitHub Spec Kit</BioLink>
      , and{" "}
      <BioLink href="https://platform.openai.com/docs/api-reference">
        OpenAI APIs
      </BioLink>
      —helping teams adopt AI development workflows.
    </>,
    <>
      I lead engineering teams and ship polished user experiences through
      hands-on technical leadership.
    </>,
  ],
  availability: "Open for long-term remote engagements and visa sponsorships.",
};

export type Profile = typeof profile;
