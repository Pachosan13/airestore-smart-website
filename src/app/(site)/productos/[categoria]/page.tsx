import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { categoriasHVAC, productosCatalogo } from "@/lib/data";
import { buildBreadcrumbJsonLd, buildProductsJsonLd, getCategoriaMetadata, siteUrl } from "@/lib/seo";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria: categoriaSlug } = await params;
  return getCategoriaMetadata(categoriaSlug);
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria: categoriaSlug } = await params;
  const categoria = categoriasHVAC.find((cat) => cat.slug === categoriaSlug);

  if (!categoria) {
    notFound();
  }

  const productos = productosCatalogo.filter((producto) => producto.categoria === categoria.slug);
  const breadcrumbsJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", url: siteUrl },
    { name: "Productos", url: `${siteUrl}/productos` },
    { name: categoria.nombre, url: `${siteUrl}/productos/${categoria.slug}` },
  ]);
  const productosJsonLd = buildProductsJsonLd(productos);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbsJsonLd, productosJsonLd]),
        }}
      />
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Categoría</p>
        <h1 className="text-3xl font-semibold text-slate-900">{categoria.nombre}</h1>
        <p className="max-w-3xl text-slate-600">{categoria.descripcion}</p>
        <div className="flex gap-3">
          <Link
            href="https://wa.me/50760000000?text=Necesito%20cotizar%20esta%20categor%C3%ADa"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
          >
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            Contactar ahora
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {productos.map((producto) => (
            <article key={producto.id} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-blue-700">
                  <span>{categoria.nombre}</span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] text-blue-700">{producto.tipo}</span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{producto.nombre}</h2>
                <p className="text-sm text-slate-600">{producto.resumen}</p>
                <dl className="grid grid-cols-2 gap-3 text-sm text-slate-700">
                  <div>
                    <dt className="font-semibold text-slate-900">Marca</dt>
                    <dd>{producto.marca}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Capacidad</dt>
                    <dd>{producto.capacidad}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Precio estimado</dt>
                    <dd className="text-emerald-700">{producto.precio?.toLocaleString("es-PA", { style: "currency", currency: "USD", minimumFractionDigits: 2 }) ?? "A cotizar"}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Tipo</dt>
                    <dd>{producto.tipo}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {producto.caracteristicas.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/contacto?producto=${encodeURIComponent(producto.nombre)}`}
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Solicitar cotización
                </Link>
                <Link
                  href="/contacto"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Ver ficha completa
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Programa de instalación</h2>
          <p className="text-slate-600">
            Supervisión de ingeniería, checklists digitales, reportes fotográficos y puesta en marcha documentada. Garantía
            extendida con mantenimiento certificado.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Inspección inicial y plan de ejecución</li>
            <li>Pruebas de vacío, carga de gas y calibración</li>
            <li>Capacitación al usuario y entrega de dossier</li>
          </ul>
        </div>
        <QuoteForm context={`Categoría: ${categoria.nombre}`} />
      </div>
    </div>
  );
}
