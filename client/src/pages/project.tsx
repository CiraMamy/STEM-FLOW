import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Smartphone,
  Users,
} from "lucide-react";

const challenges = [
  {
    title: "Accès inégal à l'éducation STEM",
    description: "Seulement 2% des étudiants africains poursuivent des études STEM, contre 20% en Asie.",
  },
  {
    title: "Manque de ressources adaptées",
    description: "Les contenus éducatifs existants ne sont pas conçus pour les réalités africaines.",
  },
  {
    title: "Déconnexion générationnelle",
    description: "Les méthodes d'enseignement traditionnelles n'engagent pas les jeunes du numérique.",
  },
  {
    title: "Barrières linguistiques",
    description: "La majorité des ressources STEM de qualité sont en anglais uniquement.",
  },
];

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Une application conçue pour les réalités africaines : légère, optimisée pour les connexions mobiles.",
  },
  {
    icon: BookOpen,
    title: "Contenus localisés",
    description: "Des vidéos et exercices créés par des éducateurs africains, dans les langues locales.",
  },
  {
    icon: Users,
    title: "Apprentissage social",
    description: "Une communauté d'entraide où chaque apprenant peut aussi devenir mentor.",
  },
];

const differentiators = [
  "Format TikTok-like adapté aux habitudes des jeunes",
  "Gamification inspirée des meilleurs jeux mobiles",
  "IA de personnalisation pour un parcours sur mesure",
  "Communautés thématiques pour chaque discipline STEM",
  "Battles et challenges entre écoles et pays",
  "Certification reconnue par des partenaires éducatifs",
];

export default function Project() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-6" variant="outline" data-testid="badge-project">
              <Target className="h-3 w-3 mr-1" />
              Le Projet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-project-title">
              STEM FLOW : L'éducation STEM{" "}
              <span className="text-primary">réinventée</span> pour l'Afrique
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous croyons que chaque jeune africain mérite d'avoir accès à une éducation 
              STEM de classe mondiale. STEM FLOW est notre réponse à ce défi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              La Problématique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-challenge-title">
              Les défis de l'éducation STEM en Afrique
            </h2>
            <p className="text-muted-foreground text-lg">
              Malgré un potentiel immense, l'Afrique fait face à des obstacles majeurs 
              dans le développement des compétences STEM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Lightbulb className="h-3 w-3 mr-1" />
              Notre Solution
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-solution-title">
              Une approche innovante et adaptée
            </h2>
            <p className="text-muted-foreground text-lg">
              STEM FLOW combine technologie, pédagogie et compréhension culturelle 
              pour créer une expérience d'apprentissage unique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-sm hover-elevate">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                Ce qui nous distingue
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-diff-title">
                Plus qu'une plateforme éducative
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Contrairement aux plateformes classiques comme Coursera ou Khan Academy, 
                STEM FLOW est conçu spécifiquement pour engager la génération Z africaine 
                avec les codes qu'elle connaît et aime.
              </p>

              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl" />
              <Card className="relative border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-primary via-primary to-accent p-8 text-primary-foreground">
                  <Globe className="h-12 w-12 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-4">Vision Continentale</h3>
                  <p className="text-primary-foreground/90 leading-relaxed mb-6">
                    Notre ambition est de devenir la référence de l'éducation STEM 
                    en Afrique, touchant des millions de jeunes dans les 54 pays du continent.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">2030</div>
                      <div className="text-sm text-primary-foreground/80">Horizon</div>
                    </div>
                    <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">10M</div>
                      <div className="text-sm text-primary-foreground/80">Apprenants visés</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Envie de découvrir l'application ?
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Explorez toutes les fonctionnalités qui font de STEM FLOW une expérience unique.
          </p>
          <Link href="/application">
            <Button size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/30 text-secondary-foreground bg-secondary-foreground/5">
              Découvrir l'application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
