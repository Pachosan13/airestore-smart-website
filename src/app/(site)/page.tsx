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
    <div className="space-y-16 text-slate-900">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, websiteJsonLd]),
        }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=2000&q=80&fm=webp')] bg-cover bg-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/55" aria-hidden />
        <div className="relative grid items-center gap-10 p-10 md:grid-cols-[1.1fr_0.9fr] md:p-14">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200 ring-1 ring-emerald-300/30">
              <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
              Inventario real · Respuesta en minutos
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white drop-shadow md:text-5xl">
              Soluciones HVAC profesionales en Panamá: ingeniería, instalación y soporte 24/7
            </h1>
            <p className="max-w-2xl text-lg text-slate-100 md:text-xl">
              Equipos certificados, cuadrillas industriales y reportes digitales que respaldan cada entrega. Operamos proyectos
              comerciales, residenciales y de misión crítica con estándares de gran empresa.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/productos"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Ver catálogo
              </Link>
              <Link
                href="/contacto"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Cotizar ahora
              </Link>
              <Link
                href="https://wa.me/50760000000?text=Quiero%20cotizar%20HVAC"
                className="rounded-full border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                Hablar con ingeniería
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                <p className="text-lg font-semibold text-white">24/7</p>
                <p>Guardia de emergencias HVAC con cobertura nacional</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                <p className="text-lg font-semibold text-white">+180</p>
                <p>Proyectos entregados con KPIs y trazabilidad</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                <p className="text-lg font-semibold text-white">QA</p>
                <p>Reportes digitales, fotos de instalación y checklist</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-xl shadow-black/30 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">Agenda inmediata</p>
                  <h3 className="text-2xl font-semibold text-white">Solicita una visita técnica</h3>
                  <p className="mt-2 text-sm text-slate-100">
                    Atendemos plantas industriales, comercios y residencias. Respuesta confirmada en minutos.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-100 sm:flex">
                  📞
                </div>
              </div>
              <QuoteForm context="Hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Inventario en Panamá</p>
            <h2 className="text-3xl font-semibold text-slate-900">Categorías HVAC listas para despacho</h2>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Ver catálogo completo
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {categoriasHVAC.map((categoria) => (
            <div
              key={categoria.slug}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-slate-50 opacity-0 transition group-hover:opacity-100" aria-hidden />
              <div className="relative space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-emerald-700">{categoria.nombre}</p>
                <p className="text-sm text-slate-600">{categoria.descripcion}</p>
                <Link
                  href={`/productos/${categoria.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-emerald-700"
                >
                  Ver soluciones
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-xl md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Servicios críticos</p>
          <h2 className="text-3xl font-semibold text-slate-900">Servicios HVAC con ingeniería y cuadrillas certificadas</h2>
          <p className="text-slate-600">
            Ingeniería, instalación, mantenimiento y modernización con equipos certificados, protocolos industriales y reportes
            digitales para auditorías.
          </p>
          <div className="grid gap-3">
            {servicios.map((servicio) => (
              <div
                key={servicio.titulo}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">{servicio.icono}</div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-slate-900">{servicio.titulo}</p>
                  <p className="text-sm text-slate-600">{servicio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 text-white shadow-lg">
            <div
              className="h-40 w-full bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80&fm=webp')] bg-cover bg-center"
              role="img"
              aria-label="Técnicos HVAC trabajando en una azotea"
            />
            <div className="space-y-3 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">Stock y despacho rápido</p>
              <h3 className="text-xl font-semibold text-white">Catálogo destacado</h3>
              <p className="text-sm text-slate-100">
                Equipos inverter, VRF, controles y repuestos con validación de stock real. Despachamos a obra o bodega.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {destacados.map((producto) => (
              <div
                key={producto.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">
                  {producto.categoria.replace("-", " ")}
                </p>
                <p className="text-lg font-semibold text-slate-900">{producto.nombre}</p>
                <p className="text-sm text-slate-600">{producto.resumen}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                  {producto.caracteristicas.map((c) => (
                    <span key={c} className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                      {c}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/productos/${producto.categoria}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-emerald-700"
                >
                  Ver categoría
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Confianza técnica</p>
            <h2 className="text-3xl font-semibold text-slate-900">Preguntas frecuentes HVAC</h2>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
          >
            Habla con un especialista
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {faq.map((item) => (
            <div
              key={item.pregunta}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-slate-900">{item.pregunta}</p>
              <p className="text-sm text-slate-600">{item.respuesta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
