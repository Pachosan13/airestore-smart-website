import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { QuoteForm } from "@/components/QuoteForm";
import { servicios } from "@/lib/data";
import { buildBreadcrumbJsonLd, buildServiceJsonLd, getServicioMetadata, siteUrl } from "@/lib/seo";

function getServicio(slug: string) {
  return servicios.find((servicio) => servicio.slug === slug);
}

export async function generateStaticParams() {
  return servicios.map((servicio) => ({ slug: servicio.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getServicioMetadata(params.slug);
}

export default function ServicioDetallePage({ params }: { params: { slug: string } }) {
  const servicio = getServicio(params.slug);

  if (!servicio) {
    return notFound();
  }

  const whatsappHref = `https://wa.me/50760000000?text=Hola%20quiero%20cotizar%20${encodeURIComponent(servicio.titulo)}`;
  const servicioJsonLd = buildServiceJsonLd(servicio);
  const breadcrumbsJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", url: siteUrl },
    { name: "Servicios", url: `${siteUrl}/servicios` },
    { name: servicio.titulo, url: `${siteUrl}/servicios/${servicio.slug}` },
  ]);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([servicioJsonLd, breadcrumbsJsonLd]),
        }}
      />
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase text-blue-700">Servicio HVAC</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">{servicio.titulo}</h1>
        <p className="mt-3 max-w-4xl text-slate-600">{servicio.descripcionLarga}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="#cotizar"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Cotizar este servicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
          >
            Ir a contacto
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Beneficios clave</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {servicio.beneficios.map((beneficio) => (
              <li key={beneficio} className="flex items-start gap-2">
                <span className="mt-[2px] text-blue-600">•</span>
                <span>{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Sectores típicos</h2>
          <div className="flex flex-wrap gap-2">
            {servicio.sectores.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-800"
              >
                {sector}
              </span>
            ))}
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">¿Buscas otro sector?</p>
            <p>También atendemos data centers, laboratorios y proyectos especiales bajo consulta.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Cómo trabajamos este servicio</h2>
          <p className="text-slate-600">Procesos claros, responsables asignados y seguimiento en cada hito.</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600">
            {servicio.comoTrabajamos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
        </div>

        <div id="cotizar" className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Cotiza en minutos</h3>
          <QuoteForm context={servicio.titulo} />
        </div>
      </section>
    </div>
  );
}
