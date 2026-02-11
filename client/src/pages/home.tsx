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
  ExternalLink,
  Smartphone,
  BookOpen,
  Rocket,
  Wifi,
  GraduationCap,
  BarChart3,
  Shield,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const pillars = [
  {
    icon: Play,
    title: "Vid\u00e9os courtes \u00e9ducatives",
    description: "Des micro-le\u00e7ons STEM de 30 \u00e0 90 secondes au format vertical. Swipe pour d\u00e9couvrir, like pour sauvegarder, commente pour \u00e9changer avec la communaut\u00e9.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    title: "Communaut\u00e9s STEM",
    description: "Des salons th\u00e9matiques inspir\u00e9s de Discord pour chaque discipline : math\u00e9matiques, physique, informatique, biologie, ing\u00e9nierie et plus.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Trophy,
    title: "Gamification avanc\u00e9e",
    description: "Syst\u00e8me XP, badges de comp\u00e9tences, classements nationaux, battles entre \u00e9coles, challenges quotidiens et s\u00e9ries d'apprentissage.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "IA Personnalis\u00e9e",
    description: "Un algorithme d'intelligence artificielle qui s'adapte \u00e0 ton niveau, tes pr\u00e9f\u00e9rences et ton rythme pour cr\u00e9er un parcours sur mesure.",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

const problems = [
  {
    icon: Target,
    title: "Acc\u00e8s limit\u00e9 \u00e0 l'\u00e9ducation STEM",
    description: "Seulement 2% des \u00e9tudiants africains poursuivent des \u00e9tudes STEM, contre 20% en Asie et 15% en Europe. L'Afrique forme moins de 25% des ing\u00e9nieurs n\u00e9cessaires.",
  },
  {
    icon: TrendingUp,
    title: "D\u00e9sengagement des jeunes",
    description: "78% des jeunes africains passent plus de 3h par jour sur leur smartphone, principalement sur les r\u00e9seaux sociaux. Ce temps peut devenir un levier d'apprentissage.",
  },
  {
    icon: Lightbulb,
    title: "Potentiel inexploit\u00e9",
    description: "L'Afrique compte 60% de sa population de moins de 25 ans, soit le plus grand vivier de talents au monde, mais les outils \u00e9ducatifs adapt\u00e9s manquent cruellement.",
  },
];

const keyNumbers = [
  { value: "1.4Md", label: "d'Africains d'ici 2030", icon: Globe },
  { value: "60%", label: "ont moins de 25 ans", icon: Users },
  { value: "500M+", label: "de smartphones en Afrique", icon: Smartphone },
  { value: "2%", label: "en fili\u00e8re STEM", icon: GraduationCap },
  { value: "$130Md", label: "march\u00e9 EdTech mondial", icon: BarChart3 },
  { value: "54", label: "pays cibl\u00e9s", icon: Target },
];

const advantages = [
  { icon: Smartphone, text: "App mobile-first optimis\u00e9e pour les r\u00e9seaux africains" },
  { icon: BookOpen, text: "Contenu multilingue : Fran\u00e7ais, Anglais et langues locales" },
  { icon: Wifi, text: "Mode hors-ligne pour les zones \u00e0 faible connectivit\u00e9" },
  { icon: Shield, text: "Environnement s\u00e9curis\u00e9 et mod\u00e9r\u00e9 pour les apprenants" },
  { icon: Rocket, text: "Parcours progressifs du d\u00e9butant \u00e0 l'expert" },
  { icon: GraduationCap, text: "Certifications reconnues par nos partenaires \u00e9ducatifs" },
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
              Le 1er R\u00e9seau Social \u00c9ducatif STEM d'Afrique
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6" data-testid="text-hero-title">
              Transformer le{" "}
              <span className="text-primary">scroll</span> en{" "}
              <span className="text-secondary">apprentissage</span>{" "}
              <span className="text-accent">STEM</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-primary mb-6" data-testid="text-slogan">
              Scroll. Learn. Level Up.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              STEM FLOW transforme chaque moment de scroll en opportunit\u00e9 d'apprentissage. 
              Sciences, technologie, ing\u00e9nierie et math\u00e9matiques \u00e0 travers une exp\u00e9rience 
              mobile-first, ludique et personnalis\u00e9e par l'IA, con\u00e7ue pour la jeunesse africaine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-base px-8" data-testid="button-try-app">
                  Tester l'Application
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

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-numbers-title">
              L'opportunit\u00e9 africaine en chiffres
            </h2>
            <p className="text-muted-foreground">Pourquoi l'Afrique a besoin de STEM FLOW maintenant</p>
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
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Les 4 Piliers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-pillars-title">
              Une exp\u00e9rience d'apprentissage compl\u00e8te
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW combine les meilleurs outils pour cr\u00e9er un \u00e9cosyst\u00e8me \u00e9ducatif unique, 
              en s'inspirant des codes des applications que les jeunes utilisent d\u00e9j\u00e0.
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

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">
                <Globe className="h-3 w-3 mr-1" />
                Le D\u00e9fi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-title">
                Pourquoi STEM FLOW ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                L'Afrique poss\u00e8de la population la plus jeune au monde et un potentiel immense, 
                mais l'acc\u00e8s \u00e0 une \u00e9ducation STEM de qualit\u00e9 reste un d\u00e9fi majeur. 
                STEM FLOW apporte une solution innovante qui parle le langage de la g\u00e9n\u00e9ration Z.
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
                      Une application mobile qui utilise les codes de TikTok, Discord et Duolingo 
                      pour transformer le temps d'\u00e9cran en temps d'apprentissage. Gratuite, 
                      multilingue et optimis\u00e9e pour les r\u00e9seaux africains.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center mb-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">10M+</div>
                        <div className="text-xs text-muted-foreground">Apprenants cibl\u00e9s d'ici 2030</div>
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
                        D\u00e9couvrir l'application
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

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Rocket className="h-3 w-3 mr-1" />
              Avantages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-advantages-title">
              Con\u00e7u pour l'Afrique, par l'Afrique
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Chaque fonctionnalit\u00e9 de STEM FLOW a \u00e9t\u00e9 pens\u00e9e pour les r\u00e9alit\u00e9s du continent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
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
            Pr\u00eat \u00e0 transformer ton apprentissage ?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Teste d\u00e8s maintenant STEM FLOW et rejoins la communaut\u00e9 
            de la r\u00e9volution \u00e9ducative en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-try">
                Tester l'Application
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
