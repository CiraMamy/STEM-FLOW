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
  ExternalLink,
  BarChart3,
  Sparkles,
  Shield,
  Heart,
  Zap,
  Code,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const programs = [
  {
    title: "Programmes d'incubation & acc\u00e9l\u00e9ration",
    description: "Nous recherchons des incubateurs et acc\u00e9l\u00e9rateurs en Afrique et \u00e0 l'international pour nous accompagner dans notre phase de scaling. STEM FLOW offre un fort potentiel de croissance sur le march\u00e9 EdTech africain.",
    icon: Rocket,
  },
  {
    title: "Investissement & financement",
    description: "STEM FLOW est ouvert aux investisseurs d'impact, business angels et fonds de venture capital partageant notre vision d'\u00e9ducation STEM accessible pour l'Afrique. Ticket d'entr\u00e9e flexible.",
    icon: TrendingUp,
  },
  {
    title: "Appels \u00e0 projets & subventions",
    description: "Nous r\u00e9pondons activement aux appels \u00e0 projets dans les domaines de l'\u00e9ducation, de l'innovation sociale et du d\u00e9veloppement num\u00e9rique en Afrique (AFD, UE, BAD, fondations priv\u00e9es).",
    icon: Globe,
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Incubateurs & Acc\u00e9l\u00e9rateurs",
    color: "bg-primary",
    points: [
      "Startup EdTech \u00e0 fort potentiel sur un march\u00e9 de 1.4 milliard de personnes",
      "\u00c9quipe fondatrice compl\u00e9mentaire et exp\u00e9riment\u00e9e",
      "Produit fonctionnel avec premiers utilisateurs actifs",
      "Mod\u00e8le \u00e9conomique viable : freemium + B2B + sponsoring",
      "Impact social mesurable align\u00e9 avec les ODD de l'ONU",
      "Technologie IA propri\u00e9taire de personnalisation",
    ],
    cta: "Nous incuber",
  },
  {
    icon: TrendingUp,
    title: "Investisseurs & Business Angels",
    color: "bg-secondary",
    points: [
      "Opportunit\u00e9 unique d'impact investing en EdTech africaine",
      "March\u00e9 EdTech africain en croissance de 25% par an",
      "Mod\u00e8le scalable : 54 pays, 1.4 milliard de personnes",
      "Avantage first-mover sur le segment STEM mobile en Afrique",
      "Retour social sur investissement mesurable (ODD 4, 5, 9)",
      "Strat\u00e9gie de sortie claire : acquisition ou introduction en bourse",
    ],
    cta: "Investir dans STEM FLOW",
  },
  {
    icon: GraduationCap,
    title: "Institutions \u00c9ducatives & ONG",
    color: "bg-accent",
    points: [
      "Partenariat p\u00e9dagogique gagnant-gagnant",
      "Int\u00e9gration de STEM FLOW dans vos programmes scolaires",
      "Co-cr\u00e9ation de parcours certifiants STEM",
      "Tableaux de bord de suivi des \u00e9l\u00e8ves pour les enseignants",
      "Donn\u00e9es d'apprentissage anonymis\u00e9es pour la recherche",
      "Visibilit\u00e9 et reconnaissance sur la plateforme",
    ],
    cta: "Devenir partenaire",
  },
];

const benefits = [
  { icon: BarChart3, text: "Acc\u00e8s exclusif aux donn\u00e9es d'impact et rapports d\u00e9taill\u00e9s" },
  { icon: Globe, text: "Visibilit\u00e9 aupr\u00e8s de millions d'apprenants africains" },
  { icon: Users, text: "R\u00e9seau exclusif de partenaires \u00e9ducatifs et tech" },
  { icon: Sparkles, text: "Co-branding et mentions sur tous les supports" },
  { icon: Shield, text: "Contribution concr\u00e8te aux ODD de l'ONU" },
  { icon: Heart, text: "Rapports d'impact personnalis\u00e9s trimestriels" },
];

const partnerLogos = [
  { name: "Universit\u00e9s africaines", desc: "Partenariats acad\u00e9miques pour la validation des contenus" },
  { name: "Organisations internationales", desc: "AFD, UE, BAD pour le financement de l'impact" },
  { name: "Entreprises tech", desc: "Google, Microsoft, Meta pour le soutien technologique" },
  { name: "Fondations", desc: "Fondation Gates, Mastercard Foundation pour l'\u00e9ducation" },
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
              LearnXScience \u2014 Partenariats & Investissement
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-partnerships-title">
              Construisons ensemble l'avenir des{" "}
              <span className="text-primary">technologies \u00e9ducatives</span> en Afrique
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              LearnXScience recherche des partenaires strat\u00e9giques pour acc\u00e9l\u00e9rer 
              le d\u00e9ploiement de STEM FLOW et toucher 10 millions d'apprenants d'ici 2030. 
              Incubateurs, investisseurs, institutions \u00e9ducatives : rejoignez le mouvement.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" data-testid="button-demo-partners">
                Voir la d\u00e9mo de l'App
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
              STEM FLOW est en phase de croissance et recherche activement 
              du soutien strat\u00e9gique et financier pour atteindre l'\u00e9chelle panafricaine.
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
              Pourquoi s'associer \u00e0 LearnXScience ?
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
                    <Button className="w-full" variant="outline" data-testid={`button-partner-${index}`}>
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
                \u00e9ducatif d'ampleur continentale et b\u00e9n\u00e9ficier d'avantages concrets 
                tout en contribuant \u00e0 un impact social majeur.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm mt-1">{benefit.text}</span>
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
                    <h3 className="text-2xl font-bold mb-4">Pr\u00eat \u00e0 nous rejoindre ?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Contactez-nous pour discuter des opportunit\u00e9s de partenariat 
                      et d\u00e9couvrir comment ensemble nous pouvons transformer 
                      l'\u00e9ducation STEM en Afrique.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="w-full mb-3" data-testid="button-contact-partner">
                        Nous contacter
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="w-full" data-testid="button-demo-partner">
                        Tester l'application
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
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Handshake className="h-3 w-3 mr-1" />
              Nos Partenaires
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-current-partners-title">
              Ils nous font d\u00e9j\u00e0 confiance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW s'appuie sur un r\u00e9seau de partenaires engag\u00e9s dans l'\u00e9ducation 
              num\u00e9rique et le d\u00e9veloppement des comp\u00e9tences en Afrique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Code className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" data-testid="text-partner-cfc">Code For Chad</h3>
                    <Badge variant="secondary" className="text-xs mt-1">Communaut\u00e9 Tech</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Communaut\u00e9 des d\u00e9veloppeurs tchadiens fond\u00e9e par Souleymane Mahamat Saleh. 
                  Code For Chad forme les jeunes au codage informatique, favorise l'innovation 
                  technologique et cr\u00e9e un \u00e9cosyst\u00e8me num\u00e9rique dynamique au Tchad. 
                  Un partenaire cl\u00e9 pour le d\u00e9ploiement de STEM FLOW en Afrique centrale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Formation aux comp\u00e9tences num\u00e9riques et au codage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">R\u00e9seau de d\u00e9veloppeurs et mentors au Tchad</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Partenariat avec l'Ambassade des \u00c9tats-Unis au Tchad</span>
                  </li>
                </ul>
                <a href="https://www.codeforchad.net" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full" data-testid="button-cfc-website">
                    <Globe className="mr-2 h-4 w-4" />
                    Visiter codeforchad.net
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <GraduationCap className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" data-testid="text-partner-60credits">60 Cr\u00e9dits</h3>
                    <Badge variant="secondary" className="text-xs mt-1">Communaut\u00e9 \u00c9ducative</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Communaut\u00e9 d'\u00e9ducation financi\u00e8re et d'autonomisation des jeunes, 
                  anim\u00e9e par Cira Mamy Sow. 60 Cr\u00e9dits forme les \u00e9tudiants \u00e0 la gestion 
                  financi\u00e8re et \u00e0 l'autonomisation intellectuelle et \u00e9conomique. 
                  Un partenaire essentiel pour l'impact social de STEM FLOW au S\u00e9n\u00e9gal.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">\u00c9ducation financi\u00e8re pour les \u00e9tudiants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Autonomisation intellectuelle et \u00e9conomique des jeunes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">R\u00e9seau d'\u00e9tudiants engag\u00e9s au S\u00e9n\u00e9gal</span>
                  </li>
                </ul>
                <a href="https://www.facebook.com/share/1ac1GqCAG2/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full" data-testid="button-60credits-page">
                    <Globe className="mr-2 h-4 w-4" />
                    D\u00e9couvrir 60 Cr\u00e9dits
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Zap className="h-3 w-3 mr-1" />
              Partenaires Recherch\u00e9s
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-target-partners-title">
              Les partenaires que nous recherchons aussi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partnerLogos.map((partner, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground">{partner.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary via-secondary to-secondary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Collaborer avec LearnXScience
          </h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Que vous soyez incubateur, investisseur, institution \u00e9ducative ou entreprise tech, 
            nous avons h\u00e2te d'explorer les synergies possibles pour transformer 
            l'\u00e9ducation STEM en Afrique.
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
