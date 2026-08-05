import fs from "fs";
import path from "path";
import express, { type Express } from "express";
import type { Server } from "http";

/**
 * Racine du projet. On s'appuie sur process.cwd() plutot que sur
 * import.meta.dirname : le bundle serveur est emis en CJS et import.meta
 * y serait vide. Les scripts npm sont lances depuis la racine.
 */
const ROOT = process.cwd();

/** Monte le dev-server Vite en middleware (HMR) pendant le developpement. */
export async function setupVite(app: Express, server: Server) {
  const { createServer, createLogger } = await import("vite");
  const logger = createLogger();
  const vite = await createServer({
    configFile: path.resolve(ROOT, "vite.config.ts"),
    server: { middlewareMode: true, hmr: { server } },
    appType: "custom",
    customLogger: {
      ...logger,
      error: (msg, options) => {
        logger.error(msg, options);
        process.exit(1);
      },
    },
  });

  app.use(vite.middlewares);

  // Express 5 n'accepte plus le chemin "*" : on utilise un middleware
  // sans chemin et on laisse passer les routes API non trouvees.
  app.use(async (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    try {
      const templatePath = path.resolve(ROOT, "client", "index.html");
      const template = await fs.promises.readFile(templatePath, "utf-8");
      const html = await vite.transformIndexHtml(req.originalUrl, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (err) {
      vite.ssrFixStacktrace(err as Error);
      next(err);
    }
  });
}

/** Sert le build statique en production. */
export function serveStatic(app: Express) {
  const distPath = path.resolve(ROOT, "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Build client introuvable: ${distPath}. Lancez "npm run build" d'abord.`,
    );
  }

  app.use(
    express.static(distPath, {
      index: false,
      setHeaders: (res, filePath) => {
        // Les assets Vite sont hashes -> cache long. index.html -> jamais cache.
        if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
      },
    }),
  );

  app.use((req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.setHeader("Cache-Control", "no-cache");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
