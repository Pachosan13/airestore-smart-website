import Link from "next/link";

export const metadata = {
  title: "Blog Aire Store Panamá | Consejos HVAC",
  description:
    "Artículos sobre repuestos de aire acondicionado, materiales de instalación de minisplit y tendencias HVAC en Panamá.",
};

const posts = [
  {
    slug: "materiales-instalacion-minisplit-panama",
    title: "Checklist de materiales de instalación de minisplit en Panamá",
    excerpt:
      "Tubería de cobre, capacitores, protecciones eléctricas y consumibles que todo técnico debe llevar para evitar retrasos.",
    category: "Guías técnicas",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Blog</p>
        <h1 className="text-3xl font-semibold text-slate-900">Notas rápidas para técnicos HVAC</h1>
        <p className="text-lg text-slate-700">
          Consejos prácticos para elegir repuestos de aire acondicionado en Panamá y optimizar tus instalaciones.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-semibold uppercase text-primary">{post.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
            <span className="mt-3 inline-flex text-sm font-semibold text-primary">Leer más →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
