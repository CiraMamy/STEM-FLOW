import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Wouter ne reinitialise pas le scroll entre les routes.
 * On remonte en haut a chaque navigation, en respectant prefers-reduced-motion.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    // On redonne le focus au contenu principal pour les lecteurs d'ecran.
    document.getElementById("contenu")?.focus({ preventScroll: true });
  }, [location]);

  return null;
}
