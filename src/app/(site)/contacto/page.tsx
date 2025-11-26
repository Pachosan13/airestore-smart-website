import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contacto HVAC Panamá",
  description: "Solicita una cotización HVAC en Panamá. Respuesta en minutos por teléfono o WhatsApp.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Contacto</p>
        <h1 className="text-3xl font-semibold text-slate-900">Hablemos de tu proyecto HVAC en Panamá</h1>
        <p className="max-w-3xl text-slate-600">Respuesta inmediata para instalaciones, mantenimientos y proyectos especiales.</p>
      </header>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <QuoteForm context="Contacto" />
        <div className="space-y-4 text-sm text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Línea directa</p>
            <a href="tel:+50760000000" className="text-blue-700 hover:text-blue-800">
              +507 6000-0000
            </a>
            <p className="text-slate-600">Atención 24/7 en Ciudad de Panamá y Panamá Oeste.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">WhatsApp</p>
            <Link
              href="https://wa.me/50760000000?text=Quiero%20cotizar%20HVAC"
              className="text-blue-700 hover:text-blue-800"
            >
              Escríbenos ahora
            </Link>
            <p className="text-slate-600">Coordinamos visita técnica en minutos.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Correo</p>
            <a href="mailto:hola@airestore.pa" className="text-blue-700 hover:text-blue-800">
              hola@airestore.pa
            </a>
            <p className="text-slate-600">Ideal para licitaciones y proyectos corporativos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
