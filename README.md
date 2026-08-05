# LearnXScience — Site officiel

Site vitrine de **LearnXScience** et de son application **STEM FLOW**, le réseau
social éducatif STEM pour l'Afrique.

> Scroll. Learn. Level Up.

## Stack

| Couche | Technologies |
| --- | --- |
| Front | React 18, TypeScript, Vite 7, Tailwind CSS, shadcn/ui (Radix), Wouter, TanStack Query |
| Back | Express 5, TypeScript (ESM), Zod |
| Données | PostgreSQL via Drizzle ORM — avec repli automatique en mémoire |
| Build | Vite (client) + esbuild (serveur), sortie dans `dist/` |

## Démarrage

```bash
npm install
cp .env.example .env      # optionnel : sans DATABASE_URL, stockage en mémoire
npm run dev               # http://localhost:5000
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur Express + Vite en mode HMR |
| `npm run build` | Build client (`dist/public`) + serveur (`dist/index.cjs`) |
| `npm start` | Lance le build de production |
| `npm run check` | Vérification TypeScript |
| `npm run db:push` | Applique le schéma Drizzle à la base |

## API

| Méthode | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Sonde de disponibilité |
| `POST` | `/api/contacts` | Formulaire de contact (validé, honeypot, 5 req./10 min) |
| `GET` | `/api/contacts` | Liste des messages — exige l'en-tête `x-admin-token` |
| `POST` | `/api/waitlist` | Inscription à la liste d'attente (idempotent sur l'e-mail) |

## Structure

```
client/          Application React
  src/components/layout   Header, Footer, ScrollToTop, BackToTop
  src/components/theme    Thème clair/sombre (contexte + bouton)
  src/components/ui       shadcn/ui + Aurora, Section, ScrollReveal
  src/pages               Une page par route
  public                  robots.txt, sitemap.xml, manifest, logo
server/          API Express + service statique / middleware Vite
shared/          Schéma Drizzle et types partagés client/serveur
```

## Déploiement

Le projet ne dépend d'aucune plateforme en particulier. Les plugins Replit ne
se chargent qu'en développement et uniquement si `REPL_ID` est défini.

### Vercel

Le dépôt est prêt pour Vercel : `vercel.json` est déjà configuré et `api/index.ts`
expose l'API sous forme de fonction serverless.

1. Sur vercel.com, **Add New → Project**, importez `CiraMamy/STEM-FLOW`.
2. Ne touchez à aucun réglage de build : `vercel.json` s'en charge.
3. Ajoutez les variables d'environnement puis déployez.

| Variable | Obligatoire | Rôle |
| --- | --- | --- |
| `DATABASE_URL` | **oui** | PostgreSQL (Vercel Postgres, Neon, Supabase…) |
| `ADMIN_TOKEN` | oui | Protège `GET /api/contacts` |

> **`DATABASE_URL` n'est pas optionnelle sur Vercel.** En serverless, chaque
> appel démarre une instance neuve : le stockage de repli en mémoire perdrait
> silencieusement chaque message de contact. Le serveur le signale par une
> erreur dans les logs. Même remarque pour la limitation de débit, dont le
> compteur est par instance — passez à Vercel KV ou Upstash si le volume
> le justifie.

Une fois la base créée, appliquez le schéma depuis votre machine :

```bash
DATABASE_URL="postgres://..." npm run db:push
```

### Hébergeur Node classique (Render, Railway, VPS)

```bash
npm ci && npm run build && npm start
```

Variables d'environnement : `DATABASE_URL`, `ADMIN_TOKEN`, `PORT`.
Avant la mise en ligne, remplacez `https://learnxscience.com` par le domaine
réel dans `client/index.html`, `client/src/lib/site.ts`, `client/public/robots.txt`
et `client/public/sitemap.xml`.
