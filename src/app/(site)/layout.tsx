import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main className="container py-12">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
