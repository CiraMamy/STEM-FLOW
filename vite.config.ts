import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const isDev = process.env.NODE_ENV !== "production";
const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig(async () => ({
  plugins: [
    react(),
    // Les plugins Replit restent optionnels : le projet fonctionne aussi
    // en local, sur Vercel, Netlify, Render ou tout hote Node.
    ...(isDev && isReplit
      ? [
          (await import("@replit/vite-plugin-runtime-error-modal")).default(),
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
          (await import("@replit/vite-plugin-dev-banner")).devBanner(),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    target: "es2020",
    cssTarget: "chrome87",
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    // Pas de manualChunks ici : decouper react/react-dom a la main casse
    // l'ordre d'initialisation des modules CommonJS interoperes et produit
    // une page blanche ("Cannot set properties of undefined"). Le decoupage
    // automatique de Vite respecte le graphe de dependances, et le vrai gain
    // vient deja du chargement des routes a la demande (React.lazy).
  },
  server: {
    fs: { strict: true, deny: ["**/.*"] },
  },
}));
