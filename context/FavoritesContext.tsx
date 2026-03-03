"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "rezept-app-favorites";

type FavoritesContextValue = {
  favoriteIds: Set<string>;
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  isReady: boolean;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function loadLocalFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveLocalFavorites(ids: Set<string>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
  } catch {
    // ignore
  }
}

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);
  const supabase = createClient();

  // Favoriten laden: aus Supabase (mit anonymer Anmeldung) oder aus localStorage
  useEffect(() => {
    if (!supabase) {
      setFavoriteIds(loadLocalFavorites());
      setIsReady(true);
      return;
    }

    const client = supabase;
    let cancelled = false;

    async function init() {
      // Zuerst vorhandene Session prüfen (z. B. nach Reload) – sonst wird bei jedem Load ein neuer Anon-User erzeugt
      const { data: { session } } = await client.auth.getSession();
      if (cancelled) return;

      if (!session?.user) {
        const { error } = await client.auth.signInAnonymously();
        if (cancelled) return;
        if (error) {
          setFavoriteIds(loadLocalFavorites());
          setIsReady(true);
          return;
        }
      }

      const { data: { user } } = await client.auth.getUser();
      if (cancelled) return;
      if (!user) {
        setFavoriteIds(loadLocalFavorites());
        setIsReady(true);
        return;
      }

      const { data, error } = await client
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", user.id);
      if (cancelled) return;
      if (error) {
        setFavoriteIds(loadLocalFavorites());
      } else {
        setFavoriteIds(new Set((data ?? []).map((r) => r.recipe_id)));
      }
      setIsReady(true);
    }

    init();
    return () => { cancelled = true; };
  }, [supabase]);

  const toggleFavorite = useCallback(
    async (id: string) => {
      if (!supabase) {
        setFavoriteIds((prev) => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          saveLocalFavorites(next);
          return next;
        });
        return;
      }

      const client = supabase;
      const { data: { user } } = await client.auth.getUser();
      if (!user) {
        setFavoriteIds((prev) => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);
          else next.add(id);
          saveLocalFavorites(next);
          return next;
        });
        return;
      }

      const isFav = favoriteIds.has(id);
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (isFav) next.delete(id);
        else next.add(id);
        return next;
      });

      if (isFav) {
        await client
          .from("favorites")
          .delete()
          .eq("user_id", user.id)
          .eq("recipe_id", id);
      } else {
        await client.from("favorites").insert({
          user_id: user.id,
          recipe_id: id,
        });
      }
    },
    [supabase, favoriteIds]
  );

  const isFavorite = useCallback(
    (id: string) => favoriteIds.has(id),
    [favoriteIds]
  );

  return (
    <FavoritesContext.Provider
      value={{ favoriteIds, toggleFavorite, isFavorite, isReady }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
