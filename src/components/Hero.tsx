import Link from "next/link";
import { ReactNode } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  bullets?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: ReactNode;
};

export function Hero({
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  badge,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0ea5e9,transparent_35%)] opacity-20" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1 space-y-6">
          {badge}
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            {title}
          </h1>
          <p className="text-lg text-slate-700 md:text-xl">{subtitle}</p>
          {bullets ? (
            <ul className="grid gap-3 text-slate-700 md:grid-cols-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-primary">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex-1 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="font-semibold text-slate-900">Respaldo técnico</p>
              <p className="mt-2 text-slate-700">
                Protocolos de garantía y soporte directo con marcas líderes.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Inventario real</p>
              <p className="mt-2 text-slate-700">Stock listo para repuestos de aire acondicionado en Panamá.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Entrega express</p>
              <p className="mt-2 text-slate-700">Despachos en ciudad y envíos nacionales coordinados.</p>
            </div>
            <div className="rounded-2xl bg-sky-50 p-4">
              <p className="font-semibold text-slate-900">Precios a cotizar</p>
              <p className="mt-2 text-slate-700">Cotiza por WhatsApp o correo con respuesta en minutos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
