import { products } from "@/data/products";
import { categories } from "@/data/categories";

export function ProductList({ categorySlug }: { categorySlug?: string }) {
  const filtered = categorySlug
    ? products.filter((product) => product.categorySlug === categorySlug)
    : products;

  const categoryName = categorySlug
    ? categories.find((cat) => cat.slug === categorySlug)?.name
    : undefined;

  return (
    <div className="space-y-4">
      {filtered.map((product) => (
        <article
          key={product.id}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wide text-primary">
                {categoryName ?? categories.find((c) => c.slug === product.categorySlug)?.name}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-700">{product.shortDescription}</p>
              <p className="text-xs font-semibold text-slate-500">Precio a cotizar</p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <ul className="text-sm text-slate-600">
                {product.typicalUseCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary">
                Solicitar cotización
              </button>
            </div>
          </div>
        </article>
      ))}
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-600">No hay productos en esta categoría aún.</p>
      ) : null}
    </div>
  );
}
