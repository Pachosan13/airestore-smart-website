"use client";

import Link from "next/link";

const phone = "+507 6000-0000";
const whatsappLink = "https://wa.me/50760000000?text=Hola%20Aire%20Store";

export function TopBar() {
  return (
    <div className="w-full border-b border-slate-200 bg-white/80 text-sm text-slate-700 backdrop-blur glass-panel">
      <div className="container flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-slate-900">Atención inmediata HVAC Panamá</span>
          <span className="hidden h-3 w-px bg-slate-200 sm:block" aria-hidden />
          <a href={`tel:${phone}`} className="font-medium hover:text-blue-700">
            Tel: {phone}
          </a>
          <span className="hidden h-3 w-px bg-slate-200 sm:block" aria-hidden />
          <a href={whatsappLink} className="font-medium text-green-600 hover:text-green-700" target="_blank" rel="noreferrer">
            WhatsApp 24/7
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={whatsappLink}
            className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
