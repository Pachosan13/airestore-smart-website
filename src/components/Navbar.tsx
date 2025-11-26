"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/tecnicos", label: "Técnicos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-900/30 bg-slate-950/95 text-white shadow-lg backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400 text-slate-950 font-bold shadow-lg shadow-emerald-900/30">
            AS
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-emerald-200">Aire Store</p>
            <p className="text-xs text-slate-200">HVAC Panamá</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-100 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 transition ${
                pathname === link.href
                  ? "bg-white/10 text-emerald-200 shadow"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/productos"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-200/10 md:inline-flex"
          >
            Ver catálogo
          </Link>
          <Link
            href="/contacto"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </header>
  );
}
