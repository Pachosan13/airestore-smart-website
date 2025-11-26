export const metadata = {
  title: "Checklist de materiales de instalación de minisplit en Panamá | Aire Store",
  description:
    "Guía rápida para técnicos: tubería de cobre, capacitores, material eléctrico y consumibles imprescindibles para instalar minisplit en Panamá.",
};

const checklist = [
  "Tubería de cobre deshidratada en diámetros 1/4, 3/8\" y 5/8\" según tonelaje",
  "Cinta de espuma, cinta PVC y aislante para línea frigorífica",
  "Capacitores de trabajo y arranque según placa",
  "Breakers y contactores calibrados para la carga",
  "Soportes en L, pernos de anclaje y bandeja de drenaje",
  "Nitrógeno y manifold para pruebas de fuga",
  "Cables THHN y terminales aislados",
  "Kit de limpieza y bandeja protectora para servicio final",
];

export default function ArticlePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <p className="text-sm font-semibold uppercase text-primary">Guías técnicas</p>
      <h1 className="text-3xl font-semibold text-slate-900">
        Checklist de materiales de instalación de minisplit en Panamá
      </h1>
      <p className="text-lg text-slate-700">
        Optimiza tus instalaciones y evita segundas visitas asegurando estos materiales HVAC Panamá antes de llegar al sitio.
      </p>
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">Lista recomendada</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-slate-700">
        Comparte esta lista con tu equipo y coordina tu pedido por WhatsApp. Podemos prearmar kits para cada instalación y
        enviarlos a tu ruta diaria.
      </p>
    </div>
  );
}
