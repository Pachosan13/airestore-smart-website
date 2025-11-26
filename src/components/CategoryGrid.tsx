import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryGrid({ showDescription = true }: { showDescription?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/productos/${category.slug}`}
          className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{category.icon}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary">
                  {category.name}
                </h3>
                <span className="text-xs font-semibold uppercase text-primary">Ver</span>
              </div>
              {showDescription ? (
                <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              ) : null}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
