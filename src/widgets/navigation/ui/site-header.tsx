import Link from "next/link";

import { siteConfig } from "@/shared/config";
import { Button } from "@/shared/ui/shadcn";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" }
];

export function SiteHeader() {
  return (
    <header className="border-border/60 bg-background/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="#home" className="text-lg font-semibold tracking-tight transition-all duration-200 hover:opacity-60">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-200 hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-4 text-sm font-medium md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-all duration-200 hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s talk
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
