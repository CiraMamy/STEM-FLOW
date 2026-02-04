import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Users,
  Linkedin,
  Github,
  Globe,
  ArrowRight,
  Lightbulb,
  Code,
  Compass,
} from "lucide-react";

const teamMembers = [
  {
    name: "Aminata Diallo",
    role: "Coordination & Vision Éducative",
    initials: "AD",
    color: "bg-primary",
    icon: Compass,
    bio: "Passionnée d'éducation depuis 10 ans, Aminata a travaillé avec des ONG éducatives au Sénégal et en Côte d'Ivoire. Elle porte la vision pédagogique de STEM FLOW et s'assure que chaque contenu serve l'apprentissage.",
    linkedin: "#",
  },
  {
    name: "Kwame Asante",
    role: "IA & Vision Produit",
    initials: "KA",
    color: "bg-secondary",
    icon: Lightbulb,
    bio: "Ancien ingénieur chez une startup EdTech américaine, Kwame combine expertise en intelligence artificielle et compréhension des besoins utilisateurs. Il conçoit l'algorithme de personnalisation de STEM FLOW.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Fatou Ndiaye",
    role: "Stratégie Technique & Développement",
    initials: "FN",
    color: "bg-accent",
    icon: Code,
    bio: "Développeuse full-stack avec 7 ans d'expérience, Fatou a bâti des applications mobiles utilisées par des millions d'utilisateurs. Elle dirige l'équipe technique et garantit la qualité du produit.",
    linkedin: "#",
    github: "#",
    website: "#",
  },
];

const values = [
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans tout ce que nous faisons, de la qualité du code à la pédagogie.",
  },
  {
    title: "Inclusivité",
    description: "STEM FLOW est pour tous, quels que soient le genre, l'origine ou le niveau de départ.",
  },
  {
    title: "Innovation",
    description: "Nous explorons constamment de nouvelles approches pour améliorer l'apprentissage.",
  },
  {
    title: "Impact",
    description: "Chaque décision est guidée par notre volonté de maximiser l'impact positif.",
  },
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
              L'Équipe
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-team-title">
              Les visages derrière{" "}
              <span className="text-primary">STEM FLOW</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une équipe passionnée, expérimentée et déterminée à transformer 
              l'éducation STEM en Afrique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="secondary">
              Cofondateurs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-founders-title">
              Une équipe complémentaire
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Trois profils différents, une même passion pour l'éducation et l'innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm overflow-hidden hover-elevate">
                <CardContent className="p-0">
                  <div className={`${member.color} p-8 text-center`}>
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
                      {member.github && (
                        <a
                          href={member.github}
                          className="flex h-9 w-9 items-center justify-center rounded-md bg-muted hover-elevate transition-colors"
                          data-testid={`social-github-${index}`}
                        >
                          <Github className="h-4 w-4" />
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
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
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
            accessible et de qualité pour tous.
          </p>
          <Link href="/partenariats">
            <Button size="lg" variant="secondary" className="text-base px-8">
              Découvrir les opportunités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
