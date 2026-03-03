# Supabase einrichten – Schritt-für-Schritt (ab Punkt 2)

---

## Schritt 2: Umgebungsvariablen anlegen

### 2.1 Projekt-URL und Anon Key in Supabase holen

1. Öffne [https://supabase.com/dashboard](https://supabase.com/dashboard) und melde dich an.
2. Wähle dein Projekt (oder lege zuerst ein neues an).
3. Links in der Seitenleiste auf **Project Settings** (Zahnrad-Symbol) klicken.
4. Unter **Project Settings** den Eintrag **API** anklicken.
5. Unter **Project URL** die URL kopieren (z. B. `https://abcdefgh.supabase.co`).
6. Unter **Project API keys** den Key **anon** **public** kopieren (nicht den **service_role**).

### 2.2 `.env.local` im Projekt anlegen

1. Im Projektordner die Datei `.env.local` erstellen (gleiche Ebene wie `package.json`).
2. Folgenden Inhalt einfügen und die Platzhalter ersetzen:

```env
NEXT_PUBLIC_SUPABASE_URL=https://dein-projekt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
```

- Ersetze `https://dein-projekt.supabase.co` durch deine **Project URL** aus Schritt 2.1.
- Ersetze `dein-anon-key` durch den **anon public** Key aus Schritt 2.1.

3. Datei speichern.
4. Dev-Server neu starten (im Terminal `Ctrl+C`, dann `npm run dev`), damit die neuen Variablen geladen werden.

---

## Schritt 3: Datenbank-Schema und Beispieldaten

### 3.1 Schema ausführen (Tabellen anlegen)

1. Im Supabase-Dashboard links **SQL Editor** anklicken.
2. Auf **New query** klicken.
3. Die Projektdatei `supabase/schema.sql` öffnen und den **gesamten Inhalt** kopieren.
4. Den kopierten Inhalt in das Eingabefeld des SQL Editors einfügen.
5. Unten auf **Run** (oder Strg+Enter) klicken.
6. Prüfen: Unten sollte „Success. No rows returned“ o. Ä. erscheinen.

### 3.2 Beispieldaten (Rezepte) einfügen

1. Im SQL Editor erneut **New query** anklicken (oder das Eingabefeld leeren).
2. Die Projektdatei `supabase/seed.sql` öffnen und den **gesamten Inhalt** kopieren.
3. Den kopierten Inhalt in das Eingabefeld einfügen.
4. Auf **Run** klicken.
5. Prüfen: Es sollte eine Meldung wie „Success. 6 rows inserted“ (oder ähnlich) erscheinen.

### 3.3 Kontrolle

1. Links in der Seitenleiste **Table Editor** anklicken.
2. In der Liste die Tabelle **recipes** auswählen – dort sollten 6 Rezepte stehen.
3. Die Tabelle **favorites** auswählen – sie kann leer sein; Einträge kommen, sobald du in der App Favoriten setzt.

---

## Schritt 4: Anonyme Anmeldung für Favoriten aktivieren

1. Im Supabase-Dashboard links **Authentication** anklicken.
2. Den Tab **Providers** auswählen.
3. In der Liste den Eintrag **Anonymous** finden.
4. Auf **Anonymous** klicken, um die Einstellungen zu öffnen.
5. Den Schalter **Enable Anonymous Sign-Ins** auf **On** stellen.
6. Mit **Save** speichern.

Damit können Favoriten pro Browser/Gerät ohne E-Mail-Anmeldung in Supabase gespeichert werden.

---

## Schritt 5: App testen

1. Dev-Server starten: im Projektordner `npm run dev`.
2. Im Browser [http://localhost:3000](http://localhost:3000) öffnen.
3. Prüfen:
   - Auf der Startseite werden die 6 Rezepte aus Supabase angezeigt.
   - Ein Rezept öffnen, Favoriten-Button (Herz) klicken – das Herz wird rot.
   - Seite neu laden – der Favorit bleibt gespeichert (persistent über Supabase).
   - Filter **Nur Favoriten** aktivieren – nur die markierten Rezepte werden angezeigt.

---

## Kurz-Checkliste

- [ ] Schritt 2: `.env.local` mit `NEXT_PUBLIC_SUPABASE_URL` und `NEXT_PUBLIC_SUPABASE_ANON_KEY` angelegt und Dev-Server neu gestartet
- [ ] Schritt 3.1: `supabase/schema.sql` im SQL Editor ausgeführt
- [ ] Schritt 3.2: `supabase/seed.sql` im SQL Editor ausgeführt
- [ ] Schritt 4: Anonymous Sign-Ins unter Authentication → Providers aktiviert
- [ ] Schritt 5: Rezepte und Favoriten in der App getestet
