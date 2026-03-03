import type { Recipe } from "@/types/recipe";
import { createClient } from "@/lib/supabase/server";
import { mapRowToRecipe } from "@/lib/supabase/mappers";
import type { RecipeRow } from "@/lib/supabase/types";
import { recipes as staticRecipes } from "@/data/recipes";

export const categories = [
  "Hauptgericht",
  "Suppe",
  "Salat",
  "Dessert",
  "Frühstück",
  "Snack",
  "Getränk",
] as const;

/** Rezepte aus Supabase laden; bei Fehler oder leerer Tabelle Fallback auf statische Daten. */
export async function getRecipes(): Promise<Recipe[]> {
  const supabase = await createClient();
  if (!supabase) return staticRecipes;
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .order("id");
  if (error || !data || data.length === 0) return staticRecipes;
  return (data as RecipeRow[]).map(mapRowToRecipe);
}

/** Ein Rezept nach ID aus Supabase laden; Fallback auf statische Daten. */
export async function getRecipeById(id: string): Promise<Recipe | null> {
  const supabase = await createClient();
  if (!supabase) {
    return staticRecipes.find((r) => r.id === id) ?? null;
  }
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) {
    return staticRecipes.find((r) => r.id === id) ?? null;
  }
  return mapRowToRecipe(data as RecipeRow);
}
