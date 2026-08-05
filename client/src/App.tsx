import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { BackToTop } from "@/components/layout/BackToTop";
import Home from "@/pages/home";

// L'accueil est charge immediatement ; les autres routes sont scindees
// pour alleger le bundle initial.
const Project = lazy(() => import("@/pages/project"));
const Application = lazy(() => import("@/pages/application"));
const Vision = lazy(() => import("@/pages/vision"));
const Team = lazy(() => import("@/pages/team"));
const Partnerships = lazy(() => import("@/pages/partnerships"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function RouteFallback() {
  return (
    <div className="container py-32" role="status" aria-live="polite">
      <span className="sr-only">Chargement de la page…</span>
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="shimmer h-10 w-2/3 rounded-xl" />
        <div className="shimmer h-4 w-full rounded-lg" />
        <div className="shimmer h-4 w-5/6 rounded-lg" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="shimmer h-40 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projet" component={Project} />
        <Route path="/application" component={Application} />
        <Route path="/vision" component={Vision} />
        <Route path="/equipe" component={Team} />
        <Route path="/partenariats" component={Partnerships} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={200}>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-primary-foreground"
          >
            Aller au contenu principal
          </a>

          <ScrollToTop />

          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
              <Router />
            </main>
            <Footer />
          </div>

          <BackToTop />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
