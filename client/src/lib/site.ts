export const APP_URL = "https://steamflow-wxw3.onrender.com/auth";
export const SITE_URL = "https://learnxscience.com";
export const CONTACT_EMAIL = "contact.equipe.learnxscience@gmail.com";
export const SLOGAN = "Scroll. Learn. Level Up.";

export const NAV_LINKS = [
  { id: "accueil", href: "/", label: "Accueil" },
  { id: "projet", href: "/projet", label: "Le Projet" },
  { id: "application", href: "/application", label: "L'Application" },
  { id: "vision", href: "/vision", label: "Vision & Impact" },
  { id: "equipe", href: "/equipe", label: "L'Équipe" },
  { id: "partenariats", href: "/partenariats", label: "Partenariats" },
  { id: "contact", href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/learnxscience" },
  { id: "email", label: "E-mail", href: `mailto:${CONTACT_EMAIL}` },
] as const;
