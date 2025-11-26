const stats = [
  { label: "Años respaldando técnicos", value: "+15" },
  { label: "Sucursales en Panamá", value: "3" },
  { label: "Marcas aliadas", value: "25" },
  { label: "Órdenes entregadas al año", value: "10k+" },
];

export function StatsStrip() {
  return (
    <section className="bg-slate-900 py-8 text-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-2xl bg-slate-800 px-4 py-3 text-center shadow-inner">
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className="text-xs text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
