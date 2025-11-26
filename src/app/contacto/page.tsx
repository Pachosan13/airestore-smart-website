import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Contacto | Aire Store Panamá",
  description:
    "Contacta a Aire Store Panamá para cotizar repuestos de aire acondicionado, materiales de refrigeración y ferretería HVAC.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Contacto</p>
        <h1 className="text-3xl font-semibold text-slate-900">Hablemos de tu próximo servicio o proyecto</h1>
        <p className="text-lg text-slate-700">
          Cotiza repuestos de aire acondicionado en Panamá, tubería de cobre, materiales eléctricos y ferretería HVAC. Respuesta en minutos.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <ContactForm />
        <div className="space-y-4 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold text-slate-900">Información de contacto</h2>
          <p className="text-sm text-slate-700">
            Tel: +507 302-6209 <br /> WhatsApp: +507 6123-1234 <br /> Correo: ventas@airestore.com.pa
          </p>
          <p className="text-sm text-slate-700">
            Dirección: Vía España, Ciudad de Panamá. Envíos a todo el país.
          </p>
          <CTASection
            title="¿Prefieres WhatsApp?"
            subtitle="Envíanos tu lista de repuestos y fotos de la placa."
          />
        </div>
      </div>
    </div>
  );
}
