import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Handshake,
  Building2,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Users,
  Globe,
} from "lucide-react";

const programs = [
  {
    title: "Programmes d'incubation",
    description: "Nous recherchons activement des incubateurs et accélérateurs pour nous accompagner dans notre croissance.",
    icon: Rocket,
  },
  {
    title: "Financement",
    description: "STEM FLOW est ouvert aux investisseurs partageant notre vision d'impact éducatif en Afrique.",
    icon: TrendingUp,
  },
  {
    title: "Appels à projets",
    description: "Nous répondons aux appels à projets dans les domaines de l'éducation et de l'innovation sociale.",
    icon: Globe,
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Incubateurs & Accélérateurs",
    color: "bg-primary",
    points: [
      "Startup EdTech à fort potentiel de croissance",
      "Équipe expérimentée et complémentaire",
      "Marché africain de 1+ milliard de personnes",
      "Modèle économique viable et scalable",
      "Impact social mesurable",
    ],
    cta: "Nous incuber",
  },
  {
    icon: TrendingUp,
    title: "Investisseurs",
    color: "bg-secondary",
    points: [
      "Opportunité d'impact investing unique",
      "Marché EdTech africain en forte croissance",
      "Équipe avec track record prouvé",
      "Technologie IA propriétaire",
      "Vision long terme et ambitieuse",
    ],
    cta: "Investir dans STEM FLOW",
  },
  {
    icon: GraduationCap,
    title: "Institutions Éducatives",
    color: "bg-accent",
    points: [
      "Partenariat pédagogique win-win",
      "Accès privilégié à notre contenu",
      "Co-création de parcours certifiants",
      "Données d'apprentissage anonymisées",
      "Visibility et reconnaissance",
    ],
    cta: "Devenir partenaire",
  },
];

const benefits = [
  "Accès exclusif aux données d'impact",
  "Visibilité sur notre plateforme",
  "Participation à nos événements",
  "Réseau de partenaires de qualité",
  "Contribution à l'éducation africaine",
  "Rapports d'impact personnalisés",
];

export default function Partnerships() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-secondary/5 py-20 lg:py-28">
        <div className="absolute top-10 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-partnerships">
              <Handshake className="h-3 w-3 mr-1" />
              Partenariats & Opportunités
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-partnerships-title">
              Construisons ensemble l'avenir de l'
              <span className="text-primary">éducation STEM</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              STEM FLOW recherche des partenaires stratégiques pour accélérer 
              son développement et maximiser son impact en Afrique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Nos Recherches
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-programs-title">
              Ce que nous recherchons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW est en phase de croissance et recherche activement du soutien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-sm text-center hover-elevate">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{program.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Users className="h-3 w-3 mr-1" />
              Pour Qui ?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-audiences-title">
              Pourquoi partnorer avec STEM FLOW ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Des avantages concrets selon votre profil de partenaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-hidden">
                <div className={`${audience.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                      <audience.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-xl text-primary-foreground">{audience.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-6">
                    {audience.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full" variant="outline">
                      {audience.cta}
                    </Button>
                  </Link>
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
              <Badge className="mb-4" variant="secondary">
                Avantages Partenaires
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-benefits-title">
                Ce que vous gagnez
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Devenir partenaire de STEM FLOW, c'est rejoindre un mouvement 
                éducatif d'ampleur continentale et bénéficier d'avantages concrets.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl" />
              <Card className="relative border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center mx-auto mb-6">
                      <Handshake className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Contactez-nous pour discuter des opportunités de partenariat 
                      et découvrir comment nous pouvons collaborer.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="w-full">
                        Nous contacter
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Collaborer avec STEM FLOW
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Que vous soyez incubateur, investisseur ou institution éducative, 
            nous avons hâte d'explorer les synergies possibles.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/30 text-secondary-foreground bg-secondary-foreground/5">
              Entamer la discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
