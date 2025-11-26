import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Aire Store Panamá",
  description: "Equipo HVAC en Panamá con ingeniería, servicio 24/7 y enfoque en eficiencia energética.",
  alternates: { canonical: "/nosotros" },
};

const valores = [
  { titulo: "Precisión técnica", descripcion: "Checklists y QA en cada instalación." },
  { titulo: "Respuesta inmediata", descripcion: "Guardias 24/7 y soporte remoto." },
  { titulo: "Transparencia", descripcion: "Reportes digitales y trazabilidad total." },
];

export default function NosotrosPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Nosotros</p>
        <h1 className="text-3xl font-semibold text-slate-900">Equipo HVAC especializado en clima tropical</h1>
        <p className="max-w-3xl text-slate-600">
          Somos ingenieros, técnicos certificados y PMs que acompañan proyectos residenciales, comerciales e industriales en
          Panamá. Trabajamos con protocolos de seguridad, eficiencia energética y experiencia de usuario.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {valores.map((valor) => (
          <div key={valor.titulo} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">{valor.titulo}</p>
            <p className="text-sm text-slate-600">{valor.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-900">Certificaciones y alianzas</h2>
        <p className="mt-2 text-slate-600">
          Aliados con fabricantes globales, protocolos de seguridad laboral y capacitaciones constantes en VRF, controles y
          ventilación.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
          <li>Fabricantes certificados VRF y chillers</li>
          <li>Protocolos de seguridad y manejo de refrigerantes</li>
          <li>Ingeniería eléctrica y mecánica de soporte</li>
          <li>Gestión de proyectos con reportes semanales</li>
        </ul>
      </div>
    </div>
  );
}
