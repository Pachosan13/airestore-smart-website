import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const timestamp = new Date().toISOString();

  return NextResponse.json({
    received: body,
    message: "Solicitud registrada",
    timestamp,
  });
}
