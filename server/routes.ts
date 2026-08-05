import { Router, type NextFunction, type Request, type Response } from "express";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { insertContactSchema, insertWaitlistSchema } from "@shared/schema";
import { storage } from "./storage";

const contactPayload = insertContactSchema.extend({
  name: z.string().trim().min(2, "Nom trop court").max(120),
  email: z.string().trim().email("Adresse e-mail invalide").max(200),
  organization: z.string().trim().max(160).optional().nullable(),
  type: z.string().trim().min(2).max(60),
  message: z.string().trim().min(10, "Message trop court").max(4000),
}).extend({
  // Honeypot: les bots remplissent les champs caches, pas les humains.
  website: z.string().max(0).optional(),
});

const waitlistPayload = insertWaitlistSchema.extend({
  email: z.string().trim().toLowerCase().email("Adresse e-mail invalide").max(200),
});

/** Rate limiter minimaliste a fenetre glissante, sans dependance externe. */
function rateLimit(max: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip ?? "unknown";
    const now = Date.now();
    const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
    if (recent.length >= max) {
      res
        .status(429)
        .json({ message: "Trop de requetes. Reessayez dans quelques minutes." });
      return;
    }
    recent.push(now);
    hits.set(key, recent);
    if (hits.size > 5000) hits.clear();
    next();
  };
}

export const apiRouter = Router();

apiRouter.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

apiRouter.post("/contacts", rateLimit(5, 10 * 60_000), async (req, res) => {
  const parsed = contactPayload.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: fromZodError(parsed.error).toString() });
    return;
  }
  const { website, ...data } = parsed.data;
  if (website) {
    res.status(202).json({ ok: true }); // on ignore silencieusement les bots
    return;
  }
  const contact = await storage.createContact(data);
  res.status(201).json(contact);
});

apiRouter.get("/contacts", async (req, res) => {
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.get("x-admin-token") !== token) {
    res.status(401).json({ message: "Non autorise" });
    return;
  }
  res.json(await storage.listContacts());
});

apiRouter.post("/waitlist", rateLimit(5, 10 * 60_000), async (req, res) => {
  const parsed = waitlistPayload.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ message: fromZodError(parsed.error).toString() });
    return;
  }
  const entry = await storage.joinWaitlist(parsed.data);
  res.status(201).json({ id: entry.id, email: entry.email });
});
