import Link from "next/link";

export function CTASection({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-sky-600 to-slate-900 p-8 text-white shadow-xl">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-sm text-sky-100">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="https://wa.me/50761231234"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Hablar con un asesor
          </Link>
        </div>
      </div>
    </section>
  );
}
