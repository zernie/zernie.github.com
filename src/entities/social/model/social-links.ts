import { Github, Linkedin } from "lucide-react";

import { siteConfig } from "@/shared/config";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.links.github,
    icon: Github,
  },
] as const;
