"use client";

import { useFavorites } from "@/context/FavoritesContext";

type FavoriteButtonProps = { recipeId: string; className?: string };

export function FavoriteButton({ recipeId, className = "" }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(recipeId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(recipeId);
      }}
      className={`rounded-full p-2 transition-colors ${className}`}
      aria-label={active ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
      title={active ? "Aus Favoriten entfernen" : "Zu Favoriten hinzufügen"}
    >
      {active ? (
        <span className="text-red-500" aria-hidden>❤️</span>
      ) : (
        <span className="opacity-70 hover:opacity-100" aria-hidden>🤍</span>
      )}
    </button>
  );
}
