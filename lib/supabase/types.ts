export type RecipeRow = {
  id: string;
  title: string;
  description: string;
  category: string;
  prep_time_minutes: number;
  cook_time_minutes: number;
  servings: number;
  ingredients: string[];
  steps: string[];
  image: string | null;
  created_at?: string;
};

export type FavoriteRow = {
  user_id: string;
  recipe_id: string;
  created_at?: string;
};
