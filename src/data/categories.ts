export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "repuestos-aire-acondicionado",
    name: "Repuestos de aire acondicionado",
    description:
      "Todo lo que necesitas para mantenimiento y reparación: motores, ventiladores, tarjetas, sensores y kits de servicio certificados.",
    icon: "🧊",
  },
  {
    slug: "tuberia-de-cobre",
    name: "Tubería de cobre",
    description:
      "Tubería, codos y accesorios de cobre para instalaciones limpias y seguras de minisplit y VRF.",
    icon: "🔧",
  },
  {
    slug: "compresores",
    name: "Compresores",
    description:
      "Compresores originales y de reemplazo para sistemas residenciales, comerciales y cuartos fríos.",
    icon: "⚙️",
  },
  {
    slug: "capacitores",
    name: "Capacitores",
    description:
      "Capacitores de arranque y trabajo probados para climas de Panamá, listos para tus reparaciones urgentes.",
    icon: "🔌",
  },
  {
    slug: "material-electrico",
    name: "Material eléctrico",
    description:
      "Cables, breakers, contactores y protección para instalaciones seguras de aire acondicionado y refrigeración.",
    icon: "💡",
  },
  {
    slug: "ferreteria-hvac",
    name: "Ferretería HVAC",
    description:
      "Herramientas, soportes, bandejas, anclajes y tornillería industrial para montajes de equipos.",
    icon: "🛠️",
  },
  {
    slug: "accesorios-hvac",
    name: "Accesorios HVAC",
    description:
      "Filtros, termostatos, ductos flex, difusores y todo lo necesario para un flujo de aire limpio.",
    icon: "🎯",
  },
  {
    slug: "consumibles",
    name: "Consumibles",
    description:
      "Nitrógeno, gas refrigerante, cintas, abrazaderas y selladores para trabajos sin retrabajos.",
    icon: "📦",
  },
];
