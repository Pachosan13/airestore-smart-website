import type { Metadata } from "next";
import Link from "next/link";
import { categoriasHVAC, productosCatalogo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catálogo HVAC Panamá",
  description: "Productos y soluciones HVAC en Panamá: VRF, ventilación, refrigeración comercial y controles inteligentes.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Catálogo</p>
        <h1 className="text-3xl font-semibold text-slate-900">Soluciones HVAC sin precios visibles</h1>
        <p className="max-w-3xl text-slate-600">
          Selecciona la categoría para ver especificaciones y solicitar cotización inmediata. Trabajamos con equipos inverter,
          VRF, ventilación balanceada y controles inteligentes.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {categoriasHVAC.map((categoria) => (
          <Link
            href={`/productos/${categoria.slug}`}
            key={categoria.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-semibold uppercase text-blue-700">{categoria.nombre}</p>
            <p className="mt-2 text-sm text-slate-600">{categoria.descripcion}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-blue-700">Ver categoría →</span>
          </Link>
        ))}
      </div>

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Productos destacados</h2>
          <Link href="/contacto" className="text-sm font-semibold text-blue-700">
            Solicitar catálogo completo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {productosCatalogo.map((producto) => (
            <div key={producto.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase text-blue-700">{producto.categoria}</p>
              <p className="text-lg font-semibold text-slate-900">{producto.nombre}</p>
              <p className="text-sm text-slate-600">{producto.resumen}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
                {producto.caracteristicas.map((caracteristica) => (
                  <span key={caracteristica} className="rounded-full bg-white px-3 py-1 font-semibold">
                    {caracteristica}
                  </span>
                ))}
              </div>
              <Link href={`/productos/${producto.categoria}`} className="mt-3 inline-flex text-sm font-semibold text-blue-700">
                Cotizar este producto →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
