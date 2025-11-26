import { CategoryGrid } from "@/components/CategoryGrid";
import { CTASection } from "@/components/CTASection";
import { ProductList } from "@/components/ProductList";

export const metadata = {
  title: "Soluciones para técnicos HVAC en Panamá | Aire Store",
  description:
    "Repuestos de aire acondicionado, materiales de refrigeración y ferretería HVAC en Panamá diseñados para técnicos y cuadrillas de servicio.",
};

export default function ParaTecnicosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Para técnicos</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Repuestos de aire acondicionado en Panamá pensados para técnicos en campo
        </h1>
        <p className="text-lg text-slate-700">
          Entregamos rápido los materiales que te permiten cerrar órdenes sin re-trabajos: tubería de cobre, capacitores,
          compresores, tarjetas electrónicas y ferretería HVAC.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {["Stock listo para emergencias", "Garantías gestionadas localmente", "Capacitaciones prácticas"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-700">
              Respaldamos tu trabajo con materiales probados en Panamá y soporte técnico que responde en minutos.
            </p>
          </div>
        ))}
      </section>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">Materiales que siempre rotan</p>
          <h2 className="text-2xl font-semibold text-slate-900">Repuestos minisplit y consumibles</h2>
        </div>
        <ProductList />
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">Categorías clave</p>
          <h2 className="text-2xl font-semibold text-slate-900">Materiales HVAC Panamá</h2>
        </div>
        <CategoryGrid />
      </div>

      <CTASection
        title="Cotiza repuestos de aire por WhatsApp"
        subtitle="Envíanos la foto de la placa o la lista de partes y te respondemos con disponibilidad, alternativas y tiempos de entrega."
      />
    </div>
  );
}
