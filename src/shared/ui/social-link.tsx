import { type LucideIcon } from "lucide-react";
import Link from "next/link";

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
        "border-border text-foreground hover:bg-muted inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
        className,
      )}
    >
      <IconComponent className="h-5 w-5" aria-hidden />
    </Link>
  );
}
