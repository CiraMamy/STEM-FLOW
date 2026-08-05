import { Link } from "wouter";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Aurora } from "@/components/ui/aurora";
import { useSEO } from "@/hooks/use-seo";
import { NAV_LINKS } from "@/lib/site";

export default function NotFound() {
  useSEO({
    title: "Page introuvable",
    description: "Cette page n'existe pas ou a été déplacée.",
  });

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <Aurora />
      <div className="container relative text-center">
        <p className="font-display text-[clamp(5rem,18vw,11rem)] font-extrabold leading-none text-gradient">404</p>
        <h1 className="mt-2 font-display font-bold text-balance">Cette page a pris un autre chemin</h1>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground text-pretty">
          Le lien est peut-être obsolète ou l'adresse mal saisie. Voici de quoi retrouver votre route.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full px-7">
            <Link href="/">
              <ArrowLeft className="mr-1.5 h-5 w-5" aria-hidden="true" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-border/70 bg-card/50 px-7 backdrop-blur">
            <Link href="/contact">
              <Compass className="mr-1.5 h-5 w-5" aria-hidden="true" />
              Nous contacter
            </Link>
          </Button>
        </div>

        <nav aria-label="Pages principales" className="mt-12">
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
