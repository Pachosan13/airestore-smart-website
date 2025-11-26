import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main className="container py-12">{children}</main>
      <Footer />
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
        <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-xl">
          Chat AI Aire Store
          <p className="text-xs text-slate-200">Próximamente con respuestas en tiempo real.</p>
        </div>
        <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
          Abrir chat
        </button>
      </div>
    </div>
  );
}
