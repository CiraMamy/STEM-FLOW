import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  Trophy,
  Brain,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Lightbulb,
  Globe,
} from "lucide-react";

const pillars = [
  {
    icon: Play,
    title: "Vidéos courtes éducatives",
    description: "Contenu STEM captivant en format court, conçu pour maximiser l'apprentissage.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Communautés STEM",
    description: "Rejoins des espaces d'échange et de collaboration entre passionnés.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Gagne des XP, des badges et participe à des challenges stimulants.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Parcours personnalisé grâce à l'IA qui s'adapte à ton niveau.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

const problems = [
  {
    icon: Target,
    title: "Accès limité",
    description: "Des millions de jeunes africains n'ont pas accès à une éducation STEM de qualité.",
  },
  {
    icon: TrendingUp,
    title: "Engagement faible",
    description: "Les méthodes traditionnelles peinent à captiver la nouvelle génération.",
  },
  {
    icon: Lightbulb,
    title: "Manque d'innovation",
    description: "Le potentiel créatif reste inexploité faute d'outils adaptés.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-hero">
              <Sparkles className="h-3 w-3 mr-1" />
              Réseau Social Éducatif Intelligent
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Transformer le{" "}
              <span className="text-primary">scroll</span> en{" "}
              <span className="text-secondary">apprentissage</span>{" "}
              <span className="text-accent">STEM</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6" data-testid="text-slogan">
              Scroll. Learn. Level Up.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              STEM FLOW transforme chaque moment de scroll en opportunité d'apprentissage. 
              Découvre les sciences, la technologie, l'ingénierie et les mathématiques 
              à travers une expérience ludique et personnalisée.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/application">
                <Button size="lg" className="text-base px-8" data-testid="button-discover-app">
                  Découvrir l'application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-waitlist">
                  Rejoindre la liste d'attente
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Les 4 Piliers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pillars-title">
              Une expérience d'apprentissage complète
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW combine les meilleurs outils pour créer un écosystème éducatif unique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="border-0 shadow-sm hover-elevate">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-4`}>
                    <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-pillar-title-${index}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Globe className="h-3 w-3 mr-1" />
                Le Défi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-title">
                Pourquoi STEM FLOW ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'Afrique regorge de talents et de potentiel, mais l'accès à une éducation STEM 
                de qualité reste un défi majeur. STEM FLOW apporte une solution innovante 
                qui s'adapte aux réalités du continent.
              </p>

              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <problem.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{problem.title}</h3>
                      <p className="text-muted-foreground text-sm">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
              <Card className="relative border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">La Solution STEM FLOW</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Une plateforme qui transforme le temps passé sur mobile en opportunités 
                      d'apprentissage, en utilisant les codes des réseaux sociaux pour rendre 
                      l'éducation STEM accessible, engageante et efficace.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary">1M+</div>
                        <div className="text-xs text-muted-foreground">Apprenants ciblés</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-secondary">54</div>
                        <div className="text-xs text-muted-foreground">Pays africains</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-accent">100%</div>
                        <div className="text-xs text-muted-foreground">Gratuit</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
            Prêt à transformer ton apprentissage ?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Rejoins la communauté STEM FLOW et fais partie de la révolution éducative en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-join-cta">
                Rejoindre l'aventure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/projet">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
