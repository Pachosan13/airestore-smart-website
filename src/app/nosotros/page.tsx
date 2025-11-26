import Image from "next/image";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Nosotros | Aire Store Panamá",
  description:
    "Historia, misión y equipo de Aire Store Panamá: especialistas en materiales y repuestos de aire acondicionado y refrigeración.",
};

const valores = [
  {
    title: "Rapidez y disponibilidad",
    detail: "Inventario real de repuestos de aire acondicionado en Panamá y entregas coordinadas para evitar paradas.",
  },
  {
    title: "Confianza técnica",
    detail: "Acompañamos con ingeniería y garantía de marcas para que cada instalación quede lista a la primera.",
  },
  {
    title: "Cercanía",
    detail: "Equipo local que conoce las condiciones de Panamá y habla el idioma de los técnicos y administradores.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase text-primary">Nosotros</p>
          <h1 className="text-3xl font-semibold text-slate-900">El aliado HVAC con base en Panamá</h1>
          <p className="text-lg text-slate-700">
            Aire Store Panamá nace para dar respuesta rápida a técnicos, property managers y contratistas que necesitan repuestos
            confiables y soporte local.
          </p>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-200">
          <Image src="/logo-aire-store.svg" alt="Aire Store Panamá" fill className="object-contain p-8" />
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {valores.map((valor) => (
          <div key={valor.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{valor.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{valor.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-2xl font-semibold text-slate-900">Nuestro equipo</h2>
        <p className="mt-3 text-sm text-slate-700">
          Liderados por Ing. Manuel Pazmiño, nuestro equipo comercial y técnico combina experiencia en refrigeración, eléctrica
          y logística para entregar soluciones completas. Trabajamos con marcas certificadas y mantenemos trazabilidad de cada
          lote.
        </p>
      </section>

      <CTASection
        title="Agenda una reunión con nuestro equipo"
        subtitle="Coordinemos cómo abastecer tus repuestos minisplit, materiales de refrigeración y ferretería HVAC en Panamá."
      />
    </div>
  );
}
