import Link from "next/link";

import { type LucideIcon } from "lucide-react";

import { cn } from "@/shared/lib";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

export function SocialLink({
  href,
  label,
  icon: IconComponent,
  className,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-110 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200",
        className,
      )}
    >
      <IconComponent className="h-5 w-5" aria-hidden />
    </Link>
  );
}
