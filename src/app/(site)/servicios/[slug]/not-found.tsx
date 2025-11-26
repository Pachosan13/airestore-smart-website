import Link from "next/link";

export default function ServicioNotFound() {
  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase text-blue-700">Servicio HVAC</p>
      <h1 className="text-2xl font-semibold text-slate-900">Servicio no encontrado</h1>
      <p className="text-slate-600">El servicio que buscas no existe o fue movido. Te invitamos a revisar la lista completa.</p>
      <div className="flex justify-center gap-3">
        <Link
          href="/servicios"
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Ver todos los servicios
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:text-blue-700"
        >
          Ir a contacto
        </Link>
      </div>
    </div>
  );
}
