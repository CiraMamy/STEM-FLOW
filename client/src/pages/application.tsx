import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Smartphone,
  Play,
  MessageCircle,
  Trophy,
  Brain,
  Swords,
  ArrowRight,
  ExternalLink,
  Zap,
  Star,
  Target,
  Wifi,
  Shield,
  Languages,
  BarChart3,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const features = [
  {
    icon: Play,
    title: "Feed vidéo STEM",
    description: "Un flux de vidéos éducatives courtes (30-90 secondes) style TikTok. Swipe pour apprendre, like pour sauvegarder, commente pour échanger. Algorithme IA pour des recommandations personnalisées.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Salons communautaires",
    description: "Des espaces de discussion thématiques inspirés de Discord. Rejoins des communautés de mathématiciens, de codeurs, de scientifiques. Pose tes questions, partage tes découvertes.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Trophy,
    title: "Gamification complète",
    description: "Système XP à chaque vidéo, badges de compétences, niveaux progressifs. Challenges quotidiens, séries d'apprentissage (streaks) et classements par école, ville et pays.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "IA de personnalisation",
    description: "Notre algorithme apprend tes préférences et ton niveau pour te proposer le contenu parfait. Plus tu utilises l'app, mieux elle te connaît. Parcours adaptatif en temps réel.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    icon: Swords,
    title: "Battles & Compétitions",
    description: "Affronte d'autres élèves ou d'autres écoles dans des quiz chronométrés. Représente ton établissement dans les classements nationaux et panafricains.",
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
  {
    icon: Target,
    title: "Parcours structurés",
    description: "Des parcours d'apprentissage progressifs pour chaque discipline STEM : mathématiques, physique, chimie, biologie, informatique, ingénierie. Du débutant à l'expert.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
];

const techSpecs = [
  { icon: Smartphone, title: "Mobile-First", desc: "Android & iOS, APK léger (<30 Mo)" },
  { icon: Wifi, title: "Mode Hors-ligne", desc: "Télécharge et apprends sans connexion" },
  { icon: Languages, title: "Multilingue", desc: "Français, Anglais, langues locales" },
  { icon: Shield, title: "Sécurisé", desc: "Modération et protection des données" },
  { icon: BarChart3, title: "Analytics", desc: "Tableau de bord de progression détaillé" },
  { icon: BookOpen, title: "Contenu vérifié", desc: "Validé par des éducateurs certifiés" },
];

const userJourney = [
  {
    step: 1,
    title: "Télécharge l'app",
    description: "Disponible sur Android et iOS. Inscription gratuite en 30 secondes avec email ou numéro de téléphone.",
  },
  {
    step: 2,
    title: "Choisis ta langue et tes intérêts",
    description: "Sélectionne ta langue préférée et les disciplines STEM qui te passionnent. L'IA s'adapte immédiatement.",
  },
  {
    step: 3,
    title: "Explore le feed vidéo",
    description: "Commence à scroller et découvre des micro-leçons passionnantes. Chaque vidéo te rapporte des XP.",
  },
  {
    step: 4,
    title: "Rejoins des communautés",
    description: "Intègre des groupes thématiques, pose des questions, aide les autres et gagne des badges.",
  },
  {
    step: 5,
    title: "Progresse et compétionne",
    description: "Accumule XP, monte en niveau, défie tes amis et représente ton école dans les classements.",
  },
];

const disciplines = [
  { name: "Mathématiques", emoji_alt: "Algèbre, géométrie, statistiques", color: "bg-primary/10 text-primary" },
  { name: "Physique", emoji_alt: "Mécanique, optique, quantique", color: "bg-secondary/10 text-secondary" },
  { name: "Chimie", emoji_alt: "Organique, moléculaire, réactions", color: "bg-accent/10 text-accent" },
  { name: "Informatique", emoji_alt: "Python, algorithmes, web", color: "bg-chart-4/10 text-chart-4" },
  { name: "Biologie", emoji_alt: "Génétique, écologie, anatomie", color: "bg-chart-5/10 text-chart-5" },
  { name: "Ingénierie", emoji_alt: "Électronique, mécanique, civil", color: "bg-chart-2/10 text-chart-2" },
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
                LearnXScience — STEM FLOW
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-app-title">
                L'apprentissage STEM dans ta{" "}
                <span className="text-primary">poche</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                STEM FLOW est une application mobile qui transforme chaque moment 
                libre en opportunité d'apprentissage. Interface intuitive, 
                contenu captivant, progression visible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Conçue pour fonctionner même avec une connexion limitée, 
                disponible en français et en anglais, et totalement gratuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="text-base" data-testid="button-launch-app">
                    <Zap className="mr-2 h-5 w-5" />
                    Tester l'Application
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
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
                          <Badge variant="secondary" className="text-[8px] ml-auto">+15 XP</Badge>
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
                          <Badge variant="secondary" className="text-[8px] ml-auto">+10 XP</Badge>
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
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="secondary">
                Fonctionnalités Principales
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-features-title">
                Tout ce dont tu as besoin pour apprendre
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Une suite complète d'outils pour explorer, progresser et t'amuser 
                dans toutes les disciplines STEM.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="border-0 shadow-sm hover-elevate h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="outline">
                <BookOpen className="h-3 w-3 mr-1" />
                Disciplines
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-disciplines-title">
                Toutes les disciplines STEM couvertes
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Du collège à l'université, explore chaque domaine à ton rythme.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {disciplines.map((disc, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="border-0 shadow-sm h-full">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${disc.color} flex items-center justify-center`}>
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{disc.name}</h3>
                      <p className="text-xs text-muted-foreground">{disc.emoji_alt}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                Spécifications
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-specs-title">
                Conçue pour l'Afrique
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {techSpecs.map((spec, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border h-full">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <spec.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{spec.title}</div>
                    <div className="text-xs text-muted-foreground">{spec.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4" variant="outline">
                Parcours Utilisateur
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-journey-title">
                Commence ton aventure STEM en 5 étapes
              </h2>
              <p className="text-muted-foreground text-lg">
                De l'inscription à la maîtrise, un parcours simple et engageant.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              <div className="space-y-8">
                {userJourney.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 100} direction="up">
                    <div className="relative flex gap-6">
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
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-accent via-accent to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Teste STEM FLOW maintenant
          </h2>
          <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            L'application est disponible en version démo. Découvre l'expérience 
            d'apprentissage STEM FLOW dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-app-bottom">
                Lancer l'Application
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 border-accent-foreground/30 text-accent-foreground bg-accent-foreground/5" data-testid="button-waitlist-bottom">
                Liste d'attente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
