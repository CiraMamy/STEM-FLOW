import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { ArrowUpRight, Check, Linkedin, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { APP_URL, CONTACT_EMAIL, SLOGAN } from "@/lib/site";
import logoUrl from "@assets/WhatsApp_Image_2026-02-11_at_19.45.03_1770835532970.jpeg";

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/projet", label: "Le Projet" },
      { href: "/application", label: "L'Application" },
      { href: "/vision", label: "Vision & Impact" },
      { href: "/equipe", label: "L'Équipe" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/partenariats", label: "Partenariats" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (value: string) => {
      const res = await apiRequest("POST", "/api/waitlist", { email: value });
      return res.json();
    },
    onSuccess: () => {
      setDone(true);
      setEmail("");
      toast({ title: "Inscription confirmée", description: "Vous serez prévenu du lancement." });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Inscription impossible",
        description: error.message.replace(/^\d+:\s*/, ""),
      });
    },
  });

  return (
    <form
      className="mt-5 flex w-full max-w-sm gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) mutation.mutate(email.trim());
      }}
    >
      <label htmlFor="footer-waitlist" className="sr-only">
        Votre adresse e-mail
      </label>
      <Input
        id="footer-waitlist"
        type="email"
        required
        autoComplete="email"
        placeholder="vous@exemple.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-full bg-background/60"
        data-testid="input-footer-waitlist"
      />
      <Button
        type="submit"
        className="shrink-0 rounded-full px-5"
        disabled={mutation.isPending || done}
        data-testid="button-footer-waitlist"
      >
        {mutation.isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : done ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          "Rejoindre"
        )}
        <span className="sr-only">Rejoindre la liste d'attente</span>
      </Button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/70 bg-muted/30">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
      />

      <div className="container relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" data-testid="footer-logo">
              <img src={logoUrl} alt="" width={40} height={40} className="h-9 w-9 rounded-xl object-cover ring-1 ring-border" />
              <span className="font-display text-[0.95rem] font-extrabold tracking-tight">
                <span className="text-foreground">Learn</span>
                <span className="text-gradient">X</span>
                <span className="text-foreground">Science</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
              Nous développons des systèmes d'intelligence artificielle appliqués à l'éducation.
              STEM FLOW, notre première application, rend les sciences accessibles, interactives et mesurables.
            </p>
            <p className="mt-4 font-display text-lg font-bold text-gradient">{SLOGAN}</p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/75 transition-colors hover:text-primary"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {col.title === "Ressources" && (
                  <li>
                    <a
                      href={APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-foreground/75 transition-colors hover:text-primary"
                      data-testid="footer-ressource-app"
                    >
                      Accéder à STEM FLOW
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Liste d'attente
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Soyez informé du lancement officiel de STEM FLOW.
            </p>
            <WaitlistForm />
            <div className="mt-6 flex gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Nous écrire par e-mail"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/60 transition-colors hover:border-primary/40 hover:text-primary"
                data-testid="social-email"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/learnxscience"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LearnXScience sur LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/60 transition-colors hover:border-primary/40 hover:text-primary"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} LearnXScience. Tous droits réservés.</p>
          <p>Construire les technologies éducatives intelligentes de demain.</p>
        </div>
      </div>
    </footer>
  );
}
