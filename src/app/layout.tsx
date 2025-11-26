import type { Metadata } from "next";
import "./globals.css";

import { buildLocalBusinessJsonLd, buildWebsiteJsonLd, getHomeMetadata, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  ...getHomeMetadata(),
  title: {
    default: `${siteName} | aire acondicionado panamá y repuestos hvac`,
    template: `%s | ${siteName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = buildLocalBusinessJsonLd();
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <html lang="es">
      <body className="antialiased text-slate-900" style={{ background: "var(--surface)" }}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
