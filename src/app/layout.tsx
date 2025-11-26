import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Aire Store Panamá | Materiales y repuestos HVAC",
  description:
    "Tienda de refrigeración en Panamá con repuestos de aire acondicionado, tubería de cobre, compresores y materiales HVAC listos para técnicos y empresas.",
};

function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">Materiales HVAC en Panamá, listos cuando los necesitas.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-200">
          <a className="hover:text-white" href="tel:+5073026209">
            Tel: +507 302-6209
          </a>
          <a className="hover:text-white" href="https://wa.me/50761231234">
            WhatsApp: +507 6123-1234
          </a>
          <a className="hover:text-white" href="mailto:ventas@airestore.com.pa">
            ventas@airestore.com.pa
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <TopBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
