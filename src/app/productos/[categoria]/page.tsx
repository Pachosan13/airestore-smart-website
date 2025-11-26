import { Category, categories } from "@/data/categories";
import { ProductList } from "@/components/ProductList";
import { Metadata } from "next";

type Props = {
  params: { categoria: string };
};

export async function generateStaticParams() {
  return categories.map((category) => ({ categoria: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((cat) => cat.slug === params.categoria);
  const title = category
    ? `${category.name} en Panamá | Aire Store`
    : "Materiales HVAC Panamá | Aire Store";
  const description = category
    ? `${category.description} Precio a cotizar y entrega rápida. Especialistas en repuestos de aire acondicionado en Panamá.`
    : "Repuestos de aire acondicionado y materiales HVAC en Panamá.";

  return { title, description };
}

export default function CategoriaPage({ params }: Props) {
  const category: Category | undefined = categories.find(
    (item) => item.slug === params.categoria,
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-12">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase text-primary">Categoría</p>
        <h1 className="text-3xl font-semibold text-slate-900">
          {category?.name ?? "Materiales HVAC en Panamá"}
        </h1>
        <p className="text-lg text-slate-700">
          {category?.description ??
            "Repuestos de aire acondicionado, tubería de cobre, compresores, capacitores y materiales eléctricos disponibles en Panamá."}
        </p>
      </header>

      <ProductList categorySlug={category?.slug} />
    </div>
  );
}
