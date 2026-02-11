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
    role: "Cofondateur & Ing\u00e9nieur G\u00e9nie Logiciel",
    initials: "SMS",
    color: "bg-primary",
    icon: Code,
    bio: "Ing\u00e9nieur en g\u00e9nie logiciel, \u00e9ducateur num\u00e9rique et leader communautaire, Souleymane est le fondateur de Code For Chad, la communaut\u00e9 des d\u00e9veloppeurs tchadiens. Formateur en technologies et innovation \u00e9ducative, il poss\u00e8de une exp\u00e9rience significative dans la formation des jeunes aux comp\u00e9tences num\u00e9riques, la coordination de communaut\u00e9s \u00e9ducatives et technologiques, et la conception de projets \u00e9ducatifs ax\u00e9s sur l'employabilit\u00e9 et l'entrepreneuriat. R\u00e9cemment en partenariat avec l'Ambassade des \u00c9tats-Unis au Tchad dans le domaine STEM et le codage informatique, il accompagne les apprenants, \u00e9tudiants et autodidactes dans leur parcours acad\u00e9mique et professionnel.",
    skills: ["G\u00e9nie Logiciel", "Formation STEM", "Leadership communautaire", "Innovation \u00e9ducative", "Entrepreneuriat"],
    linkedin: "#",
    website: "https://www.codeforchad.net",
  },
  {
    name: "Cira Mamy Sow",
    role: "Cofondatrice & Coordinatrice",
    initials: "CMS",
    color: "bg-accent",
    icon: Lightbulb,
    bio: "De formation en math\u00e9matiques appliqu\u00e9es et informatique (Master 2 en mod\u00e9lisation et calcul scientifique) avec une sp\u00e9cialisation en Big Data, Cira Mamy Sow s'engage activement pour la promotion des STEM au S\u00e9n\u00e9gal et en Afrique. Form\u00e9e au sein du programme FORCE-N, elle a d\u00e9velopp\u00e9 des comp\u00e9tences en cr\u00e9ation de contenus de vulgarisation scientifique et en conception d'\u00e9valuations acad\u00e9miques. Elle dispense \u00e9galement des cours d'\u00e9ducation financi\u00e8re via la communaut\u00e9 60 Cr\u00e9dits. L'id\u00e9e de STEM FLOW est n\u00e9e lors d'un bootcamp en intelligence artificielle organis\u00e9 en partenariat avec le PNUD et UNIPOD Guin\u00e9e. Aujourd'hui, elle coordonne STEM FLOW avec l'ambition de transformer les usages num\u00e9riques en leviers d'apprentissage durable.",
    skills: ["Math\u00e9matiques appliqu\u00e9es", "Big Data", "Vulgarisation scientifique", "P\u00e9dagogie STEM", "\u00c9ducation financi\u00e8re"],
    linkedin: "#",
  },
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualit\u00e9 du code \u00e0 la rigueur p\u00e9dagogique de chaque contenu.",
  },
  {
    icon: Heart,
    title: "Inclusivit\u00e9",
    description: "STEM FLOW est pour tous les jeunes africains, quels que soient le genre, l'origine ethnique, la langue ou le niveau de d\u00e9part.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous explorons constamment de nouvelles approches p\u00e9dagogiques et technologiques pour am\u00e9liorer l'exp\u00e9rience d'apprentissage.",
  },
  {
    icon: Target,
    title: "Impact mesurable",
    description: "Chaque d\u00e9cision est guid\u00e9e par notre volont\u00e9 de maximiser l'impact \u00e9ducatif positif, mesur\u00e9 par des indicateurs concrets.",
  },
];

const advisors = [
  {
    title: "Comit\u00e9 P\u00e9dagogique",
    description: "Enseignants et chercheurs africains qui valident la qualit\u00e9 acad\u00e9mique de nos contenus STEM.",
    icon: GraduationCap,
  },
  {
    title: "Mentors Tech",
    description: "Entrepreneurs et ing\u00e9nieurs exp\u00e9riment\u00e9s du secteur tech africain qui nous guident dans notre croissance.",
    icon: Rocket,
  },
  {
    title: "Ambassadeurs \u00c9tudiants",
    description: "\u00c9tudiants dans les universit\u00e9s africaines qui repr\u00e9sentent STEM FLOW et recueillent les retours terrain.",
    icon: Shield,
  },
];

const hiring = [
  "D\u00e9veloppeurs Mobile (React Native / Flutter)",
  "Cr\u00e9ateurs de contenu STEM (vid\u00e9o)",
  "Data Scientists / Ing\u00e9nieurs IA",
  "Community Managers Afrique",
  "Sp\u00e9cialistes Marketing & Growth",
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
              L'\u00c9quipe
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-team-title">
              Les visages derri\u00e8re{" "}
              <span className="text-primary">STEM FLOW</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              N\u00e9e lors d'un bootcamp en intelligence artificielle organis\u00e9 en partenariat avec le PNUD 
              et UNIPOD Guin\u00e9e, STEM FLOW est port\u00e9e par une \u00e9quipe panafricaine passionn\u00e9e 
              qui unit ing\u00e9nierie logicielle, math\u00e9matiques appliqu\u00e9es et \u00e9ducation num\u00e9rique 
              pour rendre le savoir STEM accessible \u00e0 tous.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              \u00c9quipe Fondatrice
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-founders-title">
              Une \u00e9quipe compl\u00e9mentaire
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Deux profils compl\u00e9mentaires, une m\u00eame passion pour l'\u00e9ducation, 
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
              Notre \u00c9cosyst\u00e8me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ecosystem-title">
              Un r\u00e9seau de soutien panafricain
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Au-del\u00e0 de l'\u00e9quipe fondatrice, STEM FLOW s'appuie sur un \u00e9cosyst\u00e8me 
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
                Rejoindre l'\u00e9quipe
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-hiring-title">
                Nous recrutons des talents
              </h2>
              <p className="text-muted-foreground text-lg">
                STEM FLOW grandit et cherche des personnes passionn\u00e9es pour rejoindre l'aventure.
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
            Nous cherchons des partenaires qui partagent notre vision d'une \u00e9ducation STEM 
            accessible, engageante et de qualit\u00e9 pour tous les jeunes africains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partenariats">
              <Button size="lg" variant="secondary" className="text-base px-8">
                D\u00e9couvrir les opportunit\u00e9s
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5">
                Tester l'App
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
