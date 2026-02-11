import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  Linkedin,
  Globe,
  ArrowRight,
  Lightbulb,
  Code,
  ExternalLink,
  GraduationCap,
  Heart,
  Star,
  Target,
  Rocket,
  Shield,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const teamMembers = [
  {
    name: "Souleymane Mahamat Saleh",
    role: "Cofondateur & Ingénieur Génie Logiciel",
    initials: "SMS",
    color: "bg-primary",
    icon: Code,
    bio: "Ingénieur en génie logiciel, éducateur numérique et leader communautaire, Souleymane est le fondateur de Code For Chad, la communauté des développeurs tchadiens. Formateur en technologies et innovation éducative, il possède une expérience significative dans la formation des jeunes aux compétences numériques, la coordination de communautés éducatives et technologiques, et la conception de projets éducatifs axés sur l'employabilité et l'entrepreneuriat. Récemment en partenariat avec l'Ambassade des États-Unis au Tchad dans le domaine STEM et le codage informatique, il accompagne les apprenants, étudiants et autodidactes dans leur parcours académique et professionnel.",
    skills: ["Génie Logiciel", "Formation STEM", "Leadership communautaire", "Innovation éducative", "Entrepreneuriat"],
    linkedin: "#",
    website: "https://www.codeforchad.net",
  },
  {
    name: "Cira Mamy Sow",
    role: "Cofondatrice & Coordinatrice",
    initials: "CMS",
    color: "bg-accent",
    icon: Lightbulb,
    bio: "De formation en mathématiques appliquées et informatique (Master 2 en modélisation et calcul scientifique) avec une spécialisation en Big Data, Cira Mamy Sow s'engage activement pour la promotion des STEM au Sénégal et en Afrique. Formée au sein du programme FORCE-N, elle a développé des compétences en création de contenus de vulgarisation scientifique et en conception d'évaluations académiques. Elle dispense également des cours d'éducation financière via la communauté 60 Crédits. L'idée de STEM FLOW est née lors d'un bootcamp en intelligence artificielle organisé en partenariat avec le PNUD et UNIPOD Guinée. Aujourd'hui, elle coordonne STEM FLOW avec l'ambition de transformer les usages numériques en leviers d'apprentissage durable.",
    skills: ["Mathématiques appliquées", "Big Data", "Vulgarisation scientifique", "Pédagogie STEM", "Éducation financière"],
    linkedin: "#",
  },
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualité du code à la rigueur pédagogique de chaque contenu.",
  },
  {
    icon: Heart,
    title: "Inclusivité",
    description: "STEM FLOW est pour tous les jeunes africains, quels que soient le genre, l'origine ethnique, la langue ou le niveau de départ.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous explorons constamment de nouvelles approches pédagogiques et technologiques pour améliorer l'expérience d'apprentissage.",
  },
  {
    icon: Target,
    title: "Impact mesurable",
    description: "Chaque décision est guidée par notre volonté de maximiser l'impact éducatif positif, mesuré par des indicateurs concrets.",
  },
];

const advisors = [
  {
    title: "Comité Pédagogique",
    description: "Enseignants et chercheurs africains qui valident la qualité académique de nos contenus STEM.",
    icon: GraduationCap,
  },
  {
    title: "Mentors Tech",
    description: "Entrepreneurs et ingénieurs expérimentés du secteur tech africain qui nous guident dans notre croissance.",
    icon: Rocket,
  },
  {
    title: "Ambassadeurs Étudiants",
    description: "Étudiants dans les universités africaines qui représentent STEM FLOW et recueillent les retours terrain.",
    icon: Shield,
  },
];

const hiring = [
  "Développeurs Mobile (React Native / Flutter)",
  "Créateurs de contenu STEM (vidéo)",
  "Data Scientists / Ingénieurs IA",
  "Community Managers Afrique",
  "Spécialistes Marketing & Growth",
  "Designers UX/UI",
];

export default function Team() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-28">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-team">
              <Users className="h-3 w-3 mr-1" />
              LearnXScience — L'Équipe
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-team-title">
              Les fondateurs de{" "}
              <span className="text-primary">LearnXScience</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Née lors d'un bootcamp en intelligence artificielle organisé en partenariat avec le PNUD 
              et UNIPOD Guinée, LearnXScience est fondée par une équipe panafricaine passionnée 
              qui unit ingénierie logicielle, mathématiques appliquées et éducation numérique 
              pour construire les technologies éducatives intelligentes de demain.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Équipe Fondatrice
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-founders-title">
              Une équipe complémentaire
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Deux profils complémentaires, une même passion pour l'éducation, 
              la technologie et l'innovation africaine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-visible">
                <CardContent className="p-0">
                  <div className={`${member.color} p-8 text-center rounded-t-xl`}>
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary-foreground/20">
                      <AvatarFallback className="text-2xl font-bold bg-primary-foreground/20 text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-primary-foreground" data-testid={`text-member-name-${index}`}>
                      {member.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <member.icon className="h-4 w-4 text-primary-foreground/80" />
                      <span className="text-primary-foreground/80 text-sm">{member.role}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                          data-testid={`social-linkedin-${index}`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={member.website}
                          className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                          data-testid={`social-website-${index}`}
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Notre Écosystème
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ecosystem-title">
              Un réseau de soutien panafricain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Au-delà de l'équipe fondatrice, STEM FLOW s'appuie sur un écosystème 
              d'experts et d'ambassadeurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <advisor.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{advisor.title}</h3>
                  <p className="text-muted-foreground text-sm">{advisor.description}</p>
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
              Notre ADN
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-values-title">
              Les valeurs qui nous guident
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Rocket className="h-3 w-3 mr-1" />
                Rejoindre l'équipe
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-hiring-title">
                Nous recrutons des talents
              </h2>
              <p className="text-muted-foreground text-lg">
                LearnXScience grandit et cherche des personnes passionnées pour rejoindre l'aventure.
              </p>
            </div>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {hiring.map((role, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Code className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link href="/contact">
                    <Button data-testid="button-apply">
                      Postuler / Nous contacter
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Envie de collaborer avec nous ?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Nous cherchons des partenaires qui partagent notre vision d'une éducation STEM 
            accessible, engageante et de qualité pour tous les jeunes africains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partenariats">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Découvrir les opportunités
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5">
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
