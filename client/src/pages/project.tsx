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
  ExternalLink,
  BarChart3,
  Zap,
  GraduationCap,
  Clock,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const challenges = [
  {
    title: "Accès inégal à l'éducation STEM",
    description: "Seulement 2% des étudiants africains poursuivent des études STEM, contre 20% en Asie. L'Afrique ne forme que 25% des ingénieurs dont elle a besoin pour son développement.",
  },
  {
    title: "Manque de ressources adaptées",
    description: "90% des contenus éducatifs STEM de qualité sont en anglais et conçus pour des contextes occidentaux. Les réalités africaines sont rarement prises en compte.",
  },
  {
    title: "Déconnexion générationnelle",
    description: "Les méthodes d'enseignement traditionnelles n'engagent pas la génération Z. 78% des jeunes africains préfèrent le contenu vidéo court aux formats classiques.",
  },
  {
    title: "Barrières linguistiques et culturelles",
    description: "La majorité des ressources STEM de qualité sont en anglais uniquement, excluant des centaines de millions de francophones et locuteurs de langues africaines.",
  },
];

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile-First & Low-Data",
    description: "Application ultra-légère (<30 Mo), optimisée pour les réseaux 2G/3G africains, avec mode hors-ligne complet pour les zones sans connectivité.",
  },
  {
    icon: BookOpen,
    title: "Contenus localisés & multilingues",
    description: "Des vidéos et exercices créés par des éducateurs africains, disponibles en français, anglais et langues locales. Exemples concrets tirés du quotidien africain.",
  },
  {
    icon: Users,
    title: "Apprentissage social & collaboratif",
    description: "Une communauté d'entraide panafricaine où chaque apprenant peut devenir mentor. Tutorat par les pairs, groupes d'étude et challenges collectifs.",
  },
];

const differentiators = [
  "Format TikTok-like adapté aux habitudes de consommation des jeunes",
  "Gamification inspirée de Duolingo et des meilleurs jeux mobiles",
  "IA de personnalisation pour un parcours sur mesure adapté à chaque apprenant",
  "Communautés thématiques Discord-like pour chaque discipline STEM",
  "Battles et challenges entre écoles, villes et pays africains",
  "Parcours certifiants reconnus par des partenaires éducatifs",
  "Mode hors-ligne pour les zones à faible connectivité",
  "Contenu créé et validé par des enseignants africains",
];

const timeline = [
  { year: "2024", event: "Idéation et recherche utilisateur", status: "done" },
  { year: "2025", event: "Développement MVP et bêta test", status: "current" },
  { year: "2026", event: "Lancement Afrique de l'Ouest francophone", status: "next" },
  { year: "2027", event: "Expansion Afrique de l'Est anglophone", status: "next" },
  { year: "2028-2030", event: "Couverture panafricaine - 54 pays", status: "next" },
];

const comparisons = [
  { platform: "Khan Academy", weakness: "Contenu long, pas mobile-first, pas adapté à l'Afrique" },
  { platform: "Coursera / edX", weakness: "Cours longs, payants, barrière linguistique" },
  { platform: "Duolingo", weakness: "Modèle gamifié mais limité aux langues" },
  { platform: "TikTok", weakness: "Format engageant mais contenu non éducatif" },
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
              LearnXScience — Le Projet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-project-title">
              STEM FLOW : la première{" "}
              <span className="text-primary">innovation</span> de LearnXScience
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              STEM FLOW est la première application développée par LearnXScience. 
              Un réseau social éducatif mobile-first qui combine les codes des réseaux sociaux, 
              la puissance de nos algorithmes d'IA et la gamification pour rendre l'apprentissage irrésistible.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" data-testid="button-try-project">
                Tester l'Application
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
              Malgré un potentiel immense et la population la plus jeune au monde, 
              l'Afrique fait face à des obstacles majeurs dans le développement des compétences STEM.
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
              pour créer une expérience d'apprentissage unique en son genre.
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4" variant="secondary">
                Ce qui nous distingue
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-diff-title">
                STEM FLOW vs plateformes classiques
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Contrairement aux plateformes classiques, STEM FLOW est conçu 
                spécifiquement pour engager la génération Z africaine 
                avec les codes qu'elle connaît et aime.
              </p>

              <div className="space-y-3 mb-8">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-lg mb-4">Pourquoi pas les plateformes existantes ?</h3>
              {comparisons.map((comp, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{comp.platform}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{comp.weakness}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-primary">STEM FLOW</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Format court + gamification + IA + communauté + mobile-first + multilingue + adapté à l'Afrique
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Clock className="h-3 w-3 mr-1" />
                Roadmap
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-roadmap-title">
                Notre feuille de route
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="flex-1 hidden md:block" />
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      item.status === "done" ? "bg-primary text-primary-foreground" :
                      item.status === "current" ? "bg-secondary text-secondary-foreground" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {item.status === "done" ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                    </div>
                    <Card className={`flex-1 border-0 shadow-sm ${item.status === "current" ? "border-secondary/30 bg-secondary/5" : ""}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Badge variant={item.status === "current" ? "default" : "secondary"} className="text-xs">
                            {item.year}
                          </Badge>
                          {item.status === "current" && <Badge variant="outline" className="text-xs">En cours</Badge>}
                        </div>
                        <p className="text-sm mt-2">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Découvrez STEM FLOW par LearnXScience
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Testez dès maintenant notre première application et explorez toutes les fonctionnalités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/30 text-secondary-foreground bg-secondary-foreground/5">
                Tester l'Application
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/application">
              <Button size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/30 text-secondary-foreground bg-secondary-foreground/5">
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
