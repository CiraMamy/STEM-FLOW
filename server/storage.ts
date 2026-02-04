import { type User, type InsertUser, type Contact, type InsertContact, type Waitlist, type InsertWaitlist } from "@shared/schema";
import { users, contacts, waitlist } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  addToWaitlist(email: string): Promise<Waitlist>;
  isEmailInWaitlist(email: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async addToWaitlist(email: string): Promise<Waitlist> {
    const result = await db.insert(waitlist).values({ email }).returning();
    return result[0];
  }

  async isEmailInWaitlist(email: string): Promise<boolean> {
    const result = await db.select().from(waitlist).where(eq(waitlist.email, email));
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
