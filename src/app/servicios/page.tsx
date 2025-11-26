import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Servicios y asesoría HVAC en Panamá | Aire Store",
  description:
    "Asesoría técnica, desarrollo de proyectos, garantías y supervisión de obras para repuestos de aire acondicionado y materiales HVAC en Panamá.",
};

const servicios = [
  {
    title: "Asesoría técnica",
    detail: "Seleccionamos repuestos compatibles y optimizamos listas de materiales de instalación de minisplit en Panamá.",
  },
  {
    title: "Desarrollo de proyectos",
    detail: "Soporte de ingeniería para contratistas: tubería de cobre, materiales eléctricos y ferretería HVAC por fases.",
  },
  {
    title: "Garantías y soporte",
    detail: "Acompañamos reclamos y documentamos pruebas para marcas líderes de compresores y componentes.",
  },
  {
    title: "Supervisión de obras",
    detail: "Visitas de campo para validar montaje, seguridad eléctrica y buenas prácticas de refrigeración.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Servicios</p>
        <h1 className="text-3xl font-semibold text-slate-900">Servicios y soporte para tus sistemas de aire acondicionado</h1>
        <p className="text-lg text-slate-700">
          Combinamos inventario de materiales HVAC con un equipo que acompaña tus garantías y proyectos para que no se detengan.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {servicios.map((servicio) => (
          <div
            key={servicio.title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900">{servicio.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{servicio.detail}</p>
          </div>
        ))}
      </div>

      <CTASection
        title="Agenda una visita técnica"
        subtitle="Coordinamos diagnóstico, evaluamos riesgos y proponemos el kit de materiales eléctricos y refrigeración ideal para tu obra."
      />
    </div>
  );
}
