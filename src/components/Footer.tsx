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
          <h5 className="text-sm font-semibold uppercase text-slate-900">Soporte</h5>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/politicas" className="hover:text-blue-700">Políticas</Link>
            <Link href="/terminos" className="hover:text-blue-700">Términos</Link>
            <Link href="/tecnicos" className="hover:text-blue-700">Programa de técnicos</Link>
            <a href="mailto:hola@airestore.pa" className="hover:text-blue-700">
              hola@airestore.pa
            </a>
            <a href="tel:+50760000000" className="hover:text-blue-700">
              +507 6000-0000
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-sm font-semibold uppercase text-slate-900">Cobertura</h5>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Atención en Ciudad de Panamá, Panamá Oeste, Chiriquí y proyectos especiales en todo el país. Respuesta rápida y
            cuadrillas certificadas.
          </p>
          <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} Aire Store Panamá</p>
        </div>
      </div>
    </footer>
  );
}
