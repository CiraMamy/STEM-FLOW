/**
 * Point d'entree serverless pour Vercel.
 *
 * Vercel ne fait pas tourner de serveur Node permanent : chaque appel a
 * /api/* invoque cette fonction. On y monte uniquement le routeur API ;
 * le client est servi comme un site statique depuis dist/public.
 *
 * Le serveur Express complet (server/index.ts) reste utilise en local et
 * sur les hebergeurs classiques (Render, Railway, VPS...).
 */
import express from "express";
import { apiRouter } from "../server/routes";

const app = express();

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false, limit: "100kb" }));

app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use("/api", apiRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

export default app;
