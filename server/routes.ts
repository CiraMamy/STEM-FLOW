import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertWaitlistSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
