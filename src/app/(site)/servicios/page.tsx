import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { servicios } from "@/lib/data";
import { buildServiceJsonLd, getServiciosMetadata } from "@/lib/seo";

export const metadata = getServiciosMetadata();

const pasos = [
  "Diagnóstico y cálculo de cargas",
  "Selección de equipos y logística",
  "Instalación certificada",
  "Puesta en marcha y documentación",
  "Monitoreo y mantenimiento predictivo",
];

export default function ServiciosPage() {
  const serviciosJsonLd = buildServiceJsonLd(servicios);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviciosJsonLd) }}
      />
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Servicios</p>
        <h1 className="text-3xl font-semibold text-slate-900">Servicios HVAC diseñados para el clima de Panamá</h1>
        <p className="max-w-3xl text-slate-600">
          Proyectos residenciales, comerciales e industriales con protocolos de calidad, supervisión de ingeniería y cuadrillas
          certificadas.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {servicios.map((servicio) => (
          <Link
            key={servicio.titulo}
            href={`/servicios/${servicio.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <p className="text-lg font-semibold text-slate-900">
              {servicio.icono} {servicio.titulo}
            </p>
            <p className="mt-2 flex-1 text-sm text-slate-600">{servicio.descripcion}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
              Ver detalle
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Metodología Aire Store</h2>
          <p className="text-slate-600">Procesos documentados y seguimiento por especialistas HVAC.</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600">
            {pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
        </div>
        <QuoteForm context="Servicios" />
      </div>
    </div>
  );
}
