import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { proyectos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Proyectos HVAC Panamá",
  description: "Casos de éxito en climatización residencial, comercial e industrial en Panamá.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Proyectos</p>
        <h1 className="text-3xl font-semibold text-slate-900">Resultados medibles en cada instalación</h1>
        <p className="max-w-3xl text-slate-600">
          Diseño, instalación y mantenimiento con indicadores de ahorro y confort. Involucramos a PMs, ingenieros y técnicos
          certificados en cada fase.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {proyectos.map((proyecto) => (
          <div key={proyecto.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase text-blue-700">{proyecto.tipo}</p>
            <p className="text-lg font-semibold text-slate-900">{proyecto.titulo}</p>
            <p className="text-sm text-slate-600">{proyecto.resultado}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Agenda una visita técnica</h2>
          <p className="text-slate-600">Coordinamos levantamiento en sitio y entregamos propuesta con ingeniería y costos estimados.</p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Visitas en 24 horas en Panamá y Panamá Oeste</li>
            <li>Reportes fotográficos y termográficos</li>
            <li>Plan de ejecución y garantías por escrito</li>
          </ul>
        </div>
        <QuoteForm context="Proyectos" />
      </div>
    </div>
  );
}
