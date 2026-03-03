import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/types/recipe";

type RecipeCardProps = { recipe: Recipe };

export function RecipeCard({ recipe }: RecipeCardProps) {
  const totalMinutes = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <Link
      href={`/rezepte/${recipe.id}`}
      className="group block rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--accent-soft)] transition-all duration-200"
    >
      <div className="h-36 bg-gradient-to-br from-[var(--accent-soft)]/30 to-[var(--accent)]/20 flex items-center justify-center overflow-hidden">
        {recipe.image ? (
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={400}
            height={144}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-5xl opacity-60 group-hover:scale-110 transition-transform">
            🍳
          </span>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          {recipe.category}
        </span>
        <h2 className="mt-1 text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
          {recipe.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
          {recipe.description}
        </p>
        <div className="mt-4 flex gap-4 text-xs text-[var(--muted)]">
          <span>⏱ {totalMinutes} Min.</span>
          <span>👥 {recipe.servings} Port.</span>
        </div>
      </div>
    </Link>
  );
}
