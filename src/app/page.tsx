import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductList } from "@/components/ProductList";
import { StatsStrip } from "@/components/StatsStrip";
import { CTASection } from "@/components/CTASection";
import Link from "next/link";

export const metadata = {
  title: "Materiales y repuestos de aire acondicionado en Panamá | Aire Store",
  description:
    "Repuestos de aire acondicionado en Panamá, tubería de cobre, compresores, capacitores y ferretería HVAC para técnicos, empresas y proyectos.",
};

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <Hero
        title="Materiales y repuestos HVAC en Panamá, listos cuando los necesitas."
        subtitle="Aire Store: todo para técnicos y proyectos en climatización."
        badgeText="+15 años de experiencia"
        bullets={[
          "Repuestos minisplit y compresores listos para despacho en Panamá",
          "Tubería de cobre, materiales eléctricos y ferretería HVAC",
          "Cotizaciones por WhatsApp con inventario validado",
          "Logística para técnicos, edificios y obras de climatización",
        ]}
        primaryCta={{ label: "Ver catálogo", href: "/productos" }}
        secondaryCta={{ label: "Cotizar por WhatsApp", href: "https://wa.me/50761231234" }}
      />
      <StatsStrip />

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">Categorías principales</p>
            <h2 className="text-2xl font-semibold text-slate-900">Materiales HVAC Panamá</h2>
          </div>
          <Link className="text-sm font-semibold text-primary" href="/productos">
            Ver todas
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">Repuestos destacados</p>
            <h2 className="text-2xl font-semibold text-slate-900">Soluciones listas para técnicos</h2>
          </div>
          <Link className="text-sm font-semibold text-primary" href="/para-tecnicos">
            Ver beneficios
          </Link>
        </div>
        <ProductList />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {["Diagnóstico y asesoría técnica", "Garantías gestionadas en Panamá", "Supervisión de obras"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
              <p className="mt-2 text-sm text-slate-700">
                Acompañamos tus proyectos desde la selección de repuestos hasta la puesta en marcha. Ideal para técnicos, empresas y
                contratistas que necesitan respuestas rápidas.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <CTASection
          title="Cotiza repuestos de aire acondicionado y materiales HVAC en Panamá"
          subtitle="Envíanos tu lista de partes: capacitores, compresores, tubería de cobre, materiales eléctricos y ferretería HVAC. Respondemos con disponibilidad y tiempos de entrega."
        />
      </section>
    </div>
  );
}
