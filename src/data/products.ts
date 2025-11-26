export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  categorySlug: string;
  typicalUseCases: string[];
  imageUrl?: string;
};

export const products: Product[] = [
  {
    id: "compresor-mitsubishi-36k",
    name: "Compresor scroll 36K BTU Mitsubishi",
    shortDescription:
      "Compresor de alta eficiencia para sistemas residenciales y ligeros comerciales, compatible con R410A.",
    categorySlug: "compresores",
    typicalUseCases: [
      "Reemplazo de compresores quemados",
      "Instalaciones nuevas con VRF ligero",
      "Proyectos de retrofit en oficinas",
    ],
  },
  {
    id: "compresor-copeland-15",
    name: "Compresor Copeland 1.5 TR",
    shortDescription:
      "Modelo probado en cuartos fríos y cámaras de conservación, listo para servicio intensivo.",
    categorySlug: "compresores",
    typicalUseCases: [
      "Cuartos fríos de supermercados",
      "Reemplazo en split comercial",
      "Mantenimiento preventivo programado",
    ],
  },
  {
    id: "cobre-rl-38",
    name: "Tubería de cobre 3/8\"",
    shortDescription:
      "Rollo de cobre deshidratado, ideal para líneas de succión en minisplit hasta 24K BTU.",
    categorySlug: "tuberia-de-cobre",
    typicalUseCases: ["Instalación de minisplit", "Extensiones de línea frigorífica", "Proyectos residenciales"],
  },
  {
    id: "cobre-rl-58",
    name: "Tubería de cobre 5/8\"",
    shortDescription:
      "Cobre rígido para líneas de descarga, cumple normas ASTM B280.",
    categorySlug: "tuberia-de-cobre",
    typicalUseCases: ["Sistemas VRF", "Cámara fría", "Instalaciones de alto tonelaje"],
  },
  {
    id: "capacitor-45-5",
    name: "Capacitor 45 + 5 µF 440V",
    shortDescription:
      "Capacitor dual para motores de ventilador y compresor, carcasa metálica anticorrosión.",
    categorySlug: "capacitores",
    typicalUseCases: ["Reparación rápida de minisplit", "Mantenimiento preventivo", "Stock para emergencias"],
  },
  {
    id: "capacitor-35",
    name: "Capacitor de trabajo 35 µF 440V",
    shortDescription:
      "Opción compacta para motores de abanico, probado en climas tropicales.",
    categorySlug: "capacitores",
    typicalUseCases: ["Repuestos de abanicos", "Corrección de arranque", "Servicios 24/7"],
  },
  {
    id: "tarjeta-universal",
    name: "Tarjeta electrónica universal para minisplit",
    shortDescription:
      "Incluye sensores y arneses, lista para adaptar en múltiples marcas.",
    categorySlug: "repuestos-aire-acondicionado",
    typicalUseCases: ["Reparaciones rápidas", "Laboratorios de servicio", "Backups para emergencias"],
  },
  {
    id: "motor-ventilador-18k",
    name: "Motor de ventilador 18K BTU",
    shortDescription:
      "Motor inverter balanceado, reduce vibraciones en unidades de pared.",
    categorySlug: "repuestos-aire-acondicionado",
    typicalUseCases: ["Servicios de garantía", "Sustitución en campo", "Stock de técnicos móviles"],
  },
  {
    id: "breaker-2p-20a",
    name: "Breaker 2 polos 20A",
    shortDescription:
      "Protección confiable para minisplit y equipos residenciales con curva térmica estable.",
    categorySlug: "material-electrico",
    typicalUseCases: ["Tableros de apartamentos", "Reemplazo preventivo", "Cumplimiento de normas locales"],
  },
  {
    id: "contacto-3p-40a",
    name: "Contactor 3 polos 40A",
    shortDescription:
      "Bobina 220V, contactos de plata y certificación UL para aplicaciones HVAC.",
    categorySlug: "material-electrico",
    typicalUseCases: ["Unidades paquete", "Sistemas de bombeo", "Chillers livianos"],
  },
  {
    id: "filtro-plegable-1",
    name: "Filtro plisado 20x20x2 MERV 8",
    shortDescription:
      "Mejora la calidad de aire interior y protege serpentines en oficinas y locales.",
    categorySlug: "accesorios-hvac",
    typicalUseCases: ["Oficinas en Ciudad de Panamá", "Locales comerciales", "Mantenimiento preventivo"],
  },
  {
    id: "consumible-r410",
    name: "Refrigerante R410A cilindro 25 lb",
    shortDescription:
      "Gas refrigerante listo para uso, trazabilidad y válvula certificada.",
    categorySlug: "consumibles",
    typicalUseCases: ["Recarga de minisplit", "Proyectos residenciales", "Stock para contratos de mantenimiento"],
  },
  {
    id: "ferreteria-soporte-l",
    name: "Soporte en L galvanizado",
    shortDescription:
      "Soportes reforzados para condensadoras, incluyen tornillería anticorrosiva.",
    categorySlug: "ferreteria-hvac",
    typicalUseCases: ["Instalación en fachadas", "Cuartos de máquinas", "Montaje de paquetes"],
  },
  {
    id: "bandeja-ducto",
    name: "Bandeja portacable tipo malla",
    shortDescription:
      "Gestión limpia de cableado y drenajes para cuartos de equipos.",
    categorySlug: "ferreteria-hvac",
    typicalUseCases: ["Data centers", "Obras comerciales", "Hospitalidad"],
  },
  {
    id: "kit-limpieza-evap",
    name: "Kit de limpieza para evaporadoras",
    shortDescription:
      "Incluye funda, químicos aprobados y cepillos para servicios en sitio.",
    categorySlug: "accesorios-hvac",
    typicalUseCases: ["Planes de mantenimiento", "Servicios express", "Mejora de calidad de aire"],
  },
];
