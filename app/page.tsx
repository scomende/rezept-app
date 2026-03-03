"use client";

import { useState, useMemo } from "react";
import { RecipeCard } from "@/components/RecipeCard";
import { recipes, categories } from "@/data/recipes";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("");

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        r.ingredients.some((i) =>
          i.toLowerCase().includes(search.toLowerCase())
        );
      const matchCategory = !category || r.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Rezept-App
          </h1>
          <p className="text-blue-900 dark:text-blue-300 mt-0.5">
            Rezepte durchstöbern und nachkochen
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="search"
            placeholder="Rezept, Zutat … suchen"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            aria-label="Suche"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] min-w-[180px]"
            aria-label="Kategorie"
          >
            <option value="">Alle Kategorien</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[var(--muted)] py-12">
            Keine Rezepte gefunden. Versuche andere Suchbegriffe oder eine andere
            Kategorie.
          </p>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
