import type { Metadata } from "next";

import { SiteFooter } from "@/widgets/footer";
import { SiteHeader } from "@/widgets/navigation";
import { siteConfig } from "@/shared/config";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zernie.github.io"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://zernie.github.io",
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: "https://zernie.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
