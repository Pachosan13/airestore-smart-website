import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Políticas de privacidad | Aire Store Panamá",
  description: "Política de privacidad y tratamiento de datos de Aire Store Panamá.",
  alternates: { canonical: "/politicas" },
};

export default function PoliticasPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-slate-900">Política de privacidad</h1>
      <p className="text-slate-600">
        Protegemos la información de contacto y solo la usamos para coordinar proyectos HVAC, soporte y facturación.
      </p>
      <div className="space-y-4 text-sm text-slate-700">
        <p>Los datos se almacenan en sistemas seguros y se eliminan a solicitud del cliente.</p>
        <p>No compartimos información con terceros salvo proveedores necesarios para la ejecución del servicio.</p>
        <p>Actualizamos esta política cuando incorporamos nuevas funcionalidades o canales.</p>
      </div>
    </div>
  );
}
