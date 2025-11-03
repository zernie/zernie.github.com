import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border-border bg-card/95 shadow-soft rounded-3xl border p-8 backdrop-blur",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";
