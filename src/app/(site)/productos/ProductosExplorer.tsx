"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Categoria, Producto } from "@/lib/data";

function formatCurrency(precio?: number) {
  if (!precio) return "A cotizar";
  return precio.toLocaleString("es-PA", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

function resolveCategoriaNombre(categorias: Categoria[], slug: string) {
  return categorias.find((cat) => cat.slug === slug)?.nombre ?? slug;
}

function productosFiltrados(
  productos: Producto[],
  filtros: { categoria: string; marca: string; tipo: string },
): Producto[] {
  return productos.filter((producto) => {
    const matchCategoria = filtros.categoria === "todas" || producto.categoria === filtros.categoria;
    const matchMarca = filtros.marca === "todas" || producto.marca === filtros.marca;
    const matchTipo = filtros.tipo === "todas" || producto.tipo === filtros.tipo;
    return matchCategoria && matchMarca && matchTipo;
  });
}

function obtenerOpcionesUnicas(productos: Producto[], campo: "marca" | "tipo") {
  return Array.from(new Set(productos.map((producto) => producto[campo]).filter(Boolean)));
}

export function ProductosExplorer({ productos, categorias }: { productos: Producto[]; categorias: Categoria[] }) {
  const [filtros, setFiltros] = useState({ categoria: "todas", marca: "todas", tipo: "todas" });

  const marcas = useMemo(() => obtenerOpcionesUnicas(productos, "marca"), [productos]);
  const tipos = useMemo(() => obtenerOpcionesUnicas(productos, "tipo"), [productos]);
  const listado = useMemo(() => productosFiltrados(productos, filtros), [productos, filtros]);

  return (
    <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
      <aside className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Filtros</h2>
          <p className="text-sm text-slate-600">Refina por familia, fabricante o tecnología.</p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-800">Categoría</label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFiltros((prev) => ({ ...prev, categoria: "todas" }))}
              className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                filtros.categoria === "todas"
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              Todas
            </button>
            {categorias.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setFiltros((prev) => ({ ...prev, categoria: cat.slug }))}
                className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                  filtros.categoria === cat.slug
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-700 hover:border-slate-300"
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="marca-filter">
            Marca
          </label>
          <select
            id="marca-filter"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-blue-400 focus:outline-none"
            value={filtros.marca}
            onChange={(event) => setFiltros((prev) => ({ ...prev, marca: event.target.value }))}
          >
            <option value="todas">Todas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-800" htmlFor="tipo-filter">
            Tipo
          </label>
          <select
            id="tipo-filter"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 focus:border-blue-400 focus:outline-none"
            value={filtros.tipo}
            onChange={(event) => setFiltros((prev) => ({ ...prev, tipo: event.target.value }))}
          >
            <option value="todas">Todos</option>
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
      </aside>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Catálogo curado</p>
            <p className="text-base text-slate-700">{listado.length} soluciones listas para cotizar.</p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
          >
            Solicitar catálogo completo
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {listado.map((producto) => (
            <article key={producto.id} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase text-blue-700">
                  <span>{resolveCategoriaNombre(categorias, producto.categoria)}</span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] text-blue-700">{producto.tipo}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{producto.nombre}</h3>
                <p className="text-sm text-slate-600">{producto.resumen}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">{producto.marca}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">{producto.capacidad}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold">{formatCurrency(producto.precio)}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                  {producto.caracteristicas.map((caracteristica) => (
                    <span key={caracteristica} className="rounded-full bg-slate-100 px-3 py-1 font-semibold">
                      {caracteristica}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/productos/${producto.categoria}`}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                >
                  Ver detalles
                </Link>
                <Link
                  href={`/contacto?producto=${encodeURIComponent(producto.nombre)}`}
                  className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Cotizar
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
