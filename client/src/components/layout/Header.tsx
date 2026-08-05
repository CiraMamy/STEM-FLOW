import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Menu, ArrowUpRight } from "lucide-react";
import { APP_URL, NAV_LINKS } from "@/lib/site";
import logoUrl from "@assets/WhatsApp_Image_2026-02-11_at_19.45.03_1770835532970.jpeg";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={logoUrl}
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 rounded-xl object-cover ring-1 ring-border"
        data-testid="logo-image"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-extrabold tracking-tight" data-testid="logo-text">
          <span className="text-foreground">Learn</span>
          <span className="text-gradient">X</span>
          <span className="text-foreground">Science</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            STEM Flow
          </span>
        )}
      </span>
    </span>
  );
}

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border/70 bg-background/70 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      {/* Barre de progression de lecture */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary via-chart-4 to-secondary transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className="container flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="rounded-xl" aria-label="LearnXScience, accueil">
          <Wordmark />
        </Link>

        <nav aria-label="Navigation principale" className="hidden xl:block" data-testid="nav-desktop">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1 backdrop-blur">
            {NAV_LINKS.map((link) => {
              const active = location === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative flex items-center rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`nav-link-${link.id}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden rounded-full pl-5 pr-4 sm:inline-flex" data-testid="button-cta-header">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Tester STEM FLOW
              <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="outline" size="icon" className="rounded-full" data-testid="button-menu-mobile">
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[19rem] border-l border-border/70 bg-background/95 backdrop-blur-xl">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="mt-2">
                <Wordmark />
              </div>
              <nav aria-label="Navigation mobile" className="mt-8" data-testid="nav-mobile">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const active = location === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors ${
                            active ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                          }`}
                          style={{ animation: `slide-up .4s cubic-bezier(.22,1,.36,1) ${i * 40}ms forwards`, opacity: 0 }}
                          data-testid={`nav-mobile-${link.id}`}
                        >
                          {link.label}
                          {active && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Button asChild className="mt-6 w-full rounded-full" data-testid="button-cta-mobile">
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Tester STEM FLOW
                    <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
