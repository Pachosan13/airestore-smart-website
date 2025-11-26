import { CTASection } from "@/components/CTASection";
import { CategoryGrid } from "@/components/CategoryGrid";

export const metadata = {
  title: "Materiales HVAC para proyectos y contratistas en Panamá | Aire Store",
  description:
    "Proveedor de materiales HVAC para proyectos en Panamá: tubería de cobre, compresores, capacitores y ferretería técnica con soporte de ingeniería.",
};

export default function ParaProyectosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Para proyectos</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Materiales HVAC para contratistas y gerentes de proyecto en Panamá
        </h1>
        <p className="text-lg text-slate-700">
          Integramos la cadena de suministro de HVAC con ingeniería aplicada: listas de materiales por plano, logística
          escalonada y soporte de garantía.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {["Planificación de materiales", "Soporte de comisionamiento", "Logística por etapas"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-700">
              Trabajamos contigo para asegurar que cada entrega llegue en la fase correcta del proyecto y con trazabilidad.
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">Categorías críticas</p>
          <h2 className="text-2xl font-semibold text-slate-900">Compresores, tubería y materiales eléctricos</h2>
        </div>
        <CategoryGrid />
      </section>

      <CTASection
        title="Solicita un kit de instalación para tu proyecto"
        subtitle="Prearmamos kits con tubería de cobre, materiales eléctricos, ferretería HVAC y consumibles para cada frente de trabajo."
      />
    </div>
  );
}
