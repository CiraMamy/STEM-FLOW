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
} from "lucide-react";

const visionPoints = [
  {
    icon: Eye,
    title: "Notre Vision",
    description: "Un continent où chaque jeune africain a accès à une éducation STEM de classe mondiale, accessible depuis son smartphone.",
  },
  {
    icon: Target,
    title: "Notre Mission",
    description: "Démocratiser l'apprentissage STEM en Afrique en le rendant engageant, accessible et adapté aux réalités locales.",
  },
  {
    icon: Heart,
    title: "Nos Valeurs",
    description: "Excellence, inclusivité, innovation et impact positif guident chacune de nos décisions.",
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
      "Développement de la pensée critique et analytique",
      "Apprentissage continu au-delà de la salle de classe",
      "Préparation aux études supérieures STEM",
      "Acquisition de compétences du 21ème siècle",
    ],
  },
  {
    icon: Users,
    title: "Impact Social",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    points: [
      "Réduction des inégalités d'accès à l'éducation de qualité",
      "Création de communautés d'entraide entre étudiants",
      "Valorisation des talents africains",
      "Promotion de modèles de réussite locaux",
      "Renforcement des liens entre pays africains",
    ],
  },
  {
    icon: Briefcase,
    title: "Impact Économique",
    color: "text-accent",
    bgColor: "bg-accent/10",
    points: [
      "Formation de la main-d'œuvre qualifiée de demain",
      "Stimulation de l'innovation et de l'entrepreneuriat",
      "Développement du secteur tech africain",
      "Création d'emplois dans l'éducation numérique",
      "Contribution au PIB continental",
    ],
  },
];

const stats = [
  { value: "60%", label: "de la population africaine a moins de 25 ans" },
  { value: "2%", label: "des étudiants africains sont en filière STEM" },
  { value: "230M", label: "de smartphones en Afrique subsaharienne" },
  { value: "2030", label: "année cible pour 10M d'utilisateurs" },
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
              <Globe className="h-3 w-3 mr-1" />
              Vision & Impact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-vision-title">
              Construire l'avenir{" "}
              <span className="text-primary">STEM</span> de l'Afrique
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              STEM FLOW n'est pas qu'une application. C'est un mouvement pour 
              transformer l'éducation et libérer le potentiel de millions de jeunes africains.
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
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Triple Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-impact-title">
              Un impact à plusieurs dimensions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW génère un impact positif sur l'éducation, la société et l'économie africaines.
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
              L'opportunité africaine
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Les chiffres qui démontrent l'immense potentiel du continent.
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
                Contribution au Développement
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contribution-title">
                Notre contribution aux compétences STEM
              </h2>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="lead text-foreground font-medium">
                    L'Afrique possède la population la plus jeune au monde, avec 60% 
                    de sa population ayant moins de 25 ans. C'est un atout immense, 
                    à condition de pouvoir former cette jeunesse aux compétences du futur.
                  </p>
                  <p>
                    STEM FLOW s'inscrit dans l'Agenda 2063 de l'Union Africaine et 
                    contribue directement aux Objectifs de Développement Durable, 
                    notamment l'ODD 4 (Éducation de qualité) et l'ODD 9 (Innovation).
                  </p>
                  <p>
                    En formant les scientifiques, ingénieurs et innovateurs de demain, 
                    nous participons à la construction d'une Afrique plus prospère, 
                    plus résiliente et plus connectée au reste du monde.
                  </p>
                  <p>
                    Notre approche mobile-first et notre focus sur l'engagement 
                    permettent de toucher des populations traditionnellement 
                    exclues des systèmes éducatifs formels.
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
            Découvrez l'équipe derrière STEM FLOW
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Des passionnés d'éducation et de technologie, unis par une vision commune.
          </p>
          <Link href="/equipe">
            <Button size="lg" className="text-base px-8">
              Rencontrer l'équipe
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
