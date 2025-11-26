import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80 text-slate-700">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">Aire Store Panamá</h4>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Soluciones HVAC premium para proyectos residenciales, comerciales e industriales. Instalación, mantenimiento y
            automatización con equipos certificados.
          </p>
          <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-xs font-semibold uppercase text-slate-900">Horario de atención</p>
            <p className="mt-1 font-semibold text-slate-900">Lunes a Sábado: 7:00 a.m. – 6:00 p.m.</p>
            <p className="text-slate-600">Coordinamos envíos y visitas técnicas a todo Panamá.</p>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-slate-900">Navegación</h5>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/productos" className="hover:text-blue-700">Productos</Link>
            <Link href="/servicios" className="hover:text-blue-700">Servicios</Link>
            <Link href="/proyectos" className="hover:text-blue-700">Proyectos</Link>
            <Link href="/blog" className="hover:text-blue-700">Blog</Link>
            <Link href="/contacto" className="hover:text-blue-700">Contacto</Link>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-slate-900">Contacto</h5>
          <address className="mt-3 grid gap-2 text-sm not-italic">
            <p className="text-slate-900">Bethania, Avenida La Paz, local G-113</p>
            <p className="text-slate-600">Ciudad de Panamá, Panamá</p>
            <a href="tel:+5072618083" className="hover:text-blue-700">
              +507 261-8083
            </a>
            <a href="https://wa.me/50760309548" className="text-green-700 hover:text-green-800" target="_blank" rel="noreferrer">
              WhatsApp: +507 6030-9548
            </a>
            <a href="mailto:info@airestorepanama.com" className="hover:text-blue-700">
              info@airestorepanama.com
            </a>
          </address>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-slate-900">Sucursales</h5>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700">
            <li>
              <p className="font-semibold text-slate-900">Betania</p>
              <p>Bethania, Avenida La Paz, local G-113, Ciudad de Panamá, Panamá</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">Juan Díaz <span className="text-xs text-amber-700">Próxima sede</span></p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">Chorrera <span className="text-xs text-slate-500">Sede regional</span></p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">Santiago <span className="text-xs text-slate-500">Sede regional</span></p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
            <li>
              <p className="font-semibold text-slate-900">David <span className="text-xs text-slate-500">Sede regional</span></p>
              <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Aire Store Panamá</p>
        </div>
      </div>
    </footer>
  );
}
