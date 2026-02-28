import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ExternalLink } from "lucide-react";
import learnxLogo from "@assets/WhatsApp_Image_2026-02-11_at_19.45.03_1770835532970.jpeg";

const APP_URL = "https://steamflow-wxw3.onrender.com/auth";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Le Projet" },
  { href: "/application", label: "L'Application" },
  { href: "/vision", label: "Vision & Impact" },
  { href: "/equipe", label: "L'Équipe" },
  { href: "/partenariats", label: "Partenariats" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src={learnxLogo} alt="LearnXScience" className="h-10 w-auto" data-testid="logo-image" />
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight" data-testid="logo-text">
              <span className="text-primary">Learn</span><span className="text-primary font-extrabold">X</span><span className="text-secondary">Science</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-wide">STEM FLOW</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={location === link.href ? "secondary" : "ghost"}
                size="sm"
                className="text-sm font-medium"
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            <Button data-testid="button-cta-header">
              Tester STEM FLOW
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" data-testid="button-menu-mobile">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-2 mt-8" data-testid="nav-mobile">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={location === link.href ? "secondary" : "ghost"}
                    className="w-full justify-start text-base"
                    data-testid={`nav-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" data-testid="button-cta-mobile">
                    Tester STEM FLOW
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
