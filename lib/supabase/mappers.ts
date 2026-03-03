import type { Recipe } from "@/types/recipe";
import type { RecipeRow } from "./types";

export function mapRowToRecipe(row: RecipeRow): Recipe {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    category: row.category,
    prepTimeMinutes: row.prep_time_minutes,
    cookTimeMinutes: row.cook_time_minutes,
    servings: row.servings,
    ingredients: Array.isArray(row.ingredients) ? row.ingredients : [],
    steps: Array.isArray(row.steps) ? row.steps : [],
    image: row.image ?? undefined,
  };
}
