import React from "react";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig } from "@/shared/config";
import { SiteFooter } from "@/widgets/footer";
import { SiteHeader } from "@/widgets/navigation";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#746ce6",
};

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WGDTD7X');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGDTD7X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
