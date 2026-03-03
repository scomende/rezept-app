import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-[var(--foreground)]">
        Rezept nicht gefunden
      </h1>
      <p className="text-[var(--muted)] mt-2 text-center">
        Das Rezept existiert nicht oder wurde entfernt.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-xl bg-[var(--accent)] text-white px-5 py-3 font-medium hover:opacity-90 transition-opacity"
      >
        Zur Übersicht
      </Link>
    </div>
  );
}
