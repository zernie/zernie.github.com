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
    description: "Marketing automation for social and community teams. Scaled to an $80M valuation in year one.",
    href: "https://archive.com/",
    logo: "/images/sites/archive.svg",
    logoWidth: "w-40",
  },
  {
    title: "Bonfire",
    description: "Websites for creators powered by their social tokens and NFTs.",
    href: "https://getbonfire.xyz/",
    logo: "/images/sites/bonfire.webp",
    logoWidth: "w-32",
  },
  {
    title: "Rabota08",
    description: "Recruitment platform connecting employers with verified talent.",
    href: "https://rabota08.ru",
    logo: "/images/sites/rabota08.webp",
    logoWidth: "w-44",
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
    href: "https://buzz.im/",
    logo: "/images/sites/buzzim.webp",
    logoWidth: "w-36",
  },
  {
    title: "Jury.Online",
    description: "Escrow platform enabling safe investments into crypto startups.",
    href: "https://www.linkedin.com/company/juryonline",
    logo: "/images/sites/jury.webp",
    logoWidth: "w-36",
  },
  {
    title: "Vayable",
    description: "Marketplace for curated travel and local experiences.",
    href: "https://goodbye.vayable.com/",
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
  {
    title: "Spika",
    description: "Concert agency building cross-border live experiences.",
    href: "https://spika.org/",
    logo: "/images/sites/spika.webp",
    logoWidth: "w-36",
  },
];
