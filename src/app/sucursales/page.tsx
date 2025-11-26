import { BranchCard, Branch } from "@/components/BranchCard";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Sucursales Aire Store Panamá | Ubicaciones y contacto",
  description:
    "Sucursales de Aire Store en Ciudad de Panamá, Tocumen y David con materiales de refrigeración y repuestos de aire acondicionado listos para despacho.",
};

const branches: Branch[] = [
  {
    name: "Ciudad de Panamá - Vía España",
    address: "Vía España, local 12. Frente a estación del Metro Vía Argentina.",
    phone: "+507 302-6209",
    schedule: "Lun-Vie 8:00-5:30 | Sáb 8:00-1:00",
  },
  {
    name: "Tocumen",
    address: "Entrada de Tocumen, calle industrial. Bodega con despacho de proyectos.",
    phone: "+507 6980-0000",
    schedule: "Lun-Vie 8:00-5:30 | Sáb 8:00-1:00",
  },
  {
    name: "David, Chiriquí",
    address: "Vía Boquete, plaza comercial Las Lomas.",
    phone: "+507 777-1122",
    schedule: "Lun-Vie 8:00-5:00",
  },
];

export default function SucursalesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Sucursales</p>
        <h1 className="text-3xl font-semibold text-slate-900">Visítanos o coordina un envío</h1>
        <p className="text-lg text-slate-700">
          Tenemos sucursales estratégicas y logística nacional para entregar repuestos de aire acondicionado y materiales HVAC en Panamá.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {branches.map((branch) => (
          <BranchCard key={branch.name} branch={branch} />
        ))}
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">Ubicación principal</h2>
        <p className="mt-2 text-sm text-slate-700">Vía España, Ciudad de Panamá.</p>
        <div className="mt-4 overflow-hidden rounded-2xl">
          <iframe
            title="Mapa Aire Store Panamá"
            className="h-64 w-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.115920495269!2d-79.507552!3d9.001388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab5b5f0fd0a4b9%3A0x9e7c7f7e36f2e9c9!2sVia%20Espa%C3%B1a!5e0!3m2!1ses!2spa!4v1716161111"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      <CTASection
        title="Coordina tu entrega"
        subtitle="Envía tu lista y te confirmamos stock y tiempos de envío a cualquier punto de Panamá."
      />
    </div>
  );
}
