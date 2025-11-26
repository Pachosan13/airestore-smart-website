import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { tecnicosBeneficios } from "@/lib/data";

export const metadata: Metadata = {
  title: "Técnicos HVAC en Panamá",
  description: "Únete a la red de técnicos HVAC de Aire Store Panamá con capacitaciones y rutas premium.",
  alternates: { canonical: "/tecnicos" },
};

export default function TecnicosPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Técnicos</p>
        <h1 className="text-3xl font-semibold text-slate-900">Programa para técnicos y cuadrillas HVAC</h1>
        <p className="max-w-3xl text-slate-600">
          Capacitaciones continuas, rutas eficientes y pagos puntuales. Trabaja con equipos certificados y soporte de ingeniería.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {tecnicosBeneficios.map((beneficio) => (
          <div key={beneficio} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">{beneficio}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Aplica para proyectos</h2>
          <p className="text-slate-600">Comparte tu especialidad, certificaciones y disponibilidad.</p>
        </div>
        <QuoteForm context="Técnicos" />
      </div>
    </div>
  );
}
