import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  GraduationCap,
  Users,
  Briefcase,
  Globe,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Target,
  Heart,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Rocket,
  Beaker,
  Brain,
  BarChart3,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const visionPoints = [
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Construire une nouvelle g\u00e9n\u00e9ration d'IA \u00e9ducatives africaines, capables de comprendre les profils cognitifs des apprenants, d'adapter dynamiquement les contenus, de mesurer la progression r\u00e9elle et de cr\u00e9er des environnements d'apprentissage sociaux et motivants.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "D\u00e9velopper des syst\u00e8mes d'intelligence artificielle appliqu\u00e9s \u00e0 l'\u00e9ducation. Concevoir des algorithmes \u00e9ducatifs capables de personnaliser l'apprentissage, d'analyser les progr\u00e8s et de transformer l'engagement num\u00e9rique en progression acad\u00e9mique r\u00e9elle.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description: "Excellence acad\u00e9mique, inclusivit\u00e9 totale, innovation continue, impact social mesurable et collaboration panafricaine guident chacune de nos d\u00e9cisions.",
  },
];

const whyWeExist = [
  {
    icon: Users,
    title: "Usages num\u00e9riques ignor\u00e9s",
    description: "L'\u00e9ducation traditionnelle ne tient pas compte des usages num\u00e9riques r\u00e9els des jeunes. Les \u00e9tudiants passent des heures \u00e0 scroller pendant que le syst\u00e8me \u00e9ducatif reste statique.",
  },
  {
    icon: Brain,
    title: "Personnalisation cognitive absente",
    description: "Les m\u00e9thodes classiques ignorent la personnalisation cognitive et l'engagement comportemental comme leviers d'apprentissage.",
  },
  {
    icon: BarChart3,
    title: "La data sous-exploit\u00e9e",
    description: "Les donn\u00e9es d'apprentissage ne sont pas utilis\u00e9es comme levier d'am\u00e9lioration. La data peut r\u00e9volutionner la compr\u00e9hension des parcours \u00e9ducatifs.",
  },
];

const impacts = [
  {
    icon: GraduationCap,
    title: "Impact \u00c9ducatif",
    color: "text-primary",
    bgColor: "bg-primary/10",
    points: [
      "Am\u00e9lioration des r\u00e9sultats scolaires en sciences et math\u00e9matiques",
      "D\u00e9veloppement de la pens\u00e9e critique, analytique et cr\u00e9ative",
      "Apprentissage continu au-del\u00e0 de la salle de classe, 24h/24",
      "Pr\u00e9paration aux \u00e9tudes sup\u00e9rieures et aux carri\u00e8res STEM",
      "Acquisition des comp\u00e9tences du 21\u00e8me si\u00e8cle demand\u00e9es par les employeurs",
    ],
  },
  {
    icon: Users,
    title: "Impact Social",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    points: [
      "R\u00e9duction des in\u00e9galit\u00e9s d'acc\u00e8s \u00e0 l'\u00e9ducation de qualit\u00e9 en STEM",
      "Cr\u00e9ation de communaut\u00e9s d'entraide panafricaines entre \u00e9tudiants",
      "Promotion de l'\u00e9galit\u00e9 des genres dans les fili\u00e8res STEM",
      "Valorisation des talents africains et des mod\u00e8les de r\u00e9ussite locaux",
      "Renforcement des liens interculturels entre les 54 pays du continent",
    ],
  },
  {
    icon: Briefcase,
    title: "Impact \u00c9conomique",
    color: "text-accent",
    bgColor: "bg-accent/10",
    points: [
      "Formation de la main-d'\u0153uvre STEM qualifi\u00e9e de demain",
      "Stimulation de l'innovation et de l'entrepreneuriat technologique",
      "D\u00e9veloppement du secteur tech africain et r\u00e9duction du brain drain",
      "Cr\u00e9ation d'emplois dans l'\u00e9ducation num\u00e9rique et la cr\u00e9ation de contenu",
      "Contribution directe \u00e0 la croissance du PIB continental",
    ],
  },
];

const stats = [
  { value: "1.4Md", label: "population africaine d'ici 2030" },
  { value: "60%", label: "de la population africaine a moins de 25 ans" },
  { value: "2%", label: "des \u00e9tudiants africains sont en fili\u00e8re STEM" },
  { value: "500M+", label: "de smartphones en Afrique subsaharienne" },
];

const sdgs = [
  { number: 4, title: "\u00c9ducation de qualit\u00e9", description: "Assurer l'acc\u00e8s \u00e0 une \u00e9ducation de qualit\u00e9 pour tous" },
  { number: 5, title: "\u00c9galit\u00e9 des genres", description: "Promouvoir les filles dans les fili\u00e8res STEM" },
  { number: 8, title: "Travail d\u00e9cent", description: "Former la main-d'\u0153uvre qualifi\u00e9e de demain" },
  { number: 9, title: "Innovation", description: "Favoriser l'innovation et les infrastructures" },
  { number: 10, title: "R\u00e9duction des in\u00e9galit\u00e9s", description: "R\u00e9duire les disparit\u00e9s \u00e9ducatives" },
  { number: 17, title: "Partenariats", description: "Renforcer les partenariats pour le d\u00e9veloppement" },
];

const milestones = [
  { target: "2025", goal: "1 000 b\u00eata-testeurs actifs sur STEM FLOW" },
  { target: "2026", goal: "100 000 utilisateurs en Afrique de l'Ouest" },
  { target: "2027", goal: "1 million d'apprenants actifs" },
  { target: "2028", goal: "Pr\u00e9sence dans 20 pays africains" },
  { target: "2030", goal: "10 millions d'apprenants \u2014 algorithmes exportables \u00e0 l'international" },
];

const ambitions = [
  "Devenir un acteur majeur des technologies \u00e9ducatives intelligentes en Afrique",
  "D\u00e9velopper des algorithmes \u00e9ducatifs exportables \u00e0 l'international",
  "Faire de l'Afrique une productrice de technologies \u00e9ducatives, pas seulement consommatrice",
  "Construire un \u00e9cosyst\u00e8me EdTech africain de r\u00e9f\u00e9rence mondiale",
];

export default function Vision() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-20 lg:py-28">
        <div className="absolute top-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-vision">
              <Beaker className="h-3 w-3 mr-1" />
              LearnXScience \u2014 Vision & Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-vision-title">
              Construire les{" "}
              <span className="text-primary">technologies \u00e9ducatives</span>{" "}
              intelligentes de demain
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              LearnXScience existe pour transformer les usages num\u00e9riques en leviers 
              d'apprentissage intelligent. Notre ambition : devenir un acteur majeur 
              des technologies \u00e9ducatives intelligentes en Afrique et d\u00e9velopper 
              des algorithmes \u00e9ducatifs exportables \u00e0 l'international.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <point.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4" data-testid={`text-vision-point-${index}`}>
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                <Lightbulb className="h-3 w-3 mr-1" />
                Notre Raison d'Exister
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-exist-title">
                Pourquoi LearnXScience existe
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Pendant que les jeunes passent des heures \u00e0 scroller, le syst\u00e8me \u00e9ducatif reste statique. 
                Nous existons pour combler ce foss\u00e9.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyWeExist.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-6 text-center">Notre Ambition</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ambitions.map((ambition, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Rocket className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{ambition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Triple Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-impact-title">
              Un impact \u00e0 plusieurs dimensions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              LearnXScience, \u00e0 travers STEM FLOW, g\u00e9n\u00e8re un impact positif mesurable 
              sur l'\u00e9ducation, la soci\u00e9t\u00e9 et l'\u00e9conomie africaines.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${impact.bgColor} flex items-center justify-center mb-6`}>
                    <impact.icon className={`h-7 w-7 ${impact.color}`} />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{impact.title}</h3>
                  <ul className="space-y-3">
                    {impact.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-sm">
                        <TrendingUp className={`h-4 w-4 ${impact.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-stats-title">
              L'opportunit\u00e9 africaine en chiffres
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Des donn\u00e9es qui d\u00e9montrent l'immense potentiel du continent et l'urgence d'agir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-primary-foreground/10 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Lightbulb className="h-3 w-3 mr-1" />
                Objectifs de D\u00e9veloppement Durable
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sdg-title">
                Notre contribution aux ODD de l'ONU
              </h2>
              <p className="text-muted-foreground text-lg">
                LearnXScience s'inscrit dans l'Agenda 2063 de l'Union Africaine et contribue 
                directement \u00e0 6 Objectifs de D\u00e9veloppement Durable.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sdgs.map((sdg, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {sdg.number}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">ODD {sdg.number} : {sdg.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{sdg.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                <Rocket className="h-3 w-3 mr-1" />
                Objectifs de Croissance
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-milestones-title">
                Nos jalons vers 10 millions d'apprenants
              </h2>
            </div>

            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background border">
                  <Badge variant={index === 0 ? "default" : "secondary"} className="text-sm font-bold min-w-[80px] justify-center">
                    {milestone.target}
                  </Badge>
                  <div className="flex-1 flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${index === 0 ? "text-primary" : "text-muted-foreground/40"}`} />
                    <span className="text-sm">{milestone.goal}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    L'Afrique, terre d'avenir pour l'EdTech
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p className="text-foreground font-medium">
                    L'Afrique poss\u00e8de la population la plus jeune au monde, avec 60% 
                    de sa population ayant moins de 25 ans. C'est un atout immense, 
                    \u00e0 condition de pouvoir former cette jeunesse aux comp\u00e9tences du futur.
                  </p>
                  <p>
                    LearnXScience s'inscrit dans l'Agenda 2063 de l'Union Africaine et 
                    contribue directement aux Objectifs de D\u00e9veloppement Durable, 
                    notamment l'ODD 4 (\u00c9ducation de qualit\u00e9), l'ODD 5 (\u00c9galit\u00e9 des genres) 
                    et l'ODD 9 (Innovation).
                  </p>
                  <p>
                    En formant les scientifiques, ing\u00e9nieurs et innovateurs de demain 
                    \u00e0 travers STEM FLOW, nous participons \u00e0 la construction d'une Afrique 
                    plus prosp\u00e8re, plus r\u00e9siliente et plus connect\u00e9e au reste du monde.
                    Notre approche mobile-first permet de toucher des populations 
                    traditionnellement exclues des syst\u00e8mes \u00e9ducatifs formels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            D\u00e9couvrez l'\u00e9quipe derri\u00e8re LearnXScience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Des passionn\u00e9s d'\u00e9ducation et de technologie, unis par une vision commune 
            de transformer l'Afrique par le savoir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/equipe">
              <Button size="lg" className="text-base px-8">
                Rencontrer l'\u00e9quipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8" data-testid="button-app-vision">
                Tester STEM FLOW
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
