export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Ernie",
  headline: "AI-Native Frontend Engineer & Technical Leader",
  location: "Remote",
  experience: 9,
  bio: [
    "AI-native frontend engineer with 9 years scaling startups to tens of millions in revenue. Power user of Claude Code, OpenAI Codex, GitHub Spec Kit, and OpenAI APIs-helping teams adopt AI development workflows.",
    "I lead engineering teams and ship polished user experiences through hands-on technical leadership.",
  ],
  availability: "Open for long-term remote engagements and visa sponsorships.",
};

export type Profile = typeof profile;
