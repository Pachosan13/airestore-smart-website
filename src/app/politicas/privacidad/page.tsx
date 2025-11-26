export const metadata = {
  title: "Política de privacidad | Aire Store Panamá",
  description: "Aviso de privacidad y manejo de datos de clientes y proveedores de Aire Store Panamá.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <p className="text-sm font-semibold uppercase text-primary">Privacidad</p>
      <h1 className="text-3xl font-semibold text-slate-900">Política de privacidad</h1>
      <p className="text-sm text-slate-700">
        Resguardamos la información de clientes y proveedores conforme a la legislación panameña. Los datos recopilados se usan
        únicamente para gestión comercial, logística y postventa. No compartimos información con terceros sin autorización.
      </p>
      <ul className="space-y-2 text-sm text-slate-700">
        <li>• Correos y teléfonos se emplean para confirmaciones de pedidos y garantías.</li>
        <li>• Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a privacidad@airestore.com.pa.</li>
        <li>• Los formularios del sitio usan cifrado estándar y almacenamiento seguro.</li>
      </ul>
    </div>
  );
}
