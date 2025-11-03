import { Github, Linkedin, Mail, Send } from "lucide-react";

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
  {
    label: "Telegram",
    href: siteConfig.links.telegram,
    icon: Send,
  },
  {
    label: "Email",
    href: siteConfig.links.email,
    icon: Mail,
  },
] as const;
