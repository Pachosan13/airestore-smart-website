"use client";

import Link from "next/link";

const phone = "+507 261-8083";
const whatsappNumber = "+507 6030-9548";
const whatsappLink = "https://wa.me/50760309548?text=Hola%20Aire%20Store";

export function TopBar() {
  return (
    <div className="w-full border-b border-white/10 bg-slate-950 text-sm text-slate-100 shadow-lg shadow-slate-900/20 backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold text-white">Atención inmediata HVAC Panamá</span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <a href={`tel:${phone}`} className="font-semibold text-emerald-100 transition hover:text-emerald-200">
            Tel: {phone}
          </a>
          <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
          <a
            href={whatsappLink}
            className="font-semibold text-emerald-200 transition hover:text-emerald-100"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp {whatsappNumber}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={whatsappLink}
            className="rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-200/10"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </div>
  );
}
