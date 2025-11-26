export const metadata = {
  title: "Términos y condiciones | Aire Store Panamá",
  description: "Condiciones de uso del sitio y ventas de Aire Store Panamá.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <p className="text-sm font-semibold uppercase text-primary">Términos</p>
      <h1 className="text-3xl font-semibold text-slate-900">Términos y condiciones</h1>
      <p className="text-sm text-slate-700">
        El uso de este sitio implica la aceptación de estas condiciones. Las cotizaciones son válidas por tiempo definido en el
        documento enviado y sujetas a disponibilidad. Los precios son antes de impuestos salvo que se indique lo contrario.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>• Las órdenes se confirman por escrito (correo o WhatsApp) y pueden requerir abono según el producto.</li>
        <li>• Las entregas se coordinan con horarios y direcciones confirmadas por el cliente.</li>
        <li>• Las devoluciones se aceptan únicamente con autorización previa y en condiciones originales.</li>
      </ul>
    </div>
  );
}
