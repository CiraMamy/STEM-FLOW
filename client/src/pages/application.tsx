import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Play,
  MessageCircle,
  Trophy,
  Brain,
  Swords,
  ArrowRight,
  CheckCircle2,
  Zap,
  Star,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Feed vidéo STEM",
    description: "Un flux de vidéos éducatives courtes (30-90 secondes) style TikTok. Swipe pour apprendre, like pour sauvegarder, commente pour échanger.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Salons communautaires",
    description: "Des espaces de discussion thématiques inspirés de Discord. Rejoins des communautés de matheux, de codeurs, de scientifiques.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Trophy,
    title: "Gamification complète",
    description: "Gagne des XP à chaque vidéo, débloque des badges, monte en niveau. Participe à des challenges quotidiens et hebdomadaires.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "IA de personnalisation",
    description: "Notre algorithme apprend tes préférences et ton niveau pour te proposer le contenu parfait. Plus tu utilises l'app, plus elle te connaît.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Swords,
    title: "Battles & Compétitions",
    description: "Affronte d'autres élèves ou d'autres écoles dans des quiz chronométrés. Représente ton établissement dans les classements nationaux.",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
  {
    icon: Target,
    title: "Parcours structurés",
    description: "Des parcours d'apprentissage progressifs pour chaque discipline STEM. Du débutant à l'expert, avance à ton rythme.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
];

const userJourney = [
  {
    step: 1,
    title: "Télécharge l'app",
    description: "Disponible sur Android et iOS. Inscription gratuite en 30 secondes.",
  },
  {
    step: 2,
    title: "Personnalise ton profil",
    description: "Choisis tes disciplines préférées et ton niveau actuel.",
  },
  {
    step: 3,
    title: "Explore le feed",
    description: "Commence à scroller et découvre des contenus passionnants.",
  },
  {
    step: 4,
    title: "Rejoins des communautés",
    description: "Trouve des groupes qui partagent tes intérêts.",
  },
  {
    step: 5,
    title: "Progresse et gagne",
    description: "Accumule XP, badges et monte dans les classements.",
  },
];

export default function Application() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5 py-20 lg:py-28">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6" variant="outline" data-testid="badge-app">
                <Smartphone className="h-3 w-3 mr-1" />
                L'Application
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-app-title">
                L'apprentissage STEM dans ta{" "}
                <span className="text-primary">poche</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                STEM FLOW est une application mobile qui transforme chaque moment 
                libre en opportunité d'apprentissage. Interface intuitive, 
                contenu captivant, progression visible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base" data-testid="button-coming-soon" disabled>
                  <Zap className="mr-2 h-5 w-5" />
                  Bientôt disponible
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-base" data-testid="button-waitlist-app">
                    Rejoindre la liste d'attente
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-foreground to-foreground/90 rounded-[3rem] p-3 mx-auto max-w-[280px] shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full flex flex-col">
                    <div className="bg-primary/10 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Zap className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-semibold text-sm">STEM FLOW</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-chart-4 fill-chart-4" />
                        <span className="text-xs font-medium">2,450 XP</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-muted/30 p-4 space-y-3">
                      <div className="bg-card rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-chart-2/20 flex items-center justify-center">
                            <Play className="h-3 w-3 text-chart-2" />
                          </div>
                          <span className="text-xs font-medium">Physique quantique</span>
                        </div>
                        <div className="h-20 bg-muted rounded flex items-center justify-center">
                          <Play className="h-8 w-8 text-muted-foreground/50" />
                        </div>
                      </div>
                      <div className="bg-card rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
                            <Brain className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-xs font-medium">Algèbre linéaire</span>
                        </div>
                        <div className="h-20 bg-muted rounded flex items-center justify-center">
                          <Play className="h-8 w-8 text-muted-foreground/50" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-card border-t p-3 flex justify-around">
                      <div className="flex flex-col items-center gap-1">
                        <Play className="h-5 w-5 text-primary" />
                        <span className="text-[10px]">Feed</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <MessageCircle className="h-5 w-5 text-muted-foreground" />
                        <span className="text-[10px]">Salons</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Trophy className="h-5 w-5 text-muted-foreground" />
                        <span className="text-[10px]">Rang</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Target className="h-5 w-5 text-muted-foreground" />
                        <span className="text-[10px]">Profil</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Fonctionnalités
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
              Tout ce dont tu as besoin
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une suite complète d'outils pour apprendre, progresser et t'amuser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover-elevate">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
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
              Parcours Utilisateur
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-journey-title">
              Commence ton aventure STEM
            </h2>
            <p className="text-muted-foreground text-lg">
              En 5 étapes simples, deviens un explorateur STEM accompli.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {userJourney.map((item, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground items-center justify-center text-2xl font-bold z-10">
                      {item.step}
                    </div>
                    <Card className="flex-1 border-0 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Sois parmi les premiers à tester STEM FLOW
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Inscris-toi à notre liste d'attente et sois notifié dès le lancement de l'application.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Rejoindre la liste d'attente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
