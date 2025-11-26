import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { categoriasHVAC, productosCatalogo } from "@/lib/data";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { categoria: string } }): Promise<Metadata> {
  const categoria = categoriasHVAC.find((cat) => cat.slug === params.categoria);
  if (!categoria) {
    return { title: "Categoría HVAC no encontrada" };
  }

  return {
    title: `${categoria.nombre} en Panamá | HVAC premium`,
    description: categoria.descripcion,
    alternates: { canonical: `/productos/${categoria.slug}` },
  };
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const categoria = categoriasHVAC.find((cat) => cat.slug === params.categoria);

  if (!categoria) {
    notFound();
  }

  const productos = productosCatalogo.filter((producto) => producto.categoria === categoria.slug);

  return (
    <div className="space-y-10">
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

      <div className="grid gap-4 md:grid-cols-2">
        {productos.map((producto) => (
          <div key={producto.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase text-blue-700">{categoria.nombre}</p>
            <p className="text-lg font-semibold text-slate-900">{producto.nombre}</p>
            <p className="text-sm text-slate-600">{producto.resumen}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
              {producto.caracteristicas.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

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
