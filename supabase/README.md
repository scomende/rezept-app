# Supabase einrichten

## 1. Projekt anlegen

- [supabase.com](https://supabase.com) → New Project
- URL und Anon Key unter **Project Settings → API** kopieren

## 2. Umgebungsvariablen

`.env.local` anlegen (oder aus `.env.local.example` kopieren):

```
NEXT_PUBLIC_SUPABASE_URL=https://dein-projekt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
```

## 3. Datenbank-Schema

Im Supabase-Dashboard: **SQL Editor** → New Query.

1. Inhalt von `supabase/schema.sql` einfügen und ausführen (Tabellen + RLS).
2. Anschließend Inhalt von `supabase/seed.sql` einfügen und ausführen (Beispiel-Rezepte).

## 4. Anonyme Anmeldung für Favoriten

Unter **Authentication → Providers** den Provider **Anonymous** aktivieren, damit Favoriten pro Gerät/Browser persistent gespeichert werden.

## Verhalten

- **Ohne Supabase** (keine Env-Variablen): Rezepte kommen aus dem statischen Fallback, Favoriten werden im localStorage gespeichert.
- **Mit Supabase**: Rezepte werden aus der Tabelle `recipes` geladen, Favoriten aus der Tabelle `favorites` (pro anonymem Nutzer).
