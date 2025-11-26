import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  bullets?: string[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badgeText?: string;
  imageUrl?: string;
};

export function Hero({
  title,
  subtitle,
  bullets,
  primaryCta,
  secondaryCta,
  badgeText,
  imageUrl =
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=80",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/80 to-slate-900/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1 space-y-6">
          {badgeText ? (
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-100 ring-1 ring-white/15">
              {badgeText}
            </span>
          ) : null}
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-slate-200 md:text-xl">{subtitle}</p>
          {bullets ? (
            <ul className="grid gap-3 text-sm text-slate-100 md:grid-cols-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-sm">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-300" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        <div className="flex-1 space-y-4 rounded-3xl bg-white/10 p-6 backdrop-blur-lg ring-1 ring-white/15">
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-100">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="font-semibold text-white">Respaldo técnico</p>
              <p className="mt-2 text-slate-200">
                Protocolos de garantía y soporte directo con marcas líderes.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="font-semibold text-white">Inventario real</p>
              <p className="mt-2 text-slate-200">Stock listo para repuestos de aire acondicionado en Panamá.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="font-semibold text-white">Entrega express</p>
              <p className="mt-2 text-slate-200">Despachos en ciudad y envíos nacionales coordinados.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="font-semibold text-white">Precios a cotizar</p>
              <p className="mt-2 text-slate-200">Cotiza por WhatsApp o correo con respuesta en minutos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
