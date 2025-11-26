import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { getBlogListMetadata, siteUrl } from "@/lib/seo";

export const metadata = getBlogListMetadata();

export default function BlogPage() {
  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Aire Store Panamá",
    description:
      "Contenido sobre aire acondicionado Panamá, instalación aire acondicionado, repuestos hvac panamá y tendencias HVAC.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.titulo,
      description: post.resumen,
      datePublished: post.fecha,
      url: `${siteUrl}/blog/${post.slug}`,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-blue-700">Blog</p>
        <h1 className="text-3xl font-semibold text-slate-900">Insights HVAC para Panamá</h1>
        <p className="max-w-3xl text-slate-600">Tendencias, guías y casos de éxito en climatización y calidad de aire.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase text-blue-700">{post.fecha}</p>
            <p className="text-lg font-semibold text-slate-900">{post.titulo}</p>
            <p className="text-sm text-slate-600">{post.resumen}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-blue-700">Leer artículo →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
