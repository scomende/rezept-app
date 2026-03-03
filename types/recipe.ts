export type Recipe = {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  ingredients: string[];
  steps: string[];
  image?: string;
};

export type RecipeCategory =
  | "Hauptgericht"
  | "Suppe"
  | "Salat"
  | "Dessert"
  | "Frühstück"
  | "Snack"
  | "Getränk";
