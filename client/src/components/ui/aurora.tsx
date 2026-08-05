/**
 * Fond decoratif : degrades flous animes + grille technique.
 * Purement visuel -> aria-hidden.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
      <div className="absolute -top-24 right-[-10%] h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[110px] animate-aurora" />
      <div
        className="absolute bottom-[-20%] left-[-8%] h-[34rem] w-[34rem] rounded-full bg-secondary/25 blur-[110px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora"
        style={{ animationDelay: "-14s" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

/** Bande lumineuse fine, utilisee comme separateur de sections. */
export function GlowDivider() {
  return (
    <div aria-hidden="true" className="relative h-px w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
