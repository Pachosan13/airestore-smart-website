import { CTASection } from "@/components/CTASection";
import { CategoryGrid } from "@/components/CategoryGrid";

export const metadata = {
  title: "Soluciones HVAC para empresas y propiedades en Panamá | Aire Store",
  description:
    "Materiales de refrigeración y repuestos de aire acondicionado para empresas, property managers y administradores de edificios en Panamá.",
};

export default function ParaEmpresasPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Para empresas</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Materiales HVAC para property managers y administradores de edificios
        </h1>
        <p className="text-lg text-slate-700">
          Protegemos la continuidad operativa de tus sistemas de aire acondicionado con inventario real, entregas programadas y
          garantías claras.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {["Abastecimiento recurrente", "Reportes de trazabilidad", "Entrega en sitio con control"].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-slate-700">
              Contratos de suministro para consumibles, capacitores y repuestos de alto giro, más soporte de marcas para tus garantías.
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">Cobertura</p>
          <h2 className="text-2xl font-semibold text-slate-900">Sucursales y envíos nacionales</h2>
          <p className="text-sm text-slate-700">
            Entregamos en Ciudad de Panamá, Tocumen y enviamos a todo el país. Ideal para cadenas de locales, hoteles y oficinas corporativas.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Materiales eléctricos para aire acondicionado", "Ferretería HVAC Panamá", "Consumibles certificados"].map(
            (item) => (
              <div key={item} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ),
          )}
        </div>
      </section>

      <CategoryGrid />

      <CTASection
        title="Cotiza repuestos de aire para tus edificios"
        subtitle="Creamos listas estándar por modelo de equipo para que tus técnicos siempre tengan el repuesto correcto."
      />
    </div>
  );
}
