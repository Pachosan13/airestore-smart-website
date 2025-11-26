import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-900/40 bg-slate-950 text-slate-100">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold text-white">Aire Store Panamá</h4>
          <p className="mt-3 text-sm leading-6 text-slate-200">
            Soluciones HVAC premium para proyectos residenciales, comerciales e industriales. Instalación, mantenimiento y
            automatización con equipos certificados.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 shadow-lg shadow-black/20">
            <p className="text-xs font-semibold uppercase text-emerald-200">Horario de atención</p>
            <p className="mt-1 font-semibold text-white">Lunes a Sábado: 7:00 a.m. – 6:00 p.m.</p>
            <p className="text-slate-200">Coordinamos envíos y visitas técnicas a todo Panamá.</p>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-emerald-200">Navegación</h5>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/productos" className="text-white transition hover:text-emerald-200">Productos</Link>
            <Link href="/servicios" className="text-white transition hover:text-emerald-200">Servicios</Link>
            <Link href="/proyectos" className="text-white transition hover:text-emerald-200">Proyectos</Link>
            <Link href="/blog" className="text-white transition hover:text-emerald-200">Blog</Link>
            <Link href="/contacto" className="text-white transition hover:text-emerald-200">Contacto</Link>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-emerald-200">Contacto</h5>
          <address className="mt-3 grid gap-2 text-sm not-italic text-slate-100">
            <p className="text-white">Bethania, Avenida La Paz, local G-113</p>
            <p className="text-slate-200">Ciudad de Panamá, Panamá</p>
            <a href="tel:+5072618083" className="transition hover:text-emerald-200">
              +507 261-8083
            </a>
            <a href="https://wa.me/50760309548" className="text-emerald-200 transition hover:text-emerald-100" target="_blank" rel="noreferrer">
              WhatsApp: +507 6030-9548
            </a>
            <a href="mailto:info@airestorepanama.com" className="transition hover:text-emerald-200">
              info@airestorepanama.com
            </a>
          </address>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-emerald-200">Sucursales</h5>
          <ul className="mt-3 grid gap-2 text-sm text-slate-100">
            <li>
              <p className="font-semibold text-white">Betania</p>
              <p>Bethania, Avenida La Paz, local G-113, Ciudad de Panamá, Panamá</p>
            </li>
            <li>
              <p className="font-semibold text-white">
                Juan Díaz <span className="text-xs text-amber-300">Próxima sede</span>
              </p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-white">
                Chorrera <span className="text-xs text-slate-300">Sede regional</span>
              </p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-white">
                Santiago <span className="text-xs text-slate-300">Sede regional</span>
              </p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-white">
                David <span className="text-xs text-slate-300">Sede regional</span>
              </p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} Aire Store Panamá</p>
        </div>
      </div>
    </footer>
  );
}
