import { CategoryGrid } from "@/components/CategoryGrid";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Productos y repuestos de aire acondicionado en Panamá | Aire Store",
  description:
    "Catálogo de materiales de refrigeración y ferretería HVAC en Panamá: repuestos de aire acondicionado, tubería de cobre, compresores, capacitores y más.",
};

export default function ProductosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Productos</p>
        <h1 className="text-3xl font-semibold text-slate-900">Categorías de materiales HVAC en Panamá</h1>
        <p className="text-lg text-slate-700">
          Repuestos minisplit, tubería de cobre para aire acondicionado, compresores, capacitores, materiales eléctricos y
          ferretería HVAC Panamá con disponibilidad inmediata.
        </p>
      </header>

      <CategoryGrid />

      <CTASection
        title="No ves el repuesto que buscas?"
        subtitle="Escríbenos con el modelo de tu equipo y te proponemos un repuesto compatible o te confirmamos importación."
      />
    </div>
  );
}
