import { createServer } from "http";
import express, { type NextFunction, type Request, type Response } from "express";
import { apiRouter } from "./routes";

const app = express();
const isProd = process.env.NODE_ENV === "production";

app.set("trust proxy", 1);
app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false, limit: "100kb" }));

// En-tetes de securite de base (sans dependance supplementaire).
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  if (isProd) {
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
    );
  }
  next();
});

// Journalisation compacte des appels API.
app.use((req, res, next) => {
  if (!req.path.startsWith("/api")) return next();
  const start = Date.now();
  res.on("finish", () => {
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - start}ms`,
    );
  });
  next();
});

app.use("/api", apiRouter);

const server = createServer(app);

async function bootstrap() {
  if (isProd) {
    const { serveStatic } = await import("./vite");
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(app, server);
  }

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status ?? err.statusCode ?? 500;
    console.error("[error]", err);
    res
      .status(status)
      .json({ message: status === 500 ? "Erreur serveur" : err.message });
  });

  const port = Number(process.env.PORT ?? 5000);
  server.listen(port, "0.0.0.0", () => {
    console.log(`LearnXScience -> http://localhost:${port} (${isProd ? "production" : "dev"})`);
  });
}

bootstrap().catch((err) => {
  console.error(err);
  process.exit(1);
});
