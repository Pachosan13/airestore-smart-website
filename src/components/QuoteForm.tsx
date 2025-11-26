"use client";

import { FormEvent, useState } from "react";

export function QuoteForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, context }),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la solicitud");
      }

      setStatus("success");
      setMessage("Recibimos tu solicitud. Te contactaremos en minutos.");
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Hubo un error al enviar. Intenta nuevamente o llama al +507 6000-0000.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg">
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="nombre">
          Nombre y empresa
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          placeholder="Ej: Ana / PH Bayfront"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="contacto">
          Teléfono o WhatsApp
        </label>
        <input
          id="contacto"
          name="contacto"
          required
          placeholder="+507 6XX XXX"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="servicio">
          Servicio o categoría
        </label>
        <input
          id="servicio"
          name="servicio"
          placeholder="Instalación VRF, mantenimiento, proyectos"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="detalles">
          Detalles
        </label>
        <textarea
          id="detalles"
          name="detalles"
          rows={3}
          placeholder="Describe capacidad, sitio, fechas, alcance..."
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Solicitar cotización"}
      </button>
      {message && (
        <p className={`text-sm ${status === "success" ? "text-green-600" : "text-amber-600"}`}>{message}</p>
      )}
    </form>
  );
}
