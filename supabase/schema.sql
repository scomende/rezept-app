-- Rezepte-Tabelle
create table if not exists public.recipes (
  id text primary key,
  title text not null,
  description text not null,
  category text not null,
  prep_time_minutes int not null default 0,
  cook_time_minutes int not null default 0,
  servings int not null default 1,
  ingredients jsonb not null default '[]',
  steps jsonb not null default '[]',
  image text,
  created_at timestamptz not null default now()
);

-- Lese-Zugriff für alle (anon)
alter table public.recipes enable row level security;
create policy "Rezepte sind öffentlich lesbar"
  on public.recipes for select
  using (true);
-- Einfügen erlauben (für Seed und spätere Erweiterung)
create policy "Rezepte einfügen erlauben"
  on public.recipes for insert
  with check (true);

-- Favoriten-Tabelle (user_id von Supabase Auth, z. B. anonym)
create table if not exists public.favorites (
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id text not null references public.recipes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

alter table public.favorites enable row level security;
create policy "Nutzer sehen nur eigene Favoriten"
  on public.favorites for select
  using (auth.uid() = user_id);
create policy "Nutzer können eigene Favoriten anlegen"
  on public.favorites for insert
  with check (auth.uid() = user_id);
create policy "Nutzer können eigene Favoriten löschen"
  on public.favorites for delete
  using (auth.uid() = user_id);

-- Index für Abfragen
create index if not exists idx_recipes_category on public.recipes(category);
create index if not exists idx_favorites_user on public.favorites(user_id);
