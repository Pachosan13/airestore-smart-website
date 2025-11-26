import type { Metadata } from "next";
import { ProductosExplorer } from "./ProductosExplorer";
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
        <h1 className="text-3xl font-semibold text-slate-900">Soluciones HVAC con fichas listas para cotizar</h1>
        <p className="max-w-3xl text-slate-600">
          Explora por categoría, marca o tipo tecnológico. Cada ficha incluye capacidad, rango de precios de referencia y un CTA
          para cotizar al instante con nuestro equipo.
        </p>
      </header>

      <ProductosExplorer productos={productosCatalogo} categorias={categoriasHVAC} />
    </div>
  );
}
