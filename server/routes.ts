import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const SITE_URL = "https://learnxscience.replit.app";

  app.get("/sitemap.xml", (_req, res) => {
    const pages = [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/projet", priority: "0.9", changefreq: "weekly" },
      { loc: "/application", priority: "0.9", changefreq: "weekly" },
      { loc: "/vision", priority: "0.8", changefreq: "monthly" },
      { loc: "/equipe", priority: "0.7", changefreq: "monthly" },
      { loc: "/partenariats", priority: "0.8", changefreq: "monthly" },
      { loc: "/contact", priority: "0.7", changefreq: "monthly" },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  app.get("/robots.txt", (_req, res) => {
    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

    res.header("Content-Type", "text/plain");
    res.send(robots);
  });
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json(contact);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Données invalides", details: error.errors });
      } else {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Erreur serveur" });
      }
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Error getting contacts:", error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const { email } = insertWaitlistSchema.parse(req.body);
      
      const exists = await storage.isEmailInWaitlist(email);
      if (exists) {
        res.status(409).json({ error: "Cet email est déjà inscrit" });
        return;
      }
      
      const entry = await storage.addToWaitlist(email);
      res.json(entry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Email invalide", details: error.errors });
      } else {
        console.error("Error adding to waitlist:", error);
        res.status(500).json({ error: "Erreur serveur" });
      }
    }
  });

  return httpServer;
}
