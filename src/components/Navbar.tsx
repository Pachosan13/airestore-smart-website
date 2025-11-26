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
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-lg">
            AS
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-blue-600">Aire Store</p>
            <p className="text-xs text-slate-500">HVAC Panamá</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 transition ${pathname === link.href ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/productos"
            className="hidden rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50 md:inline-flex"
          >
            Ver catálogo
          </Link>
          <Link
            href="/contacto"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </header>
  );
}
