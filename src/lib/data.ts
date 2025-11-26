import categorias from "@/datos/categorias.json";
import productos from "@/datos/productos.json";
import preguntas from "@/datos/preguntas.json";

export type Categoria = (typeof categorias)[number];
export type Producto = (typeof productos)[number];

export const blogPosts = [
  {
    slug: "hvac-panama-mantenimiento-inteligente",
    titulo: "Mantenimiento inteligente HVAC en Panamá",
    resumen: "Cómo programar mantenimientos predictivos para extender la vida útil de tus sistemas.",
    contenido:
      "Implementamos sensores, dashboards y alertas tempranas para que tu sistema HVAC opere con eficiencia máxima y cero sorpresas.",
    fecha: "2024-11-12",
  },
  {
    slug: "vrf-para-proyectos-mixtos",
    titulo: "VRF para proyectos mixtos: confort continuo",
    resumen: "Beneficios de VRF heat recovery para hoteles, oficinas y residencias en un mismo complejo.",
    contenido:
      "Diseñamos sistemas VRF con recuperación de calor para climas tropicales, optimizando consumo y confort en zonas independientes.",
    fecha: "2024-10-03",
  },
  {
    slug: "calidad-aire-en-torres",
    titulo: "Calidad de aire en torres y PH",
    resumen: "Estrategias de ventilación, filtración y sensores para proteger a residentes y colaboradores.",
    contenido:
      "Integramos filtros MERV13, UV-C y medición continua de CO₂ para cumplir normativas y ofrecer un ambiente saludable.",
    fecha: "2024-09-18",
  },
];

export const servicios = [
  {
    titulo: "Ingeniería HVAC",
    descripcion: "Cálculos de carga, selección de equipos, planos y especificaciones para licitaciones y proyectos llave en mano.",
    icono: "📐",
  },
  {
    titulo: "Instalación certificada",
    descripcion: "Cuadrillas profesionales, protocolos de vacío profundo, brazing y puesta en marcha documentada.",
    icono: "🛠️",
  },
  {
    titulo: "Mantenimiento 24/7",
    descripcion: "Planes preventivos y correctivos con monitoreo remoto, alertas y reportes digitales en minutos.",
    icono: "⏱️",
  },
  {
    titulo: "Automatización y BMS",
    descripcion: "Integración con termostatos inteligentes, gateways BACnet/Modbus y dashboards de consumo.",
    icono: "🌐",
  },
];

export const proyectos = [
  {
    titulo: "Torre Vista Mar",
    tipo: "Residencial",
    resultado: "48 sistemas inverter con recuperación de calor, ahorro 22% año 1.",
  },
  {
    titulo: "Centro Logístico Pacífico",
    tipo: "Industrial",
    resultado: "Instalación de chillers scroll 80TR y BMS con telemetría 24/7.",
  },
  {
    titulo: "Retail Boulevard",
    tipo: "Comercial",
    resultado: "Rooftops de alta eficiencia y ventilación balanceada para 18 locales.",
  },
];

export const tecnicosBeneficios = [
  "Capacitaciones con fabricantes y certificación anual",
  "Plataforma de tickets y pagos puntuales",
  "Rutas optimizadas en Panamá y Panamá Oeste",
  "Acceso a herramientas premium y stock reservado",
];

export const faq = preguntas;
export const categoriasHVAC = categorias;
export const productosCatalogo = productos;
