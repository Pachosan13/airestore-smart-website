import type { Metadata } from "next";
import { blogPosts, categoriasHVAC, productosCatalogo, servicios } from "@/lib/data";
import type { Servicio } from "@/lib/data";

export const siteName = "Aire Store Panamá";
export const siteUrl = "https://airestore-smart-website.vercel.app";
export const siteAddress = "Bethania, Avenida La Paz, local G-113, Ciudad de Panamá, Panamá";
export const sitePhones = ["+507 261-8083", "+507 6030-9548"];
export const siteEmail = "info@airestorepanama.com";
export const siteHours = "Lunes a Sábado 7:00 a.m. - 6:00 p.m.";

const baseKeywords = [
  "aire acondicionado panamá",
  "repuestos hvac panamá",
  "instalación aire acondicionado",
  "HVAC Panamá",
  "mantenimiento HVAC",
  "Aire Store Panamá",
];

export const metadataBase = new URL(siteUrl);

const defaultOpenGraph = {
  title: `${siteName} | aire acondicionado panamá y repuestos HVAC`,
  description:
    "Especialistas en climatización, instalación aire acondicionado y repuestos HVAC Panamá para residencias, comercios e industria.",
  url: siteUrl,
  siteName,
  locale: "es_PA",
  type: "website" as const,
};

const defaultTwitter = {
  card: "summary_large_image" as const,
  title: `${siteName} | aire acondicionado panamá y repuestos HVAC`,
  description:
    "Soluciones HVAC Panamá: instalación aire acondicionado, mantenimiento, repuestos y automatización con respuesta inmediata.",
};

export function getHomeMetadata(): Metadata {
  return {
    metadataBase,
    title: `${siteName} | aire acondicionado panamá, instalación y mantenimiento`,
    description:
      "Aire Store Panamá diseña e instala sistemas HVAC con ingeniería, repuestos hvac panamá y atención inmediata en todo el país.",
    keywords: baseKeywords,
    alternates: { canonical: "/" },
    openGraph: defaultOpenGraph,
    twitter: defaultTwitter,
  };
}

export function getProductosMetadata(): Metadata {
  return {
    metadataBase,
    title: "Catálogo HVAC Panamá | repuestos hvac panamá y equipos",
    description:
      "Explora productos HVAC en Panamá: chillers, VRF, ventilación y repuestos hvac panamá listos para instalación aire acondicionado.",
    keywords: baseKeywords,
    alternates: { canonical: "/productos" },
    openGraph: {
      ...defaultOpenGraph,
      title: "Catálogo HVAC Panamá | repuestos hvac panamá y equipos",
      url: `${siteUrl}/productos`,
    },
    twitter: {
      ...defaultTwitter,
      title: "Catálogo HVAC Panamá | repuestos hvac panamá y equipos",
    },
  };
}

export function getCategoriaMetadata(slug: string): Metadata {
  const categoria = categoriasHVAC.find((item) => item.slug === slug);

  if (!categoria) {
    return {
      metadataBase,
      title: "Categoría HVAC no encontrada",
      description: "La categoría seleccionada no está disponible.",
    };
  }

  return {
    metadataBase,
    title: `${categoria.nombre} en Panamá | instalación aire acondicionado especializada`,
    description: categoria.descripcion,
    keywords: baseKeywords,
    alternates: { canonical: `/productos/${categoria.slug}` },
    openGraph: {
      ...defaultOpenGraph,
      title: `${categoria.nombre} en Panamá | instalación aire acondicionado especializada`,
      url: `${siteUrl}/productos/${categoria.slug}`,
    },
    twitter: {
      ...defaultTwitter,
      title: `${categoria.nombre} en Panamá | instalación aire acondicionado especializada`,
    },
  };
}

export function getServiciosMetadata(): Metadata {
  return {
    metadataBase,
    title: "Servicios HVAC Panamá | instalación aire acondicionado y mantenimiento",
    description:
      "Ingeniería, instalación aire acondicionado y mantenimiento HVAC en Panamá con repuestos hvac panamá y soporte 24/7.",
    keywords: baseKeywords,
    alternates: { canonical: "/servicios" },
    openGraph: {
      ...defaultOpenGraph,
      title: "Servicios HVAC Panamá | instalación aire acondicionado y mantenimiento",
      url: `${siteUrl}/servicios`,
    },
    twitter: {
      ...defaultTwitter,
      title: "Servicios HVAC Panamá | instalación aire acondicionado y mantenimiento",
    },
  };
}

export function getServicioMetadata(slug: string): Metadata {
  const servicio = servicios.find((item) => item.slug === slug);

  if (!servicio) {
    return {
      metadataBase,
      title: "Servicio no encontrado",
      description: "El servicio solicitado no existe.",
    };
  }

  return {
    metadataBase,
    title: `${servicio.titulo} en Panamá | aire acondicionado panamá`,
    description: servicio.descripcionLarga,
    keywords: baseKeywords,
    alternates: { canonical: `/servicios/${servicio.slug}` },
    openGraph: {
      ...defaultOpenGraph,
      title: `${servicio.titulo} en Panamá | aire acondicionado panamá`,
      url: `${siteUrl}/servicios/${servicio.slug}`,
    },
    twitter: {
      ...defaultTwitter,
      title: `${servicio.titulo} en Panamá | aire acondicionado panamá`,
    },
  };
}

export function getBlogListMetadata(): Metadata {
  return {
    metadataBase,
    title: "Blog HVAC Panamá | instalación aire acondicionado y repuestos",
    description:
      "Guías de aire acondicionado Panamá, instalación, mantenimiento y repuestos hvac panamá con recomendaciones de especialistas.",
    keywords: baseKeywords,
    alternates: { canonical: "/blog" },
    openGraph: {
      ...defaultOpenGraph,
      title: "Blog HVAC Panamá | instalación aire acondicionado y repuestos",
      url: `${siteUrl}/blog`,
    },
    twitter: {
      ...defaultTwitter,
      title: "Blog HVAC Panamá | instalación aire acondicionado y repuestos",
    },
  };
}

export function getBlogPostMetadata(slug: string): Metadata {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      metadataBase,
      title: "Artículo no encontrado",
      description: "El artículo solicitado no existe.",
    };
  }

  return {
    metadataBase,
    title: `${post.titulo} | Blog Aire acondicionado Panamá`,
    description: post.resumen,
    keywords: baseKeywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      ...defaultOpenGraph,
      title: `${post.titulo} | Blog Aire acondicionado Panamá`,
      url: `${siteUrl}/blog/${post.slug}`,
    },
    twitter: {
      ...defaultTwitter,
      title: `${post.titulo} | Blog Aire acondicionado Panamá`,
    },
  };
}

export function getContactoMetadata(): Metadata {
  return {
    metadataBase,
    title: "Contacto Aire acondicionado Panamá | Aire Store",
    description:
      "Cotiza instalación aire acondicionado, mantenimiento HVAC y repuestos hvac panamá con atención inmediata en Ciudad de Panamá.",
    keywords: baseKeywords,
    alternates: { canonical: "/contacto" },
    openGraph: {
      ...defaultOpenGraph,
      title: "Contacto Aire acondicionado Panamá | Aire Store",
      url: `${siteUrl}/contacto`,
    },
    twitter: {
      ...defaultTwitter,
      title: "Contacto Aire acondicionado Panamá | Aire Store",
    },
  };
}

export function getFaqMetadata(): Metadata {
  return {
    metadataBase,
    title: "Preguntas frecuentes HVAC Panamá | instalación aire acondicionado",
    description:
      "Resolvemos dudas sobre instalación aire acondicionado, mantenimiento y repuestos hvac panamá para hogares y empresas.",
    keywords: baseKeywords,
    alternates: { canonical: "/faq" },
    openGraph: {
      ...defaultOpenGraph,
      title: "Preguntas frecuentes HVAC Panamá | instalación aire acondicionado",
      url: `${siteUrl}/faq`,
    },
    twitter: {
      ...defaultTwitter,
      title: "Preguntas frecuentes HVAC Panamá | instalación aire acondicionado",
    },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    telephone: sitePhones,
    email: siteEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteAddress,
      addressLocality: "Ciudad de Panamá",
      addressCountry: "PA",
    },
    openingHours: siteHours,
    areaServed: "Panamá",
    sameAs: ["https://www.facebook.com", "https://www.instagram.com"],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildProductsJsonLd(products = productosCatalogo) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((producto, index) => ({
      "@type": "Product",
      position: index + 1,
      name: producto.nombre,
      description: producto.resumen,
      category: producto.categoria,
      brand: producto.marca,
      sku: producto.id,
      offers: producto.precio
        ? {
            "@type": "Offer",
            priceCurrency: "USD",
            price: producto.precio,
            availability: "https://schema.org/InStock",
            url: `${siteUrl}/productos/${producto.categoria}`,
          }
        : undefined,
    })),
  };
}

export function buildServiceJsonLd(entries: Servicio | Servicio[] = servicios) {
  const list = Array.isArray(entries) ? entries : [entries];

  return list.length === 1
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: list[0].titulo,
        description: list[0].descripcionLarga,
        areaServed: "Panamá",
        provider: {
          "@type": "LocalBusiness",
          name: siteName,
          url: siteUrl,
        },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${siteName} - Servicios HVAC`,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios HVAC",
          itemListElement: list.map((servicio) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: servicio.titulo,
              description: servicio.descripcion,
            },
          })),
        },
      };
}

export function buildBlogPostingJsonLd(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.resumen,
    datePublished: post.fecha,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
