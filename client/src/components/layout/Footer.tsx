import { Link } from "wouter";
import { Zap, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/projet", label: "Le Projet" },
    { href: "/application", label: "L'Application" },
    { href: "/vision", label: "Vision & Impact" },
    { href: "/equipe", label: "L'Équipe" },
  ],
  legal: [
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
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                STEM<span className="text-primary">FLOW</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformer le scroll en savoir, la curiosité en compétence et le temps en progression.
            </p>
            <p className="text-lg font-semibold text-primary">
              Scroll. Learn. Level Up.
            </p>
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
              {footerLinks.legal.map((link) => (
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              <a
                href="mailto:contact@stemflow.africa"
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} STEM FLOW. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
