import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { buildBlogPostingJsonLd, buildBreadcrumbJsonLd, getBlogPostMetadata, siteUrl } from "@/lib/seo";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return getBlogPostMetadata(params.slug);
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postJsonLd = buildBlogPostingJsonLd(post.slug);
  const breadcrumbsJsonLd = buildBreadcrumbJsonLd([
    { name: "Inicio", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: post.titulo, url: `${siteUrl}/blog/${post.slug}` },
  ]);

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([postJsonLd, breadcrumbsJsonLd].filter(Boolean)),
        }}
      />
      <Link href="/blog" className="text-sm font-semibold text-blue-700">
        ← Volver al blog
      </Link>
      <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase text-blue-700">{post.fecha}</p>
        <h1 className="text-3xl font-semibold text-slate-900">{post.titulo}</h1>
        <p className="text-slate-600">{post.resumen}</p>
        <div className="mt-6 space-y-4 text-slate-700">
          <p>{post.contenido}</p>
          <p>
            Atendemos proyectos en Ciudad de Panamá, Panamá Oeste y el interior. Solicita una visita técnica y recibe tu
            propuesta en menos de 24 horas.
          </p>
        </div>
      </article>
    </div>
  );
}
