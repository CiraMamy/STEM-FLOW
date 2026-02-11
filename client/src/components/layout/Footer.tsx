import { Link } from "wouter";
import { Beaker, Mail, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const footerLinks = {
  navigation: [
    { href: "/projet", label: "Le Projet" },
    { href: "/application", label: "L'Application" },
    { href: "/vision", label: "Vision & Impact" },
    { href: "/equipe", label: "L'\u00c9quipe" },
  ],
  ressources: [
    { href: "/partenariats", label: "Partenariats" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" data-testid="footer-logo">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Beaker className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight">
                  Learn<span className="text-primary">X</span>Science
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wide">STEM FLOW</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              LearnXScience d\u00e9veloppe des syst\u00e8mes d'intelligence artificielle appliqu\u00e9s \u00e0 l'\u00e9ducation. 
              Notre premi\u00e8re application, STEM FLOW, est un r\u00e9seau social \u00e9ducatif qui rend les sciences accessibles, 
              interactives et mesurables.
            </p>
            <p className="text-lg font-semibold text-primary">
              Scroll. Learn. Level Up.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="mt-2" data-testid="footer-button-app">
                Tester STEM FLOW
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ressources</h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline transition-colors"
                    data-testid={`footer-ressource-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline transition-colors inline-flex items-center gap-1"
                  data-testid="footer-ressource-app"
                >
                  Acc\u00e9der \u00e0 STEM FLOW
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="mailto:contact@learnxscience.com"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                data-testid="social-email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              contact@learnxscience.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LearnXScience. Tous droits r\u00e9serv\u00e9s.</p>
          <p>Construire les technologies \u00e9ducatives intelligentes de demain</p>
        </div>
      </div>
    </footer>
  );
}
