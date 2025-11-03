import { type ElementType, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export function Section({
  className,
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("scroll-mt-24 py-24 sm:py-32", className)}
      {...props}
    />
  );
}
