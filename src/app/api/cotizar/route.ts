import { NextResponse } from "next/server";

type QuotePayload = {
  nombre?: string;
  email?: string;
  telefono?: string;
  tipoCliente?: string;
  servicio?: string;
  mensaje?: string;
  context?: string;
};

function buildReference() {
  const seed = Date.now().toString().slice(-4);
  return `COT-2025-${seed}`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as QuotePayload;
  const { nombre, email, telefono, tipoCliente, servicio, mensaje, context } = body;

  const missing = [
    { key: "nombre", label: "nombre" },
    { key: "email", label: "correo" },
    { key: "telefono", label: "teléfono" },
  ].find(({ key }) => !body[key as keyof QuotePayload] || !String(body[key as keyof QuotePayload]).trim());

  if (missing) {
    return NextResponse.json(
      {
        ok: false,
        message: `Falta el ${missing.label} para registrar la solicitud.`,
      },
      { status: 400 },
    );
  }

  const reference = buildReference();

  const requestRecord = {
    reference,
    nombre: nombre?.trim(),
    email: email?.trim(),
    telefono: telefono?.trim(),
    tipoCliente: tipoCliente?.trim() || "sin especificar",
    servicio: servicio?.trim() || "sin especificar",
    mensaje: mensaje?.trim() || "sin detalles",
    context,
    createdAt: new Date().toISOString(),
  };

  // Aquí podríamos enviar un correo de confirmación usando un provider (SendGrid, Resend, etc.).
  // await sendEmail({ to: email, template: "cotizacion", data: requestRecord });

  console.log("Nueva solicitud de cotización", requestRecord);

  return NextResponse.json({ ok: true, reference });
}
