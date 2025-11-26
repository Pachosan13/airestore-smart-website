import Link from "next/link";

const quickLinks = [
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sucursales", href: "/sucursales" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Garantías", href: "/politicas/garantia" },
  { label: "Privacidad", href: "/politicas/privacidad" },
  { label: "Términos", href: "/politicas/terminos-y-condiciones" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between">
        <div className="space-y-4 md:w-1/3">
          <h3 className="text-lg font-semibold">Aire Store Panamá</h3>
          <p className="text-sm text-slate-300">
            Ferretería HVAC en Panamá con inventario listo para técnicos, empresas y proyectos.
            Especialistas en repuestos de aire acondicionado, materiales de refrigeración y soluciones de energía.
          </p>
          <p className="text-sm text-slate-300">
            Tel: <a className="underline" href="tel:+5073026209">+507 302-6209</a>
            <br />
            WhatsApp: <a className="underline" href="https://wa.me/50761231234">+507 6123-1234</a>
            <br />
            Correo: <a className="underline" href="mailto:ventas@airestore.com.pa">ventas@airestore.com.pa</a>
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 md:w-2/3">
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase text-slate-200">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase text-slate-200">Políticas</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 rounded-2xl bg-slate-800 p-6 shadow-lg">
            <h4 className="text-lg font-semibold text-white">Horarios y atención</h4>
            <p className="mt-2 text-sm text-slate-300">
              Lunes a viernes: 8:00 a.m. - 5:30 p.m. <br /> Sábados: 8:00 a.m. - 1:00 p.m.
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Ubicaciones: Ciudad de Panamá, Tocumen, David (Chiriquí). Envíos a todo el país.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Aire Store Panamá. El Ambiente Ideal.
      </div>
    </footer>
  );
}
