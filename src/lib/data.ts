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

export type Servicio = {
  slug: string;
  titulo: string;
  descripcion: string;
  icono: string;
  descripcionLarga: string;
  beneficios: string[];
  sectores: string[];
  comoTrabajamos: string[];
};

export const servicios: Servicio[] = [
  {
    slug: "ingenieria-hvac",
    titulo: "Ingeniería HVAC",
    descripcion: "Cálculos de carga, selección de equipos, planos y especificaciones para licitaciones y proyectos llave en mano.",
    icono: "📐",
    descripcionLarga:
      "Desarrollamos la ingeniería térmica completa: memoria de cálculo, selección de equipos tropicalizados, planos en BIM/AutoCAD y especificaciones para compras y licitaciones. Optimizamos consumo energético y aseguramos cumplimiento con normas ASHRAE adaptadas a la humedad y temperatura de Panamá.",
    beneficios: [
      "Modelos de carga térmica ajustados a zonas críticas y horarios pico",
      "Selección de equipos inverter, VRF o agua helada según ROI",
      "Planos listos para aprobación municipal y coordinación de obra",
      "Presupuestos comparativos con opciones de eficiencia escalables",
    ],
    sectores: ["Residencial", "Comercial", "Proyectos e infraestructura"],
    comoTrabajamos: [
      "Levantamiento en sitio y revisión de planos arquitectónicos",
      "Cálculos de carga y simulaciones energéticas",
      "Diseño de ductería, hidráulica y ventilación mecánica",
      "Entrega de planos, memorias y cronograma constructivo",
    ],
  },
  {
    slug: "instalacion-aires-acondicionados",
    titulo: "Instalación de Aires Acondicionados",
    descripcion: "Cuadrillas profesionales, protocolos de vacío profundo, brazing y puesta en marcha documentada.",
    icono: "🛠️",
    descripcionLarga:
      "Instalamos minisplits, VRF y sistemas de agua helada con cuadrillas certificadas y supervisión de ingeniería. Ejecutamos brazing con nitrógeno, vacío profundo y pruebas de fuga para que el sistema opere estable desde el día uno, con documentación fotográfica y checklist de calidad.",
    beneficios: [
      "Instalaciones limpias y protegidas contra humedad y salitre",
      "Protocolos de vacío y soldadura que prolongan la vida del compresor",
      "Puesta en marcha con parámetros de fabricante y balanceo de aire",
      "Entrega de reportes y garantía respaldada en Panamá",
    ],
    sectores: ["Residencial", "Comercial", "Proyectos e infraestructura"],
    comoTrabajamos: [
      "Planificación logística y protección de áreas sensibles",
      "Instalación de tuberías, drenajes y alimentación eléctrica",
      "Pruebas de presión, vacío profundo y carga de refrigerante",
      "Configuración de controles y entrenamiento al usuario final",
    ],
  },
  {
    slug: "mantenimiento-247",
    titulo: "Mantenimiento 24/7",
    descripcion: "Planes preventivos y correctivos con monitoreo remoto, alertas y reportes digitales en minutos.",
    icono: "⏱️",
    descripcionLarga:
      "Operamos mantenimientos preventivos y correctivos con rutas optimizadas en Ciudad de Panamá y Panamá Oeste. Incorporamos monitoreo remoto, limpieza profunda y reemplazo de consumibles críticos para evitar paros en hoteles, comercios y residencias de alta ocupación.",
    beneficios: [
      "Alertas tempranas y visitas priorizadas en menos de 4 horas",
      "Reportes con fotos, lecturas de presión y consumo",
      "Limpieza profunda de serpentines y bandejas antibacterianas",
      "Stock de repuestos rápidos para minimizar tiempos muertos",
    ],
    sectores: ["Residencial", "Comercial", "Proyectos e infraestructura"],
    comoTrabajamos: [
      "Inspección inicial y plan de mantenimiento por equipo",
      "Checklists digitales con evidencia fotográfica",
      "Monitoreo de variables críticas y ajuste de controles",
      "Revisión de eficiencia y recomendaciones de mejora",
    ],
  },
  {
    slug: "automatizacion-bms",
    titulo: "Automatización y BMS",
    descripcion: "Integración con termostatos inteligentes, gateways BACnet/Modbus y dashboards de consumo.",
    icono: "🌐",
    descripcionLarga:
      "Integramos sistemas HVAC a plataformas de control para edificios inteligentes. Conectamos chillers, VRF y ventilación a gateways BACnet/Modbus, configuramos dashboards de consumo y generamos alertas para mantenimiento predictivo y ahorro energético continuo.",
    beneficios: [
      "Telemetría en tiempo real y alarmas personalizadas",
      "Secuencias de control que reducen picos de demanda",
      "Integración con sensores de calidad de aire y accesos",
      "Reportes automáticos de consumo y confort",
    ],
    sectores: ["Residencial", "Comercial", "Proyectos e infraestructura"],
    comoTrabajamos: [
      "Evaluación de equipos y protocolos de comunicación",
      "Selección de controladores, gateways y tableros",
      "Programación de secuencias y pruebas integrales",
      "Capacitación a operaciones y soporte continuo",
    ],
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
