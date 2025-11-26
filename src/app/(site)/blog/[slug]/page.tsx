import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: `${post.titulo} | Blog HVAC Panamá`,
    description: post.resumen,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8">
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
