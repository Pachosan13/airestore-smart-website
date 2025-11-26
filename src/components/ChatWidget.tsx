'use client';

import { FormEvent, useState } from "react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      nombre: formData.get("nombre")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      mensaje: formData.get("mensaje")?.toString() ?? "",
    };
    if (!payload.nombre || !payload.email || !payload.mensaje) {
      setStatus("Completa los datos para conectar con nuestro equipo.");
      return;
    }
    console.log("Mensaje a GoHighLevel", payload);
    setStatus("Mensaje enviado. Estamos atentos.");
    event.currentTarget.reset();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 text-sm">
      {isOpen ? (
        <div className="w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">Chat con Aire Store</p>
              <p className="text-xs text-slate-600">
                Este chat está conectado a nuestro sistema de atención con IA (GoHighLevel).
              </p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-lg text-slate-500 hover:text-primary">
              ×
            </button>
          </div>
          <form className="space-y-2" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-primary"
              name="nombre"
              placeholder="Nombre"
            />
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-primary"
              name="email"
              type="email"
              placeholder="Correo"
            />
            <textarea
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs outline-none focus:border-primary"
              name="mensaje"
              rows={3}
              placeholder="Cuéntanos qué necesitas"
            />
            <button className="w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow hover:bg-slate-900">
              Enviar
            </button>
            {status ? <p className="text-[11px] text-slate-600">{status}</p> : null}
          </form>
        </div>
      ) : null}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl transition hover:scale-105"
        aria-label="Abrir chat"
      >
        💬
      </button>
    </div>
  );
}
