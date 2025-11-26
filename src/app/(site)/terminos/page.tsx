import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones | Aire Store Panamá",
  description: "Términos de servicio para proyectos e instalaciones HVAC en Panamá.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-900">Términos y condiciones</h1>
      <div className="space-y-4 text-sm text-slate-700">
        <p>Los servicios se ejecutan según propuestas firmadas y alcances definidos.</p>
        <p>Garantías aplican con mantenimiento realizado por personal autorizado.</p>
        <p>Los tiempos de respuesta pueden variar por condiciones climáticas o disponibilidad de repuestos.</p>
        <p>El cliente se compromete a brindar acceso seguro a las áreas de trabajo.</p>
      </div>
    </div>
  );
}
