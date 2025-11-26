import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { categoriasHVAC, productosCatalogo, servicios, faq } from "@/lib/data";
import { buildLocalBusinessJsonLd, buildWebsiteJsonLd, getHomeMetadata } from "@/lib/seo";

export const metadata = getHomeMetadata();

export default function HomePage() {
  const destacados = productosCatalogo.slice(0, 3);
  const localBusinessJsonLd = buildLocalBusinessJsonLd();
  const websiteJsonLd = buildWebsiteJsonLd();

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, websiteJsonLd]),
        }}
      />
      <section className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase text-blue-700">
            HVAC Panamá · Respuesta en minutos
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Climatización premium con ingeniería y servicio inmediato
          </h1>
          <p className="text-lg text-slate-600">
            Diseñamos, instalamos y mantenemos sistemas HVAC residenciales, comerciales e industriales con equipos certificados,
            reportes digitales y atención 24/7.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://wa.me/50760000000?text=Quiero%20cotizar%20HVAC"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
            >
              Cotizar por WhatsApp
            </Link>
            <Link
              href="/productos"
              className="rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Ver catálogo
            </Link>
            <Link
              href="/contacto"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
            >
              Contactar ahora
            </Link>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-lg font-semibold text-slate-900">24/7</p>
              <p>Guardia de emergencias HVAC</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-lg font-semibold text-slate-900">+180</p>
              <p>Proyectos instalados en Panamá</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-lg font-semibold text-slate-900">IAQ</p>
              <p>Calidad de aire certificada</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-slate-900">Solicita una visita técnica</h3>
            <p className="mt-2 text-sm text-slate-600">Agenda en menos de 2 minutos. Respuesta inmediata.</p>
            <QuoteForm context="Hero" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Categorías HVAC</h2>
          <Link href="/productos" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
            Ver catálogo completo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categoriasHVAC.map((categoria) => (
            <div
              key={categoria.slug}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase text-blue-700">{categoria.nombre}</p>
              <p className="mt-2 text-sm text-slate-600">{categoria.descripcion}</p>
              <Link href={`/productos/${categoria.slug}`} className="mt-4 inline-flex text-sm font-semibold text-blue-700">
                Ver soluciones →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/90 p-10 shadow-xl md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Servicios HVAC Panamá</h2>
          <p className="text-slate-600">
            Ingeniería, instalación, mantenimiento y modernización con equipos certificados y reportes digitales.
          </p>
          <div className="grid gap-3">
            {servicios.map((servicio) => (
              <div key={servicio.titulo} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-lg font-semibold text-slate-900">
                  {servicio.icono} {servicio.titulo}
                </p>
                <p className="text-sm text-slate-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-slate-900">Catálogo destacado</h3>
          <div className="grid gap-4">
            {destacados.map((producto) => (
              <div key={producto.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-blue-700 uppercase">{producto.categoria.replace("-", " ")}</p>
                <p className="text-lg font-semibold text-slate-900">{producto.nombre}</p>
                <p className="text-sm text-slate-600">{producto.resumen}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                  {producto.caracteristicas.map((c) => (
                    <span key={c} className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                      {c}
                    </span>
                  ))}
                </div>
                <Link href={`/productos/${producto.categoria}`} className="mt-3 inline-flex text-sm font-semibold text-blue-700">
                  Ver categoría →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Preguntas frecuentes HVAC</h2>
          <Link href="/contacto" className="text-sm font-semibold text-blue-700">
            Habla con un especialista
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {faq.map((item) => (
            <div key={item.pregunta} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{item.pregunta}</p>
              <p className="text-sm text-slate-600">{item.respuesta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
