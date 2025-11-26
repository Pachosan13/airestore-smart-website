import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/para-tecnicos", label: "Soluciones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-aire-store.svg"
            alt="Aire Store Panamá"
            width={160}
            height={46}
            className="h-12 w-auto"
            priority
          />
          <span className="sr-only">Aire Store Panamá</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-800 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
        >
          Cotizar ahora
        </Link>
      </div>
    </header>
  );
}
