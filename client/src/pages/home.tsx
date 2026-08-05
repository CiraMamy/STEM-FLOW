import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Beaker,
  BookOpen,
  Brain,
  Cpu,
  Database,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageCircle,
  Play,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Aurora } from "@/components/ui/aurora";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { useAnimatedCounter } from "@/hooks/use-scroll-reveal";
import { useSEO } from "@/hooks/use-seo";
import { APP_URL, SLOGAN } from "@/lib/site";

const disciplines = [
  "Mathématiques", "Physique", "Informatique", "Biologie", "Chimie",
  "Ingénierie", "Robotique", "Astronomie", "Data Science", "Électronique",
];

const pillars = [
  {
    icon: Play,
    title: "Vidéos courtes éducatives",
    description:
      "Des micro-leçons STEM de 30 à 90 secondes au format vertical. Swipe pour découvrir, like pour sauvegarder, commente pour échanger avec la communauté.",
    tone: "text-primary bg-primary/10 ring-primary/20",
  },
  {
    icon: Users,
    title: "Communautés STEM",
    description:
      "Des salons thématiques inspirés de Discord pour chaque discipline : mathématiques, physique, informatique, biologie, ingénierie et plus.",
    tone: "text-secondary bg-secondary/10 ring-secondary/20",
  },
  {
    icon: Trophy,
    title: "Gamification avancée",
    description:
      "Système XP, badges de compétences, classements nationaux, battles entre écoles, challenges quotidiens et séries d'apprentissage.",
    tone: "text-accent bg-accent/10 ring-accent/20",
  },
  {
    icon: Brain,
    title: "IA personnalisée",
    description:
      "Un algorithme d'intelligence artificielle qui s'adapte à ton niveau, tes préférences et ton rythme pour créer un parcours sur mesure.",
    tone: "text-chart-4 bg-chart-4/10 ring-chart-4/20",
  },
];

const problems = [
  {
    icon: Target,
    title: "Accès limité à l'éducation STEM",
    description:
      "Seulement 2 % des étudiants africains poursuivent des études STEM, contre 20 % en Asie et 15 % en Europe. L'Afrique forme moins de 25 % des ingénieurs nécessaires.",
  },
  {
    icon: TrendingUp,
    title: "Désengagement des jeunes",
    description:
      "78 % des jeunes africains passent plus de 3 h par jour sur leur smartphone, principalement sur les réseaux sociaux. Ce temps peut devenir un levier d'apprentissage.",
  },
  {
    icon: Lightbulb,
    title: "Potentiel inexploité",
    description:
      "L'Afrique compte 60 % de sa population de moins de 25 ans, soit le plus grand vivier de talents au monde, mais les outils éducatifs adaptés manquent cruellement.",
  },
];

const keyNumbers = [
  { value: 1.4, suffix: " Md", label: "d'Africains d'ici 2030", icon: Globe, isDecimal: true },
  { value: 60, suffix: " %", label: "ont moins de 25 ans", icon: Users, isDecimal: false },
  { value: 500, suffix: " M+", label: "de smartphones en Afrique", icon: Smartphone, isDecimal: false },
  { value: 2, suffix: " %", label: "en filière STEM", icon: GraduationCap, isDecimal: false },
  { value: 130, suffix: " Md$", label: "marché EdTech mondial", icon: BarChart3, isDecimal: false },
  { value: 54, suffix: "", label: "pays ciblés", icon: Target, isDecimal: false },
];

const advantages = [
  { icon: Smartphone, text: "App mobile-first optimisée pour les réseaux africains" },
  { icon: BookOpen, text: "Contenu multilingue : français, anglais et langues locales" },
  { icon: Wifi, text: "Mode hors-ligne pour les zones à faible connectivité" },
  { icon: Shield, text: "Environnement sécurisé et modéré pour les apprenants" },
  { icon: Rocket, text: "Parcours progressifs du débutant à l'expert" },
  { icon: GraduationCap, text: "Certifications reconnues par nos partenaires éducatifs" },
];

const companyPillars = [
  {
    icon: Brain,
    title: "Intelligence artificielle",
    description:
      "Algorithmes éducatifs capables de personnaliser l'apprentissage et d'analyser les progrès en temps réel.",
  },
  {
    icon: Database,
    title: "Science des données",
    description:
      "Analyse comportementale et cognitive pour optimiser les parcours d'apprentissage de chaque apprenant.",
  },
  {
    icon: Cpu,
    title: "Sciences cognitives",
    description:
      "Modèles d'engagement inspirés des neurosciences pour maximiser la rétention et la compréhension.",
  },
];

const beliefs = [
  { icon: Sparkles, text: "Chaque minute en ligne peut devenir une opportunité de progression." },
  { icon: Brain, text: "L'intelligence artificielle peut démocratiser l'excellence académique." },
  { icon: Globe, text: "L'Afrique peut devenir productrice de technologies éducatives, pas seulement consommatrice." },
];

function AnimatedStat({
  value, suffix, label, icon: Icon, isDecimal,
}: (typeof keyNumbers)[number]) {
  const numericValue = isDecimal ? Math.round(value * 10) : value;
  const { ref, count } = useAnimatedCounter(numericValue, 1800);
  const display = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <div
      ref={ref}
      className="lift card-gradient-border rounded-2xl border border-border/60 bg-card/60 p-5 text-center backdrop-blur"
    >
      <Icon className="mx-auto mb-3 h-5 w-5 text-primary" aria-hidden="true" />
      <div className="font-display text-2xl font-bold tabular-nums md:text-3xl" data-testid={`stat-value-${value}`}>
        {display}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-1.5 text-xs leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-10">
      <Aurora />

      <div className="container relative py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Badge
              variant="outline"
              className="mb-7 gap-2 rounded-full border-primary/25 bg-card/60 px-4 py-2 text-xs font-medium backdrop-blur"
              data-testid="badge-hero"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              LearnXScience — Technologies éducatives intelligentes
            </Badge>
          </div>

          <h1 className="animate-slide-up font-display font-bold text-balance" data-testid="text-hero-title">
            Transformer l'engagement numérique en{" "}
            <span className="text-gradient">progression académique</span>
          </h1>

          <p
            className="animate-slide-up mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg"
            style={{ animationDelay: "150ms" }}
          >
            <span className="font-semibold text-foreground">LearnXScience</span> conçoit des algorithmes
            éducatifs capables de personnaliser l'apprentissage, d'analyser les progrès et de convertir le
            temps passé sur mobile en compétences STEM réelles.
          </p>

          <p
            className="animate-slide-up mt-6 font-display text-xl font-bold tracking-tight md:text-2xl"
            style={{ animationDelay: "280ms" }}
            data-testid="text-slogan"
          >
            <span className="text-gradient">{SLOGAN}</span>
          </p>

          <div
            className="animate-slide-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "420ms" }}
          >
            <Button asChild size="lg" className="group h-12 rounded-full px-7 text-base" data-testid="button-try-app">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Découvrir STEM FLOW
                <ArrowUpRight className="ml-1.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border/70 bg-card/50 px-7 text-base backdrop-blur"
              data-testid="button-waitlist"
            >
              <Link href="/contact">Rejoindre la liste d'attente</Link>
            </Button>
          </div>

          <dl
            className="animate-slide-up mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8"
            style={{ animationDelay: "560ms" }}
          >
            {[
              { v: "10 M+", l: "apprenants ciblés d'ici 2030" },
              { v: "54", l: "pays africains visés" },
              { v: "100 %", l: "gratuit pour les apprenants" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-[0.7rem] leading-snug text-muted-foreground md:text-xs">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function DisciplineMarquee() {
  const items = [...disciplines, ...disciplines];
  return (
    <div className="marquee-track relative border-y border-border/60 bg-muted/30 py-5 mask-fade-x" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-3">
        {items.map((d, i) => (
          <span
            key={`${d}-${i}`}
            className="whitespace-nowrap rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Home() {
  useSEO({
    title: "Technologies éducatives intelligentes — STEM FLOW Africa",
    description:
      "LearnXScience développe des systèmes d'IA appliqués à l'éducation en Afrique. STEM FLOW est un réseau social éducatif STEM avec vidéos courtes, gamification et IA personnalisée. Scroll. Learn. Level Up.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <DisciplineMarquee />

      {/* Expertise */}
      <Section>
        <SectionHeading
          eyebrow="Notre expertise"
          eyebrowIcon={Beaker}
          title={<>À l'intersection de l'IA, des maths et de la <span className="text-gradient">pédagogie</span></>}
          description="LearnXScience est une entreprise technologique spécialisée dans le développement de solutions numériques éducatives et d'algorithmes d'apprentissage intelligents."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {companyPillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 120}>
              <Card className="lift card-gradient-border h-full border-border/60 bg-card/60 backdrop-blur">
                <CardContent className="p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                    <pillar.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold">{pillar.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* STEM FLOW - bento */}
      <Section muted>
        <SectionHeading
          eyebrow="Notre première innovation"
          eyebrowIcon={Rocket}
          title={<>STEM FLOW — le réseau social <span className="text-gradient">éducatif</span></>}
          description="Un réseau social mobile-first qui combine feed vidéo interactif, salons communautaires STEM, gamification, IA de personnalisation et battles entre écoles. STEM FLOW transforme le temps de scrolling en compétences mesurables."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 90}>
              <Card className="lift card-gradient-border h-full border-border/60 bg-card/70 backdrop-blur">
                <CardContent className="p-6">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${pillar.tone}`}>
                    <pillar.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold" data-testid={`text-pillar-title-${i}`}>
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={360}>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="group h-12 rounded-full px-7" data-testid="button-try-stemflow">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Tester STEM FLOW
                <ArrowUpRight className="ml-1.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Chiffres */}
      <Section className="py-16 md:py-20 lg:py-24">
        <SectionHeading
          title="L'opportunité africaine en chiffres"
          description="Pourquoi l'Afrique a besoin de LearnXScience maintenant."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {keyNumbers.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 70}>
              <AnimatedStat {...stat} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Pourquoi */}
      <Section muted>
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Notre raison d'exister"
              eyebrowIcon={Globe}
              title={<>Pourquoi <span className="text-gradient">LearnXScience</span> ?</>}
              description="L'éducation traditionnelle ne tient pas compte des usages numériques réels des jeunes, de la personnalisation cognitive, de l'engagement comportemental, ni de la data comme levier d'amélioration."
            />

            <ScrollReveal direction="left" delay={120}>
              <div className="mt-8 flex gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-[0.95rem] font-medium leading-relaxed text-pretty">
                  Pendant que les jeunes passent des heures à scroller, le système éducatif reste statique.
                  Nous existons pour transformer les usages numériques en leviers d'apprentissage intelligent.
                </p>
              </div>
            </ScrollReveal>

            <ul className="mt-8 space-y-6">
              {problems.map((problem, i) => (
                <ScrollReveal key={problem.title} direction="left" delay={i * 130}>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destructive/10 ring-1 ring-destructive/20">
                      <problem.icon className="h-5 w-5 text-destructive" aria-hidden="true" />
                    </span>
                    <span>
                      <h3 className="font-display font-semibold">{problem.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
                    </span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal direction="right">
            <div className="relative lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-chart-4/15 to-secondary/20 blur-2xl"
              />
              <Card className="relative overflow-hidden border-border/60 bg-card/80 shadow-elevated backdrop-blur">
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                    <Heart className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display font-bold">Nous croyons que…</h3>

                  <ul className="mt-6 space-y-4">
                    {beliefs.map((b) => (
                      <li key={b.text} className="flex gap-3">
                        <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-muted-foreground text-pretty">{b.text}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="mt-8 w-full rounded-full" data-testid="button-try-solution">
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                      Découvrir STEM FLOW
                      <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Avantages */}
      <Section>
        <SectionHeading
          eyebrow="Avantages"
          eyebrowIcon={Rocket}
          title={<>Conçu pour l'Afrique, <span className="text-gradient">par l'Afrique</span></>}
          description="Chaque fonctionnalité de STEM FLOW a été pensée pour les réalités du continent."
        />
        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, i) => (
            <ScrollReveal key={item.text} delay={i * 80}>
              <li className="lift flex h-full items-start gap-3.5 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <item.icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
                </span>
                <span className="mt-1.5 text-sm leading-relaxed">{item.text}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-chart-4" />
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-20" />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 left-1/2 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/30 blur-[110px]"
        />

        <div className="container relative text-center">
          <ScrollReveal>
            <h2 className="mx-auto max-w-3xl font-display font-bold text-primary-foreground text-balance" data-testid="text-cta-title">
              Construire les technologies éducatives de demain
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 text-pretty md:text-lg">
              LearnXScience développe des algorithmes éducatifs exportables à l'international.
              Découvrez STEM FLOW, notre première innovation, et rejoignez le mouvement.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="h-12 rounded-full px-7 text-base" data-testid="button-cta-try">
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  Tester STEM FLOW
                  <ArrowUpRight className="ml-1.5 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-7 text-base text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
              >
                <Link href="/projet">
                  En savoir plus
                  <ArrowRight className="ml-1.5 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-primary-foreground/70">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Partenaires, écoles et investisseurs : parlons-en.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
