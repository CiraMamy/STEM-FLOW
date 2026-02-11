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
    title: "Programmes d'incubation & accélération",
    description: "Nous recherchons des incubateurs et accélérateurs en Afrique et à l'international pour nous accompagner dans notre phase de scaling. STEM FLOW offre un fort potentiel de croissance sur le marché EdTech africain.",
    icon: Rocket,
  },
  {
    title: "Investissement & financement",
    description: "STEM FLOW est ouvert aux investisseurs d'impact, business angels et fonds de venture capital partageant notre vision d'éducation STEM accessible pour l'Afrique. Ticket d'entrée flexible.",
    icon: TrendingUp,
  },
  {
    title: "Appels à projets & subventions",
    description: "Nous répondons activement aux appels à projets dans les domaines de l'éducation, de l'innovation sociale et du développement numérique en Afrique (AFD, UE, BAD, fondations privées).",
    icon: Globe,
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Incubateurs & Accélérateurs",
    color: "bg-primary",
    points: [
      "Startup EdTech à fort potentiel sur un marché de 1.4 milliard de personnes",
      "Équipe fondatrice complémentaire et expérimentée",
      "Produit fonctionnel avec premiers utilisateurs actifs",
      "Modèle économique viable : freemium + B2B + sponsoring",
      "Impact social mesurable aligné avec les ODD de l'ONU",
      "Technologie IA propriétaire de personnalisation",
    ],
    cta: "Nous incuber",
  },
  {
    icon: TrendingUp,
    title: "Investisseurs & Business Angels",
    color: "bg-secondary",
    points: [
      "Opportunité unique d'impact investing en EdTech africaine",
      "Marché EdTech africain en croissance de 25% par an",
      "Modèle scalable : 54 pays, 1.4 milliard de personnes",
      "Avantage first-mover sur le segment STEM mobile en Afrique",
      "Retour social sur investissement mesurable (ODD 4, 5, 9)",
      "Stratégie de sortie claire : acquisition ou introduction en bourse",
    ],
    cta: "Investir dans STEM FLOW",
  },
  {
    icon: GraduationCap,
    title: "Institutions Éducatives & ONG",
    color: "bg-secondary",
    points: [
      "Partenariat pédagogique gagnant-gagnant",
      "Intégration de STEM FLOW dans vos programmes scolaires",
      "Co-création de parcours certifiants STEM",
      "Tableaux de bord de suivi des élèves pour les enseignants",
      "Données d'apprentissage anonymisées pour la recherche",
      "Visibilité et reconnaissance sur la plateforme",
    ],
    cta: "Devenir partenaire",
  },
];

const benefits = [
  { icon: BarChart3, text: "Accès exclusif aux données d'impact et rapports détaillés" },
  { icon: Globe, text: "Visibilité auprès de millions d'apprenants africains" },
  { icon: Users, text: "Réseau exclusif de partenaires éducatifs et tech" },
  { icon: Sparkles, text: "Co-branding et mentions sur tous les supports" },
  { icon: Shield, text: "Contribution concrète aux ODD de l'ONU" },
  { icon: Heart, text: "Rapports d'impact personnalisés trimestriels" },
];

const partnerLogos = [
  { name: "Universités africaines", desc: "Partenariats académiques pour la validation des contenus" },
  { name: "Organisations internationales", desc: "AFD, UE, BAD pour le financement de l'impact" },
  { name: "Entreprises tech", desc: "Google, Microsoft, Meta pour le soutien technologique" },
  { name: "Fondations", desc: "Fondation Gates, Mastercard Foundation pour l'éducation" },
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
              LearnXScience — Partenariats & Investissement
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-partnerships-title">
              Construisons ensemble l'avenir des{" "}
              <span className="text-primary">technologies éducatives</span> en Afrique
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              LearnXScience recherche des partenaires stratégiques pour accélérer 
              le déploiement de STEM FLOW et toucher 10 millions d'apprenants d'ici 2030. 
              Incubateurs, investisseurs, institutions éducatives : rejoignez le mouvement.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" data-testid="button-demo-partners">
                Voir la démo de l'App
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
              du soutien stratégique et financier pour atteindre l'échelle panafricaine.
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
              Pourquoi s'associer à LearnXScience ?
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
                éducatif d'ampleur continentale et bénéficier d'avantages concrets 
                tout en contribuant à un impact social majeur.
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
                    <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Contactez-nous pour discuter des opportunités de partenariat 
                      et découvrir comment ensemble nous pouvons transformer 
                      l'éducation STEM en Afrique.
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
              Ils nous font déjà confiance
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              STEM FLOW s'appuie sur un réseau de partenaires engagés dans l'éducation 
              numérique et le développement des compétences en Afrique.
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
                    <Badge variant="secondary" className="text-xs mt-1">Communauté Tech</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Communauté des développeurs tchadiens fondée par Souleymane Mahamat Saleh. 
                  Code For Chad forme les jeunes au codage informatique, favorise l'innovation 
                  technologique et crée un écosystème numérique dynamique au Tchad. 
                  Un partenaire clé pour le déploiement de STEM FLOW en Afrique centrale.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Formation aux compétences numériques et au codage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Réseau de développeurs et mentors au Tchad</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Partenariat avec l'Ambassade des États-Unis au Tchad</span>
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
                    <h3 className="font-bold text-xl" data-testid="text-partner-60credits">60 Crédits</h3>
                    <Badge variant="secondary" className="text-xs mt-1">Communauté Éducative</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Communauté d'éducation financière et d'autonomisation des jeunes, 
                  animée par Cira Mamy Sow. 60 Crédits forme les étudiants à la gestion 
                  financière et à l'autonomisation intellectuelle et économique. 
                  Un partenaire essentiel pour l'impact social de STEM FLOW au Sénégal.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Éducation financière pour les étudiants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Autonomisation intellectuelle et économique des jeunes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Réseau d'étudiants engagés au Sénégal</span>
                  </li>
                </ul>
                <a href="https://www.facebook.com/share/1ac1GqCAG2/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full" data-testid="button-60credits-page">
                    <Globe className="mr-2 h-4 w-4" />
                    Découvrir 60 Crédits
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
              Partenaires Recherchés
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
            Que vous soyez incubateur, investisseur, institution éducative ou entreprise tech, 
            nous avons hâte d'explorer les synergies possibles pour transformer 
            l'éducation STEM en Afrique.
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
