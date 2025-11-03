export interface Client {
  name: string;
  href: string;
  logo: string;
  width: string;
}

export const clients: Client[] = [
  {
    name: "A.Team",
    href: "https://a.team/",
    logo: "/images/clients/ateam.svg",
    width: "w-40",
  },
  {
    name: "Krypton Capital",
    href: "https://krypton.capital/",
    logo: "/images/clients/krypton.webp",
    width: "w-40",
  },
  {
    name: "Vayable",
    href: "https://www.vayable.com/",
    logo: "/images/clients/vayable.webp",
    width: "w-36",
  },
  {
    name: "Busbud",
    href: "https://www.busbud.com/",
    logo: "/images/clients/busbud.webp",
    width: "w-36",
  },
];
