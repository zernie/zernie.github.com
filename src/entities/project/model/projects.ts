export interface Project {
  title: string;
  description: string;
  href: string;
  logo: string;
  logoWidth?: string;
}

export const projects: Project[] = [
  {
    title: "Archive",
    description:
      "Marketing automation for social and community teams. Scaled to an $80M valuation in year one.",
    href: "https://archive.com/",
    logo: "/images/sites/archive.svg",
    logoWidth: "w-40",
  },
  {
    title: "Bonfire",
    description:
      "Websites for creators powered by their social tokens and NFTs.",
    href: "https://bonfire.mirror.xyz/",
    logo: "/images/sites/bonfire.webp",
    logoWidth: "w-32",
  },
  {
    title: "Busbud",
    description: "Global marketplace for intercity bus travel.",
    href: "https://www.busbud.com/",
    logo: "/images/sites/busbud.webp",
    logoWidth: "w-40",
  },
  {
    title: "Buzz.im",
    description: "Telegram advertising marketplace for creators and brands.",
    href: "https://atwinta.com/material/projects/buzz",
    logo: "/images/sites/buzzim.webp",
    logoWidth: "w-36",
  },
  {
    title: "Jury.Online",
    description:
      "Escrow platform enabling safe investments into crypto startups.",
    href: "https://www.linkedin.com/company/juryonline",
    logo: "/images/sites/jury.webp",
    logoWidth: "w-36",
  },
  {
    title: "Vayable",
    description: "Marketplace for curated travel and local experiences.",
    href: "https://arival.travel/article/vayable-shutters-operations/",
    logo: "/images/sites/vayable.webp",
    logoWidth: "w-36",
  },
  {
    title: "Leadmob",
    description: "Performance marketing exchange for mobile growth teams.",
    href: "https://leadmob.io/",
    logo: "/images/sites/leadmob.webp",
    logoWidth: "w-40",
  },
];
