import { siteConfig } from "@/shared/config";
import { Section } from "@/shared/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <Section as="footer" className="pb-12 pt-12">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {year} {siteConfig.name}. Built with Next.js 16, Tailwind CSS, and Feature-Sliced Design.</p>
      </div>
    </Section>
  );
}
