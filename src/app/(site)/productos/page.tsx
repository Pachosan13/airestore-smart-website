import { ProductosExplorer } from "./ProductosExplorer";
import { categoriasHVAC, productosCatalogo } from "@/lib/data";
import { buildProductsJsonLd, getProductosMetadata } from "@/lib/seo";

export const metadata = getProductosMetadata();

export default function ProductosPage() {
  const productosJsonLd = buildProductsJsonLd();

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productosJsonLd) }}
      />
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
