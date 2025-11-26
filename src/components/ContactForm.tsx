'use client';

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("nombre")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const mensaje = formData.get("mensaje")?.toString().trim();

    if (!name || !email || !mensaje) {
      setStatus("Por favor completa nombre, email y mensaje.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Contacto enviado", { name, email, mensaje });
      setStatus("Mensaje enviado. Un asesor te contactará en minutos.");
      setIsSubmitting(false);
      event.currentTarget.reset();
    }, 800);
  };

  return (
    <form
      className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-lg"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="nombre">
          Nombre completo
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary"
          id="nombre"
          name="nombre"
          placeholder="Ing. Manuel Pazmiño"
          required
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="email">
            Correo
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary"
            id="email"
            name="email"
            type="email"
            placeholder="ventas@airestore.com.pa"
            required
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-slate-800" htmlFor="telefono">
            Teléfono / WhatsApp
          </label>
          <input
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary"
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+507 6123-1234"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-slate-800" htmlFor="mensaje">
          ¿En qué te ayudamos?
        </label>
        <textarea
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-primary"
          id="mensaje"
          name="mensaje"
          rows={4}
          placeholder="Cotizar tubería de cobre y capacitores para instalación de minisplit."
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status ? <p className="text-sm text-slate-700">{status}</p> : null}
    </form>
  );
}
