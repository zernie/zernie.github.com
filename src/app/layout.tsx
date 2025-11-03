import React from "react";

import type { Metadata } from "next";

import { siteConfig } from "@/shared/config";
import { SiteFooter } from "@/widgets/footer";
import { SiteHeader } from "@/widgets/navigation";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zernie.com"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://zernie.com",
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: "https://zernie.com",
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
