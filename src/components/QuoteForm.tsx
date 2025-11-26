"use client";

import { FormEvent, useMemo, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type QuoteResponse = {
  ok?: boolean;
  reference?: string;
  message?: string;
};

export function QuoteForm({ context }: { context?: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState<string>("");
  const [reference, setReference] = useState<string | null>(null);

  const requiredMessage = useMemo(
    () => "Completa los campos obligatorios para procesar tu solicitud.",
    [],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const nombre = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const telefono = String(formData.get("telefono") || "").trim();

    if (!nombre || !email || !telefono) {
      setStatus("error");
      setFeedback(requiredMessage);
      return;
    }

    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setFeedback("");
    setReference(null);

    try {
      const response = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, context }),
      });

      const data = (await response.json()) as QuoteResponse;

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "No se pudo enviar la solicitud");
      }

      setStatus("success");
      setReference(data.reference || "pendiente");
      setFeedback(
        data.reference
          ? `Hemos recibido tu solicitud. Referencia: ${data.reference}.`
          : "Hemos recibido tu solicitud.",
      );
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar. Intenta nuevamente o llama al +507 6000-0000.",
      );
    }
  };

  const bannerStyle =
    status === "success"
      ? "bg-green-50 text-green-800 border-green-200"
      : "bg-amber-50 text-amber-800 border-amber-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-lg"
      noValidate
    >
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="nombre">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          placeholder="Ej: Ana Pérez"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="email">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="ana@empresa.com"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="telefono">
          Teléfono o WhatsApp
        </label>
        <input
          id="telefono"
          name="telefono"
          required
          placeholder="+507 6XX XXX"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="tipoCliente">
          Tipo de cliente
        </label>
        <select
          id="tipoCliente"
          name="tipoCliente"
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          <option value="residencial">Residencial</option>
          <option value="tecnico">Técnico</option>
          <option value="empresa">Empresa</option>
        </select>
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="servicio">
          Servicio o producto de interés
        </label>
        <input
          id="servicio"
          name="servicio"
          placeholder="Instalación VRF, mantenimiento, equipos..."
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="grid gap-1">
        <label className="text-sm font-semibold text-slate-800" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          placeholder="Describe capacidad, sitio, fechas, alcance..."
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>
      {feedback && (
        <div className={`rounded-xl border px-3 py-2 text-sm font-medium ${bannerStyle}`}>
          {status === "success" ? "✔️ " : "ℹ️ "}
          {feedback}
          {status === "success" && reference ? (
            <span className="ml-1 font-semibold text-green-700">{reference}</span>
          ) : null}
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Enviando..." : "Solicitar cotización"}
      </button>
    </form>
  );
}
