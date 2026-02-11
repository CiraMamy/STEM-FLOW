# LearnXScience - STEM FLOW Platform

## Overview

**LearnXScience** is a technology company specializing in the development of educational digital solutions and intelligent learning algorithms. The company develops AI-powered educational platforms using artificial intelligence, data science, and cognitive sciences.

**STEM FLOW** is LearnXScience's first application — an educational social network focused on STEM learning in Africa. It combines short-form video content (TikTok-style), community features (Discord-style), gamification, and AI personalization to make STEM education engaging and accessible via mobile devices.

The website serves as the official corporate showcase for LearnXScience and its flagship product STEM FLOW, providing information about the company, the platform, the team, vision, and partnership opportunities. It includes a waitlist signup system and contact form for potential partners and investors.

**Company relationship:** LearnXScience → STEM FLOW (like OpenAI → ChatGPT)

**Slogan:** Scroll. Learn. Level Up.
**Live App URL:** https://attached-assets-souleymanemaha2.replit.app
**Partners:** Code For Chad (codeforchad.net), 60 Crédits

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight router)
- **State Management:** TanStack React Query for server state
- **UI Components:** shadcn/ui component library built on Radix UI primitives
- **Styling:** Tailwind CSS with custom theme configuration
- **Build Tool:** Vite with React plugin

The frontend follows a pages-based structure with reusable components. Key directories:
- `client/src/pages/` - Route-level page components (home, project, application, vision, team, partnerships, contact)
- `client/src/components/ui/` - shadcn/ui component library
- `client/src/components/layout/` - Header and Footer layout components

### Backend Architecture
- **Framework:** Express.js 5 running on Node.js
- **Language:** TypeScript with ESM modules
- **API Pattern:** RESTful endpoints under `/api/` prefix
- **Build:** esbuild for production bundling

API endpoints:
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve contacts
- `POST /api/waitlist` - Join email waitlist

### Data Storage
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM with drizzle-zod for schema validation
- **Schema Location:** `shared/schema.ts`

Database tables:
- `users` - User accounts with username/password
- `contacts` - Contact form submissions
- `waitlist` - Email waitlist entries

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- Database schema definitions
- Zod validation schemas
- TypeScript type exports

### Development vs Production
- **Development:** Vite dev server with HMR, proxied through Express
- **Production:** Static files served from `dist/public`, server bundled to `dist/index.cjs`

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection pooling with `pg` package
- Session storage with `connect-pg-simple`

### UI Framework
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Plus Jakarta Sans, Inter, Merriweather, Fira Code fonts from Google Fonts

### Development Tools
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- Drizzle Kit for database migrations (`npm run db:push`)

### Key Runtime Dependencies
- `zod` - Runtime validation
- `react-hook-form` with `@hookform/resolvers` - Form handling
- `date-fns` - Date utilities
- `embla-carousel-react` - Carousel functionality
- `recharts` - Chart components