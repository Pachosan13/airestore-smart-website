export const metadata = {
  title: "Política de garantía | Aire Store Panamá",
  description:
    "Políticas de garantía para repuestos de aire acondicionado, compresores y materiales HVAC de Aire Store Panamá.",
};

export default function GarantiaPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <p className="text-sm font-semibold uppercase text-primary">Garantía</p>
      <h1 className="text-3xl font-semibold text-slate-900">Política de garantía</h1>
      <p className="text-sm text-slate-700">
        Todas las piezas y materiales HVAC se entregan con respaldo de fabricante. Para hacer efectiva la garantía requerimos:
        factura, evidencia de instalación correcta y reporte técnico. El tiempo de respuesta promedio es de 5 a 10 días hábiles.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>• Compresores y componentes eléctricos deben instalarse con protección y vacío adecuado.</li>
        <li>• Los consumibles no aplican a garantía salvo defectos de fabricación.</li>
        <li>• Coordinamos evaluación en sitio cuando es necesario validar condiciones de operación.</li>
      </ul>
    </div>
  );
}
