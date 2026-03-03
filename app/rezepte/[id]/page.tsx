import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeById } from "@/data/recipes";

type Props = { params: Promise<{ id: string }> };

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) notFound();

  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            ← Zurück zur Übersicht
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <article>
          {recipe.image && (
            <div className="rounded-2xl overflow-hidden mb-8 border border-[var(--border)]">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={672}
                height={380}
                className="w-full h-64 sm:h-80 object-cover"
                priority
              />
            </div>
          )}
          <span className="text-sm font-medium uppercase tracking-wider text-[var(--muted)]">
            {recipe.category}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)]">
            {recipe.title}
          </h1>
          <p className="mt-3 text-lg text-[var(--muted)]">
            {recipe.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <span>⏱ Vorbereitung: {recipe.prepTimeMinutes} Min.</span>
            <span>🍳 Kochen: {recipe.cookTimeMinutes} Min.</span>
            <span>⏱ Gesamt: {totalMinutes} Min.</span>
            <span>👥 {recipe.servings} Portionen</span>
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
              Zutaten
            </h2>
            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[var(--foreground)]"
                >
                  <span className="text-[var(--accent)] mt-0.5">•</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-2">
              Zubereitung
            </h2>
            <ol className="mt-4 space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="text-[var(--foreground)] pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </main>
    </div>
  );
}
