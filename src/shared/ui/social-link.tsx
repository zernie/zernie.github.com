import { type LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/shared/lib";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  className?: string;
}

export function SocialLink({ href, label, icon: IconComponent, className }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted",
        className,
      )}
    >
      <IconComponent className="h-5 w-5" aria-hidden />
    </Link>
  );
}
