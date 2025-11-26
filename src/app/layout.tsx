import type { Metadata } from "next";
import "./globals.css";

const siteName = "Aire Store Panamá";
const siteDescription =
  "HVAC Panamá: soluciones premium de climatización, instalación y mantenimiento profesional con atención inmediata.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.airestore.pa"),
  title: {
    default: `${siteName} | HVAC Panamá`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "HVAC Panamá",
    "aire acondicionado",
    "mantenimiento HVAC",
    "instalación HVAC",
    "aire store",
  ],
  openGraph: {
    title: `${siteName} | HVAC Panamá`,
    description: siteDescription,
    locale: "es_PA",
    type: "website",
    url: "https://www.airestore.pa",
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | HVAC Panamá`,
    description: siteDescription,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: "https://www.airestore.pa",
    telephone: "+507 6000-0000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de Panamá",
      addressCountry: "PA",
    },
    areaServed: "Panamá",
    sameAs: ["https://www.facebook.com", "https://www.instagram.com"],
  };

  return (
    <html lang="es">
      <body className="antialiased text-slate-900" style={{ background: "var(--surface)" }}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
