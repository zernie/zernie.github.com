import { cn } from "@/shared/lib";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  className?: string;
}

export function SectionHeading({ title, eyebrow, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto mb-16 max-w-3xl text-center", className)}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full bg-muted px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
