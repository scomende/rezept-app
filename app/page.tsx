import { getRecipes } from "@/lib/recipes";
import { HomeClient } from "./HomeClient";

export default async function Home() {
  const initialRecipes = await getRecipes();
  return <HomeClient initialRecipes={initialRecipes} />;
}
