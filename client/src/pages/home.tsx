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
  Zap,
  ExternalLink,
  Smartphone,
  BookOpen,
  Rocket,
  Wifi,
  GraduationCap,
  BarChart3,
  Shield,
  Beaker,
  Database,
  Cpu,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const pillars = [
  {
    icon: Play,
    title: "Vidéos courtes éducatives",
    description: "Des micro-leçons STEM de 30 à 90 secondes au format vertical. Swipe pour découvrir, like pour sauvegarder, commente pour échanger avec la communauté.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Communautés STEM",
    description: "Des salons thématiques inspirés de Discord pour chaque discipline : mathématiques, physique, informatique, biologie, ingénierie et plus.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Trophy,
    title: "Gamification avancée",
    description: "Système XP, badges de compétences, classements nationaux, battles entre écoles, challenges quotidiens et séries d'apprentissage.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "IA Personnalisée",
    description: "Un algorithme d'intelligence artificielle qui s'adapte à ton niveau, tes préférences et ton rythme pour créer un parcours sur mesure.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

const problems = [
  {
    icon: Target,
    title: "Accès limité à l'éducation STEM",
    description: "Seulement 2% des étudiants africains poursuivent des études STEM, contre 20% en Asie et 15% en Europe. L'Afrique forme moins de 25% des ingénieurs nécessaires.",
  },
  {
    icon: TrendingUp,
    title: "Désengagement des jeunes",
    description: "78% des jeunes africains passent plus de 3h par jour sur leur smartphone, principalement sur les réseaux sociaux. Ce temps peut devenir un levier d'apprentissage.",
  },
  {
    icon: Lightbulb,
    title: "Potentiel inexploité",
    description: "L'Afrique compte 60% de sa population de moins de 25 ans, soit le plus grand vivier de talents au monde, mais les outils éducatifs adaptés manquent cruellement.",
  },
];

const keyNumbers = [
  { value: "1.4Md", label: "d'Africains d'ici 2030", icon: Globe },
  { value: "60%", label: "ont moins de 25 ans", icon: Users },
  { value: "500M+", label: "de smartphones en Afrique", icon: Smartphone },
  { value: "2%", label: "en filière STEM", icon: GraduationCap },
  { value: "$130Md", label: "marché EdTech mondial", icon: BarChart3 },
  { value: "54", label: "pays ciblés", icon: Target },
];

const advantages = [
  { icon: Smartphone, text: "App mobile-first optimisée pour les réseaux africains" },
  { icon: BookOpen, text: "Contenu multilingue : Français, Anglais et langues locales" },
  { icon: Wifi, text: "Mode hors-ligne pour les zones à faible connectivité" },
  { icon: Shield, text: "Environnement sécurisé et modéré pour les apprenants" },
  { icon: Rocket, text: "Parcours progressifs du débutant à l'expert" },
  { icon: GraduationCap, text: "Certifications reconnues par nos partenaires éducatifs" },
];

const companyPillars = [
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Algorithmes éducatifs capables de personnaliser l'apprentissage et d'analyser les progrès en temps réel.",
  },
  {
    icon: Database,
    title: "Science des Données",
    description: "Analyse comportementale et cognitive pour optimiser les parcours d'apprentissage de chaque apprenant.",
  },
  {
    icon: Cpu,
    title: "Sciences Cognitives",
    description: "Modèles d'engagement inspirés des neurosciences pour maximiser la rétention et la compréhension.",
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
              <Beaker className="h-3 w-3 mr-1" />
              LearnXScience — Technologies Éducatives Intelligentes
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Transformer l'engagement{" "}
              <span className="text-primary">numérique</span> en{" "}
              <span className="text-secondary">progression</span>{" "}
              <span className="text-accent">académique</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              <span className="font-semibold text-foreground">LearnXScience</span> développe des systèmes d'intelligence artificielle 
              appliqués à l'éducation. Nous concevons des algorithmes éducatifs capables de personnaliser 
              l'apprentissage, d'analyser les progrès et de transformer l'engagement numérique en progression académique réelle.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-primary mb-8" data-testid="text-slogan">
              Scroll. Learn. Level Up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8" data-testid="button-try-app">
                  Découvrir STEM FLOW
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </a>
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Beaker className="h-3 w-3 mr-1" />
              Notre Expertise
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-expertise-title">
              À l'intersection de l'IA, des maths et de la pédagogie
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              LearnXScience est une entreprise technologique spécialisée dans le développement 
              de solutions numériques éducatives et d'algorithmes d'apprentissage intelligents. 
              Nous concevons des plateformes propulsées par l'IA, la science des données et les sciences cognitives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyPillars.map((pillar, index) => (
              <Card key={index} className="border-0 shadow-sm hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Rocket className="h-3 w-3 mr-1" />
              Notre Première Innovation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-stemflow-intro">
              STEM FLOW — Le réseau social éducatif
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              STEM FLOW est la première application développée par LearnXScience. 
              Un réseau social éducatif mobile-first qui combine un feed vidéo interactif, 
              des salons communautaires STEM, un système de gamification, une IA de personnalisation 
              et des battles entre élèves et écoles. STEM FLOW transforme le temps de scrolling 
              en acquisition de compétences STEM mesurable.
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

          <div className="text-center mt-10">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8" data-testid="button-try-stemflow">
                Tester STEM FLOW
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-numbers-title">
              L'opportunité africaine en chiffres
            </h2>
            <p className="text-muted-foreground">Pourquoi l'Afrique a besoin de LearnXScience maintenant</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyNumbers.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-4">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
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
                Notre Raison d'Exister
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-title">
                Pourquoi LearnXScience ?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                L'éducation traditionnelle ne tient pas compte des usages numériques réels 
                des jeunes, de la personnalisation cognitive, de l'engagement comportemental, 
                ni de la data comme levier d'amélioration.
              </p>
              <Card className="border-primary/20 bg-primary/5 mb-8">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-lg leading-relaxed font-medium text-foreground">
                    Pendant que les jeunes passent des heures à scroller, le système éducatif 
                    reste statique. Nous existons pour transformer les usages numériques en 
                    leviers d'apprentissage intelligent.
                  </p>
                </CardContent>
              </Card>

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
                    <h3 className="text-2xl font-bold mb-2">Nous croyons que</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-left mt-6">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>Chaque minute en ligne peut devenir une opportunité de progression</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Brain className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <p>L'intelligence artificielle peut démocratiser l'excellence académique</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <p>L'Afrique peut devenir productrice de technologies éducatives, pas seulement consommatrice</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center mt-8 mb-6 pt-6 border-t">
                      <div>
                        <div className="text-3xl font-bold text-primary">10M+</div>
                        <div className="text-xs text-muted-foreground">Apprenants ciblés d'ici 2030</div>
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
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" data-testid="button-try-solution">
                        Découvrir STEM FLOW
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Rocket className="h-3 w-3 mr-1" />
              Avantages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-advantages-title">
              Conçu pour l'Afrique, par l'Afrique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Chaque fonctionnalité de STEM FLOW a été pensée pour les réalités du continent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm leading-relaxed mt-2">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6" data-testid="text-cta-title">
            Construire les technologies éducatives de demain
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            LearnXScience développe des algorithmes éducatifs exportables à l'international. 
            Découvrez STEM FLOW, notre première innovation, et rejoignez le mouvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-try">
                Tester STEM FLOW
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
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
