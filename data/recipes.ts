import type { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    description:
      "Klassische italienische Pasta mit cremiger Ei-Käse-Sauce und knusprigem Speck.",
    category: "Hauptgericht",
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    ingredients: [
      "400 g Spaghetti",
      "200 g Guanciale oder Pancetta",
      "4 Eigelb + 2 ganze Eier",
      "100 g Pecorino Romano, gerieben",
      "Schwarzer Pfeffer",
      "Salz für das Nudelwasser",
    ],
    steps: [
      "Nudelwasser mit Salz aufkochen, Spaghetti al dente kochen.",
      "Guanciale in Streifen schneiden und in einer Pfanne ohne Fett knusprig anbraten.",
      "Eier mit Pecorino und viel Pfeffer verquirlen.",
      "Nudeln abgießen, etwas Nudelwasser aufheben. Nudeln in die Pfanne zum Speck geben, vom Herd nehmen.",
      "Ei-Mix unterrühren, bei Bedarf mit Nudelwasser verdünnen. Sofort servieren.",
    ],
  },
  {
    id: "2",
    title: "Kürbissuppe mit Ingwer",
    description:
      "Cremige Suppe mit Hokkaido-Kürbis und frischem Ingwer – perfekt für den Herbst.",
    category: "Suppe",
    prepTimeMinutes: 20,
    cookTimeMinutes: 25,
    servings: 4,
    ingredients: [
      "1 Hokkaido-Kürbis (ca. 800 g)",
      "1 Zwiebel",
      "2 cm frischer Ingwer",
      "500 ml Gemüsebrühe",
      "200 ml Sahne",
      "Olivenöl, Salz, Pfeffer, Muskat",
      "Kürbiskerne und Kräuter zum Garnieren",
    ],
    steps: [
      "Kürbis waschen, entkernen und in Würfel schneiden (mit Schale).",
      "Zwiebel und Ingwer fein hacken, in Öl andünsten.",
      "Kürbis zugeben, mit Brühe ablöschen und 20 Min. weich kochen.",
      "Pürieren, Sahne einrühren, mit Salz, Pfeffer und Muskat abschmecken.",
      "Mit Kürbiskernen und Kräutern servieren.",
    ],
  },
  {
    id: "3",
    title: "Caesar Salad",
    description:
      "Römischer Salat mit knusprigen Croutons, Parmesan und cremigem Dressing.",
    category: "Salat",
    prepTimeMinutes: 25,
    cookTimeMinutes: 10,
    servings: 2,
    ingredients: [
      "2 Romana-Salate",
      "100 g Parmesan",
      "2 Scheiben Weißbrot für Croutons",
      "2 Anchovisfilets",
      "1 Knoblauchzehe",
      "1 Eigelb",
      "Zitronensaft, Olivenöl, Senf",
      "Salz, Pfeffer",
    ],
    steps: [
      "Brot in Würfel schneiden, in Öl mit Knoblauch goldbraun rösten.",
      "Anchovis und Knoblauch fein hacken, mit Eigelb, Senf und Zitrone verrühren, Öl einrühren.",
      "Salat waschen, trocken schleudern und in Stücke schneiden.",
      "Salat mit Dressing mischen, Croutons und Parmesanflocken darauf geben.",
    ],
  },
  {
    id: "4",
    title: "Tiramisu",
    description:
      "Italienischer Klassiker mit Mascarpone, Espresso und Kakao.",
    category: "Dessert",
    prepTimeMinutes: 30,
    cookTimeMinutes: 0,
    servings: 6,
    ingredients: [
      "500 g Mascarpone",
      "4 Eier",
      "80 g Zucker",
      "200 ml starker Espresso (abgekühlt)",
      "200 g Löffelbiskuits",
      "Kakao zum Bestäuben",
      "Optional: Amaretto",
    ],
    steps: [
      "Eigelb mit Zucker schaumig schlagen, Mascarpone unterrühren.",
      "Eiweiß steif schlagen und unter die Mascarpone-Masse heben.",
      "Löffelbiskuits kurz in Espresso (evtl. mit Amaretto) tunken.",
      "Schichtweise Biskuits und Creme in eine Form füllen, mit Kakao bestäuben.",
      "Mindestens 4 Stunden kalt stellen.",
    ],
  },
  {
    id: "5",
    title: "Haferflocken-Pfannkuchen",
    description:
      "Sättigende Pfannkuchen mit Haferflocken – ideal zum Frühstück.",
    category: "Frühstück",
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    ingredients: [
      "100 g Haferflocken",
      "1 Banane",
      "2 Eier",
      "50 ml Milch",
      "1 TL Backpulver",
      "Prise Zimt",
      "Butter zum Braten",
      "Ahornsirup oder Honig",
    ],
    steps: [
      "Haferflocken grob mahlen, mit Banane, Eiern, Milch, Backpulver und Zimt mixen.",
      "Butter in einer Pfanne erhitzen, Portionen Teig goldbraun backen.",
      "Mit Ahornsirup oder Honig servieren.",
    ],
  },
  {
    id: "6",
    title: "Hummus",
    description:
      "Cremiger Kichererbsen-Dip mit Tahini, Zitrone und Knoblauch.",
    category: "Snack",
    prepTimeMinutes: 15,
    cookTimeMinutes: 0,
    servings: 4,
    ingredients: [
      "400 g Kichererbsen (Dose, abgetropft)",
      "2 EL Tahini",
      "2 Knoblauchzehen",
      "Saft von 1 Zitrone",
      "3 EL Olivenöl",
      "Kümmel, Salz, Pfeffer",
      "Paprikapulver und Olivenöl zum Servieren",
    ],
    steps: [
      "Kichererbsen mit Tahini, Knoblauch, Zitronensaft und Öl im Mixer pürieren.",
      "Mit Kümmel, Salz und Pfeffer abschmecken.",
      "Mit Paprikapulver und etwas Öl anrichten, mit Fladenbrot oder Gemüsesticks servieren.",
    ],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter((r) => r.category === category);
}

export const categories = [
  "Hauptgericht",
  "Suppe",
  "Salat",
  "Dessert",
  "Frühstück",
  "Snack",
  "Getränk",
] as const;
