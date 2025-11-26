import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata = {
  title: "Preguntas frecuentes | Aire Store Panamá",
  description:
    "Preguntas frecuentes sobre garantías, stock, tiempos de entrega y facturación de materiales HVAC en Panamá.",
};

const faqs = [
  {
    question: "¿Puedo cotizar repuestos de aire acondicionado por WhatsApp?",
    answer:
      "Sí. Envía foto de la placa o lista de partes al +507 6123-1234 y te confirmamos disponibilidad y alternativas compatibles.",
  },
  {
    question: "¿Hacen envíos al interior de Panamá?",
    answer:
      "Coordinamos envíos desde Ciudad de Panamá y Tocumen a cualquier provincia con transporte asegurado y guía de seguimiento.",
  },
  {
    question: "¿Cómo manejan las garantías?",
    answer:
      "Documentamos la instalación, probamos los equipos y gestionamos con el fabricante. Te asesoramos en los requisitos de cada marca.",
  },
  {
    question: "¿Tienen precios publicados?",
    answer:
      "Trabajamos con precios a cotizar para ajustar según volumen y marca requerida. Compartimos listas actualizadas bajo solicitud.",
  },
  {
    question: "¿Puedo abrir crédito empresarial?",
    answer:
      "Sí, evaluamos tu perfil y frecuencia de compras para ofrecer condiciones preferenciales y entregas programadas.",
  },
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">FAQ</p>
        <h1 className="text-3xl font-semibold text-slate-900">Preguntas frecuentes</h1>
        <p className="text-lg text-slate-700">
          Respuestas rápidas sobre garantías, tiempos, materiales de refrigeración en Panamá y solicitudes especiales.
        </p>
      </header>

      <FAQAccordion faqs={faqs} />
    </div>
  );
}
