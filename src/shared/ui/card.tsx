import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-3xl border border-border bg-card/95 p-8 shadow-soft backdrop-blur",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";
