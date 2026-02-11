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
    description: "Construire une nouvelle génération d'IA éducatives africaines, capables de comprendre les profils cognitifs des apprenants, d'adapter dynamiquement les contenus, de mesurer la progression réelle et de créer des environnements d'apprentissage sociaux et motivants.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "Développer des systèmes d'intelligence artificielle appliqués à l'éducation. Concevoir des algorithmes éducatifs capables de personnaliser l'apprentissage, d'analyser les progrès et de transformer l'engagement numérique en progression académique réelle.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description: "Excellence académique, inclusivité totale, innovation continue, impact social mesurable et collaboration panafricaine guident chacune de nos décisions.",
  },
];

const whyWeExist = [
  {
    icon: Users,
    title: "Usages numériques ignorés",
    description: "L'éducation traditionnelle ne tient pas compte des usages numériques réels des jeunes. Les étudiants passent des heures à scroller pendant que le système éducatif reste statique.",
  },
  {
    icon: Brain,
    title: "Personnalisation cognitive absente",
    description: "Les méthodes classiques ignorent la personnalisation cognitive et l'engagement comportemental comme leviers d'apprentissage.",
  },
  {
    icon: BarChart3,
    title: "La data sous-exploitée",
    description: "Les données d'apprentissage ne sont pas utilisées comme levier d'amélioration. La data peut révolutionner la compréhension des parcours éducatifs.",
  },
];

const impacts = [
  {
    icon: GraduationCap,
    title: "Impact Éducatif",
    color: "text-primary",
    bgColor: "bg-primary/10",
    points: [
      "Amélioration des résultats scolaires en sciences et mathématiques",
      "Développement de la pensée critique, analytique et créative",
      "Apprentissage continu au-delà de la salle de classe, 24h/24",
      "Préparation aux études supérieures et aux carrières STEM",
      "Acquisition des compétences du 21ème siècle demandées par les employeurs",
    ],
  },
  {
    icon: Users,
    title: "Impact Social",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    points: [
      "Réduction des inégalités d'accès à l'éducation de qualité en STEM",
      "Création de communautés d'entraide panafricaines entre étudiants",
      "Promotion de l'égalité des genres dans les filières STEM",
      "Valorisation des talents africains et des modèles de réussite locaux",
      "Renforcement des liens interculturels entre les 54 pays du continent",
    ],
  },
  {
    icon: Briefcase,
    title: "Impact Économique",
    color: "text-accent",
    bgColor: "bg-accent/10",
    points: [
      "Formation de la main-d'œuvre STEM qualifiée de demain",
      "Stimulation de l'innovation et de l'entrepreneuriat technologique",
      "Développement du secteur tech africain et réduction du brain drain",
      "Création d'emplois dans l'éducation numérique et la création de contenu",
      "Contribution directe à la croissance du PIB continental",
    ],
  },
];

const stats = [
  { value: "1.4Md", label: "population africaine d'ici 2030" },
  { value: "60%", label: "de la population africaine a moins de 25 ans" },
  { value: "2%", label: "des étudiants africains sont en filière STEM" },
  { value: "500M+", label: "de smartphones en Afrique subsaharienne" },
];

const sdgs = [
  { number: 4, title: "Éducation de qualité", description: "Assurer l'accès à une éducation de qualité pour tous" },
  { number: 5, title: "Égalité des genres", description: "Promouvoir les filles dans les filières STEM" },
  { number: 8, title: "Travail décent", description: "Former la main-d'œuvre qualifiée de demain" },
  { number: 9, title: "Innovation", description: "Favoriser l'innovation et les infrastructures" },
  { number: 10, title: "Réduction des inégalités", description: "Réduire les disparités éducatives" },
  { number: 17, title: "Partenariats", description: "Renforcer les partenariats pour le développement" },
];

const milestones = [
  { target: "2025", goal: "1 000 bêta-testeurs actifs sur STEM FLOW" },
  { target: "2026", goal: "100 000 utilisateurs en Afrique de l'Ouest" },
  { target: "2027", goal: "1 million d'apprenants actifs" },
  { target: "2028", goal: "Présence dans 20 pays africains" },
  { target: "2030", goal: "10 millions d'apprenants — algorithmes exportables à l'international" },
];

const ambitions = [
  "Devenir un acteur majeur des technologies éducatives intelligentes en Afrique",
  "Développer des algorithmes éducatifs exportables à l'international",
  "Faire de l'Afrique une productrice de technologies éducatives, pas seulement consommatrice",
  "Construire un écosystème EdTech africain de référence mondiale",
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
              LearnXScience — Vision & Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-vision-title">
              Construire les{" "}
              <span className="text-primary">technologies éducatives</span>{" "}
              intelligentes de demain
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              LearnXScience existe pour transformer les usages numériques en leviers 
              d'apprentissage intelligent. Notre ambition : devenir un acteur majeur 
              des technologies éducatives intelligentes en Afrique et développer 
              des algorithmes éducatifs exportables à l'international.
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
                L'éducation traditionnelle ne tient pas compte des usages numériques réels 
                des jeunes, de la personnalisation cognitive, de l'engagement comportemental, 
                ni de la data comme levier d'amélioration.
              </p>
              <p className="text-lg font-medium text-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
                Pendant que les jeunes passent des heures à scroller, le système éducatif 
                reste statique. Nous existons pour combler ce fossé.
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
              Un impact à plusieurs dimensions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              LearnXScience, à travers STEM FLOW, génère un impact positif mesurable 
              sur l'éducation, la société et l'économie africaines.
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
              L'opportunité africaine en chiffres
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Des données qui démontrent l'immense potentiel du continent et l'urgence d'agir.
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
                Objectifs de Développement Durable
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sdg-title">
                Notre contribution aux ODD de l'ONU
              </h2>
              <p className="text-muted-foreground text-lg">
                LearnXScience s'inscrit dans l'Agenda 2063 de l'Union Africaine et contribue 
                directement à 6 Objectifs de Développement Durable.
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
                    L'Afrique possède la population la plus jeune au monde, avec 60% 
                    de sa population ayant moins de 25 ans. C'est un atout immense, 
                    à condition de pouvoir former cette jeunesse aux compétences du futur.
                  </p>
                  <p>
                    LearnXScience s'inscrit dans l'Agenda 2063 de l'Union Africaine et 
                    contribue directement aux Objectifs de Développement Durable, 
                    notamment l'ODD 4 (Éducation de qualité), l'ODD 5 (Égalité des genres) 
                    et l'ODD 9 (Innovation).
                  </p>
                  <p>
                    En formant les scientifiques, ingénieurs et innovateurs de demain 
                    à travers STEM FLOW, nous participons à la construction d'une Afrique 
                    plus prospère, plus résiliente et plus connectée au reste du monde.
                    Notre approche mobile-first permet de toucher des populations 
                    traditionnellement exclues des systèmes éducatifs formels.
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
            Découvrez l'équipe derrière LearnXScience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Des passionnés d'éducation et de technologie, unis par une vision commune 
            de transformer l'Afrique par le savoir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/equipe">
              <Button size="lg" className="text-base px-8">
                Rencontrer l'équipe
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
