import { siteConfig } from "@/shared/config";
import { Section } from "@/shared/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <Section as="footer" className="pt-12 pb-12">
      <div className="text-muted-foreground container text-center text-sm">
        <p>
          © {year} {siteConfig.name}. Built with Next.js, Tailwind CSS, and
          Feature-Sliced Design.
        </p>
      </div>
    </Section>
  );
}
