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
    title: "Acc\u00e8s in\u00e9gal \u00e0 l'\u00e9ducation STEM",
    description: "Seulement 2% des \u00e9tudiants africains poursuivent des \u00e9tudes STEM, contre 20% en Asie. L'Afrique ne forme que 25% des ing\u00e9nieurs dont elle a besoin pour son d\u00e9veloppement.",
  },
  {
    title: "Manque de ressources adapt\u00e9es",
    description: "90% des contenus \u00e9ducatifs STEM de qualit\u00e9 sont en anglais et con\u00e7us pour des contextes occidentaux. Les r\u00e9alit\u00e9s africaines sont rarement prises en compte.",
  },
  {
    title: "D\u00e9connexion g\u00e9n\u00e9rationnelle",
    description: "Les m\u00e9thodes d'enseignement traditionnelles n'engagent pas la g\u00e9n\u00e9ration Z. 78% des jeunes africains pr\u00e9f\u00e8rent le contenu vid\u00e9o court aux formats classiques.",
  },
  {
    title: "Barri\u00e8res linguistiques et culturelles",
    description: "La majorit\u00e9 des ressources STEM de qualit\u00e9 sont en anglais uniquement, excluant des centaines de millions de francophones et locuteurs de langues africaines.",
  },
];

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile-First & Low-Data",
    description: "Application ultra-l\u00e9g\u00e8re (<30 Mo), optimis\u00e9e pour les r\u00e9seaux 2G/3G africains, avec mode hors-ligne complet pour les zones sans connectivit\u00e9.",
  },
  {
    icon: BookOpen,
    title: "Contenus localis\u00e9s & multilingues",
    description: "Des vid\u00e9os et exercices cr\u00e9\u00e9s par des \u00e9ducateurs africains, disponibles en fran\u00e7ais, anglais et langues locales. Exemples concrets tir\u00e9s du quotidien africain.",
  },
  {
    icon: Users,
    title: "Apprentissage social & collaboratif",
    description: "Une communaut\u00e9 d'entraide panafricaine o\u00f9 chaque apprenant peut devenir mentor. Tutorat par les pairs, groupes d'\u00e9tude et challenges collectifs.",
  },
];

const differentiators = [
  "Format TikTok-like adapt\u00e9 aux habitudes de consommation des jeunes",
  "Gamification inspir\u00e9e de Duolingo et des meilleurs jeux mobiles",
  "IA de personnalisation pour un parcours sur mesure adapt\u00e9 \u00e0 chaque apprenant",
  "Communaut\u00e9s th\u00e9matiques Discord-like pour chaque discipline STEM",
  "Battles et challenges entre \u00e9coles, villes et pays africains",
  "Parcours certifiants reconnus par des partenaires \u00e9ducatifs",
  "Mode hors-ligne pour les zones \u00e0 faible connectivit\u00e9",
  "Contenu cr\u00e9\u00e9 et valid\u00e9 par des enseignants africains",
];

const timeline = [
  { year: "2024", event: "Id\u00e9ation et recherche utilisateur", status: "done" },
  { year: "2025", event: "D\u00e9veloppement MVP et b\u00eata test", status: "current" },
  { year: "2026", event: "Lancement Afrique de l'Ouest francophone", status: "next" },
  { year: "2027", event: "Expansion Afrique de l'Est anglophone", status: "next" },
  { year: "2028-2030", event: "Couverture panafricaine - 54 pays", status: "next" },
];

const comparisons = [
  { platform: "Khan Academy", weakness: "Contenu long, pas mobile-first, pas adapt\u00e9 \u00e0 l'Afrique" },
  { platform: "Coursera / edX", weakness: "Cours longs, payants, barri\u00e8re linguistique" },
  { platform: "Duolingo", weakness: "Mod\u00e8le gamifi\u00e9 mais limit\u00e9 aux langues" },
  { platform: "TikTok", weakness: "Format engageant mais contenu non \u00e9ducatif" },
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
              LearnXScience \u2014 Le Projet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-project-title">
              STEM FLOW : la premi\u00e8re{" "}
              <span className="text-primary">innovation</span> de LearnXScience
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              STEM FLOW est la premi\u00e8re application d\u00e9velopp\u00e9e par LearnXScience. 
              Un r\u00e9seau social \u00e9ducatif mobile-first qui combine les codes des r\u00e9seaux sociaux, 
              la puissance de nos algorithmes d'IA et la gamification pour rendre l'apprentissage irr\u00e9sistible.
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
              La Probl\u00e9matique
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-challenge-title">
              Les d\u00e9fis de l'\u00e9ducation STEM en Afrique
            </h2>
            <p className="text-muted-foreground text-lg">
              Malgr\u00e9 un potentiel immense et la population la plus jeune au monde, 
              l'Afrique fait face \u00e0 des obstacles majeurs dans le d\u00e9veloppement des comp\u00e9tences STEM.
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
              Une approche innovante et adapt\u00e9e
            </h2>
            <p className="text-muted-foreground text-lg">
              STEM FLOW combine technologie, p\u00e9dagogie et compr\u00e9hension culturelle 
              pour cr\u00e9er une exp\u00e9rience d'apprentissage unique en son genre.
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
                Contrairement aux plateformes classiques, STEM FLOW est con\u00e7u 
                sp\u00e9cifiquement pour engager la g\u00e9n\u00e9ration Z africaine 
                avec les codes qu'elle conna\u00eet et aime.
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
                        Format court + gamification + IA + communaut\u00e9 + mobile-first + multilingue + adapt\u00e9 \u00e0 l'Afrique
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
            D\u00e9couvrez STEM FLOW par LearnXScience
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Testez d\u00e8s maintenant notre premi\u00e8re application et explorez toutes les fonctionnalit\u00e9s.
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
