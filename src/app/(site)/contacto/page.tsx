import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import {
  buildLocalBusinessJsonLd,
  getContactoMetadata,
  siteAddress,
  siteEmail,
  siteHours,
  sitePhones,
} from "@/lib/seo";

export const metadata = getContactoMetadata();

export default function ContactoPage() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();
  const whatsappLink = "https://wa.me/50760309548?text=Hola%20Aire%20Store";
  const whatsappNumber = "+507 6030-9548";
  const primaryPhoneHref = sitePhones[0].replace(/\D/g, "");
  const whatsappHref = sitePhones[1].replace(/\D/g, "");

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Contacto</p>
        <h1 className="text-3xl font-semibold text-slate-900">Hablemos de tu proyecto HVAC en Panamá</h1>
        <p className="max-w-3xl text-slate-600">Respuesta inmediata para instalaciones, mantenimientos y proyectos especiales.</p>
      </header>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:grid-cols-2">
        <QuoteForm context="Contacto" />
        <div className="space-y-5 text-sm text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Datos de contacto</p>
            <address className="mt-2 grid gap-2 not-italic">
              <p className="text-slate-900">{siteAddress}</p>
              <a href={`tel:+${primaryPhoneHref}`} className="font-semibold text-blue-700 hover:text-blue-800">
                {sitePhones[0]}
              </a>
              <a href={`tel:+${whatsappHref}`} className="font-semibold text-blue-700 hover:text-blue-800">
                {sitePhones[1]}
              </a>
              <Link href={whatsappLink} className="text-green-700 hover:text-green-800" target="_blank" rel="noreferrer">
                WhatsApp: {whatsappNumber}
              </Link>
              <a href={`mailto:${siteEmail}`} className="font-semibold text-blue-700 hover:text-blue-800">
                {siteEmail}
              </a>
            </address>
            <p className="mt-2 text-slate-600">Lunes a Sábado – 7:00 a.m. a 6:00 p.m.</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Sucursales</p>
            <ul className="mt-3 space-y-2">
              <li>
                <p className="font-semibold text-slate-900">Betania</p>
                <p>{siteAddress}</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">
                  Juan Díaz <span className="text-xs text-amber-700">Próxima sede</span>
                </p>
                <p>Varias ubicaciones en Panamá — contáctanos para más info.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Chorrera</p>
                <p className="text-slate-600">Sede regional — varias ubicaciones en Panamá.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Santiago</p>
                <p className="text-slate-600">Sede regional — varias ubicaciones en Panamá.</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">David</p>
                <p className="text-slate-600">Sede regional — varias ubicaciones en Panamá.</p>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-lg font-semibold text-slate-900">Horario de atención</p>
            <p className="font-semibold text-slate-900">{siteHours}</p>
            <p className="text-slate-600">Coordinamos visitas técnicas y entregas el mismo día en Ciudad de Panamá.</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <iframe
          title="Mapa Aire Store Panamá"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.027619130598!2d-79.52062782419242!3d9.013786890831235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8db636e8d2f%3A0xe3d3d7a7abaddc6!2sBethania%2C%20Avenida%20La%20Paz%2C%20local%20G-113%2C%20Ciudad%20de%20Panam%C3%A1%2C%20Panam%C3%A1!5e0!3m2!1ses!2spa!4v1719853238000!5m2!1ses!2spa"
          className="h-[350px] w-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
