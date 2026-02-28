import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useSEO } from "@/hooks/use-seo";
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
  Brain,
  BarChart3,
  Sprout,
  Settings,
  Globe2,
  Crosshair,
} from "lucide-react";

const APP_URL = "https://steamflow-wxw3.onrender.com/auth";

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

const roadmapPhases = [
  {
    icon: Sprout,
    phase: "Phase 1",
    title: "Fondation & Construction",
    timeline: "Déc. 2025 — Fév. 2026",
    status: "done",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    steps: [
      { text: "Constitution d'une équipe solide et complémentaire (tech, éducation, design)", done: true },
      { text: "Conception de l'architecture technique et du design système de la plateforme", done: true },
      { text: "Développement et lancement du site vitrine LearnXScience", done: true },
      { text: "Développement de la version bêta de l'application STEM FLOW", done: true },
      { text: "Partenariats stratégiques signés : Code For Chad & 60 Crédits", done: true },
      { text: "Définition du business model et de la stratégie de croissance", done: true },
    ],
    result: "Équipe opérationnelle, site vitrine en ligne, version bêta fonctionnelle, premiers partenariats actifs.",
  },
  {
    icon: Settings,
    phase: "Phase 2",
    title: "Tests, Itération & Lancement",
    timeline: "Mars — Août 2026",
    status: "current",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    steps: [
      { text: "Tests utilisateurs intensifs avec étudiants et enseignants", done: false },
      { text: "Itérations continues basées sur les retours terrain (UX, contenu, performance)", done: false },
      { text: "Intégration de l'IA de personnalisation des parcours d'apprentissage", done: false },
      { text: "Lancement officiel de STEM FLOW dans les trois pays : Bénin, Tchad, Sénégal", done: false },
      { text: "Levée de fonds (Mars et Août 2026)", done: false },
      { text: "Premiers indicateurs d'impact mesurés et partagés", done: false },
    ],
    result: "Produit validé par le terrain, premiers utilisateurs actifs dans trois pays, métriques d'engagement et de progression.",
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Accélération & Croissance",
    timeline: "Sept. 2026 — Déc. 2027",
    status: "upcoming",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    steps: [
      { text: "Déploiement mobile complet (iOS & Android) avec mode hors-ligne", done: false },
      { text: "Expansion dans 5+ pays francophones à partir de septembre 2026", done: false },
      { text: "Catalogue élargi de contenus STEM (mathématiques, physique, chimie, informatique)", done: false },
      { text: "Structuration du modèle économique (B2C, B2B, partenariats institutionnels)", done: false },
      { text: "Intégration d'analytics avancés et d'outils de suivi pédagogique", done: false },
    ],
    result: "Croissance rapide des utilisateurs, modèle économique validé, positionnement régional consolidé.",
  },
  {
    icon: Globe2,
    phase: "Phase 4",
    title: "Impact Continental",
    timeline: "2028 et au-delà",
    status: "upcoming",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    steps: [
      { text: "Accessibilité dans les zones rurales et sous-connectées", done: false },
      { text: "Programmes certifiants reconnus par les institutions éducatives", done: false },
      { text: "Partenariats avec universités, ONG et gouvernements africains", done: false },
      { text: "Écosystème d'innovation : communauté, hackathons, incubation de talents", done: false },
      { text: "Mesure et reporting d'impact aligné sur les ODD de l'ONU", done: false },
      { text: "Expansion vers l'Afrique anglophone et lusophone", done: false },
    ],
    result: "Des millions de jeunes formés aux compétences STEM, LearnXScience comme référence EdTech africaine.",
  },
];

const ambitions = [
  "Devenir un acteur majeur des technologies éducatives intelligentes en Afrique",
  "Développer des algorithmes éducatifs exportables à l'international",
  "Faire de l'Afrique une productrice de technologies éducatives, pas seulement consommatrice",
  "Construire un écosystème EdTech africain de référence mondiale",
];

export default function Vision() {
  useSEO({
    title: "Vision & Impact — Éducation STEM Intelligente pour l'Afrique",
    description: "LearnXScience vise à construire les technologies éducatives intelligentes de demain. Notre impact : éducatif, social et économique pour des millions de jeunes africains via STEM FLOW.",
  });

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/5 via-background to-primary/5 py-20 lg:py-28">
        <div className="absolute top-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-vision">
              <Sparkles className="h-3 w-3 mr-1" />
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
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="border-0 shadow-sm text-center h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
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
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {whyWeExist.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="up">
                  <Card className="border-0 shadow-sm hover-elevate h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
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
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="border-0 shadow-sm h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-stats-title">
                L'opportunité africaine en chiffres
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Des données qui démontrent l'immense potentiel du continent et l'urgence d'agir.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="border-0 bg-primary-foreground/10 backdrop-blur h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                      {stat.value}
                    </div>
                    <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
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
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sdgs.map((sdg, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="up">
                  <Card className="border-0 shadow-sm h-full">
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4" variant="secondary">
                  <Rocket className="h-3 w-3 mr-1" />
                  Notre Feuille de Route
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-roadmap-title">
                  Un projet en marche depuis décembre 2025
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Nous ne sommes pas au stade de l'idée. Nous construisons, testons
                  et améliorons chaque jour. Voici notre trajectoire.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {roadmapPhases.map((phase, index) => (
                <ScrollReveal key={index} delay={index * 100} direction="up">
                  <Card className={`border ${phase.borderColor} overflow-visible`} data-testid={`roadmap-phase-${index}`}>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <div className="flex-shrink-0 flex flex-col items-center gap-2">
                          <div className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center`}>
                            <phase.icon className={`h-7 w-7 ${phase.color}`} />
                          </div>
                          <Badge
                            variant={phase.status === "done" ? "default" : "outline"}
                            className={`text-xs ${phase.status === "done" ? "bg-secondary text-secondary-foreground" : phase.status === "current" ? "border-primary text-primary" : ""}`}
                          >
                            {phase.status === "done" ? "Accompli" : phase.status === "current" ? "En cours" : "A venir"}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold">
                              <span className={phase.color}>{phase.phase}</span> — {phase.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {phase.timeline}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {phase.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${step.done ? "text-secondary" : "text-muted-foreground/40"}`} />
                                <span className={step.done ? "font-medium" : "text-muted-foreground"}>{step.text}</span>
                              </li>
                            ))}
                          </ul>
                          <div className={`${phase.bgColor} rounded-md p-3`}>
                            <p className="text-sm">
                              <span className="font-semibold">{phase.status === "done" ? "Résultat :" : "Résultat attendu :"}</span>{" "}
                              <span className="text-muted-foreground">{phase.result}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6 md:p-8 text-center">
                  <Crosshair className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Notre Engagement</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Nous avançons chaque jour. Chaque ligne de code, chaque test utilisateur,
                    chaque partenariat nous rapproche de notre objectif : faire de STEM FLOW
                    la plateforme de référence pour la démocratisation des sciences en Afrique,
                    en formant une génération capable d'innover et de résoudre les défis du continent.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
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
            </ScrollReveal>
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
