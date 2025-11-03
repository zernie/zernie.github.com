export interface SocialLink {
  label: string;
  href: string;
}

export const profile = {
  name: "Ernie Bold",
  headline: "Senior Full-Stack Engineer",
  location: "Remote",
  experience: 9,
  bio: [
    "I'm a senior full-stack engineer with nine years of experience helping venture-backed startups scale from zero to tens of millions in annual revenue.",
    "I focus on building resilient product foundations, leading high-leverage product squads, and shipping polished user experiences end-to-end.",
  ],
  availability: "Open for long-term remote engagements and visa sponsorships.",
};

export type Profile = typeof profile;
