import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import {
  Mail,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Clock,
  Globe,
  Zap,
} from "lucide-react";

const APP_URL = "https://attached-assets-souleymanemaha2.replit.app";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  type: z.string().min(1, "Veuillez sélectionner un type de demande"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactTypes = [
  { value: "waitlist", label: "Rejoindre la liste d'attente" },
  { value: "partnership", label: "Proposition de partenariat" },
  { value: "investment", label: "Opportunité d'investissement" },
  { value: "incubator", label: "Programme d'incubation / accélération" },
  { value: "education", label: "Institution éducative / ONG" },
  { value: "media", label: "Presse / Médias / Interview" },
  { value: "talent", label: "Candidature / Rejoindre l'équipe" },
  { value: "other", label: "Autre demande" },
];

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:contact@learnxscience.com", value: "contact@learnxscience.com" },
  { icon: Linkedin, label: "LinkedIn", href: "#", value: "linkedin.com/company/learnxscience" },
  { icon: Twitter, label: "Twitter / X", href: "#", value: "@learnxscience" },
  { icon: Instagram, label: "Instagram", href: "#", value: "@learnxscience" },
];

const faqs = [
  { q: "STEM FLOW est-il gratuit ?", a: "Oui, l'application est entièrement gratuite pour les apprenants. Nous proposons des modèles B2B et sponsoring pour les institutions et entreprises." },
  { q: "Dans quels pays l'app est-elle disponible ?", a: "STEM FLOW est actuellement en phase de bêta test et sera lancé d'abord en Afrique de l'Ouest francophone (2026), puis à l'échelle panafricaine." },
  { q: "Comment devenir créateur de contenu ?", a: "Contactez-nous via le formulaire en sélectionnant 'Candidature'. Nous recherchons des enseignants et experts STEM pour créer des micro-leçons." },
  { q: "Quel est le délai de réponse ?", a: "Nous répondons généralement sous 48 à 72 heures ouvrées. Pour les demandes urgentes, écrivez-nous directement par email." },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      type: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6" variant="outline" data-testid="badge-contact">
              <Mail className="h-3 w-3 mr-1" />
              LearnXScience — Contact & Collaboration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-contact-title">
              Rejoignez l'aventure{" "}
              <span className="text-primary">LearnXScience</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Que vous souhaitiez tester STEM FLOW, devenir partenaire, investir, 
              rejoindre l'équipe ou simplement en savoir plus, nous serions ravis d'échanger avec vous.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" data-testid="button-demo-contact">
                Tester l'App en attendant
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4" variant="secondary">
                Formulaire de Contact
              </Badge>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-form-title">
                Envoyez-nous un message
              </h2>

              {isSubmitted ? (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Merci pour votre message !</h3>
                    <p className="text-muted-foreground mb-4">
                      Nous avons bien reçu votre demande et vous répondrons sous 48 à 72 heures.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      En attendant, découvrez notre application :
                    </p>
                    <div className="flex flex-col gap-3">
                      <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full" data-testid="button-app-after-submit">
                          Tester l'Application
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" data-testid="button-new-message">
                        Envoyer un autre message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 md:p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom complet *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Votre nom"
                                    {...field}
                                    data-testid="input-name"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="votre@email.com"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Organisation</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Votre entreprise / institution"
                                    {...field}
                                    value={field.value ?? ""}
                                    data-testid="input-organization"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Type de demande *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-type">
                                      <SelectValue placeholder="Sélectionnez..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {contactTypes.map((type) => (
                                      <SelectItem key={type.value} value={type.value}>
                                        {type.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Décrivez votre demande, vos intérêts ou votre proposition..."
                                  rows={5}
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={mutation.isPending}
                          data-testid="button-submit"
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Envoyer le message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Badge className="mb-4" variant="outline">
                Coordonnées
              </Badge>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-coords-title">
                Autres moyens de nous contacter
              </h2>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover-elevate transition-colors"
                    data-testid={`contact-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-muted-foreground">{link.value}</div>
                    </div>
                  </a>
                ))}

                <Card className="border-0 shadow-sm mt-6">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium mb-2">Basés en Afrique</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          STEM FLOW est une startup panafricaine avec des équipes 
                          réparties sur le continent. Nous travaillons en remote-first 
                          pour toucher le plus grand nombre de pays.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium mb-2">Délai de réponse</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Nous répondons généralement sous 48 à 72 heures ouvrées. 
                          Pour les demandes urgentes, précisez-le dans votre message.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-primary/5 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-2">Testez l'application</div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          Découvrez STEM FLOW en action avant de nous contacter.
                        </p>
                        <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" data-testid="button-app-sidebar">
                            Ouvrir l'App
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="outline">
                <Globe className="h-3 w-3 mr-1" />
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold mb-4" data-testid="text-faq-title">
                Questions fréquentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2" data-testid={`text-faq-q-${index}`}>{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Rejoignez le mouvement STEM FLOW
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Ensemble, transformons l'éducation STEM en Afrique et 
            créons des opportunités pour des millions de jeunes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-cta-final-app">
                Tester l'Application
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Badge variant="outline" className="text-base px-6 py-2 border-primary-foreground/30 text-primary-foreground">
              Scroll. Learn. Level Up.
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
