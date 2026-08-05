import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  contacts,
  waitlist,
  type Contact,
  type InsertContact,
  type InsertWaitlist,
  type Waitlist,
} from "@shared/schema";

export interface IStorage {
  createContact(data: InsertContact): Promise<Contact>;
  listContacts(): Promise<Contact[]>;
  joinWaitlist(data: InsertWaitlist): Promise<Waitlist>;
  findWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
}

/**
 * In-memory fallback. Lets the site run locally (and in preview
 * deployments) without a PostgreSQL instance. Data is not persisted.
 */
class MemoryStorage implements IStorage {
  private contactRows: Contact[] = [];
  private waitlistRows: Waitlist[] = [];

  async createContact(data: InsertContact): Promise<Contact> {
    const row = {
      id: randomUUID(),
      createdAt: new Date(),
      organization: data.organization ?? null,
      ...data,
    } as Contact;
    this.contactRows.push(row);
    return row;
  }

  async listContacts(): Promise<Contact[]> {
    return [...this.contactRows].sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  async joinWaitlist(data: InsertWaitlist): Promise<Waitlist> {
    const existing = await this.findWaitlistByEmail(data.email);
    if (existing) return existing;
    const row: Waitlist = { id: randomUUID(), createdAt: new Date(), ...data };
    this.waitlistRows.push(row);
    return row;
  }

  async findWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return this.waitlistRows.find(
      (w) => w.email.toLowerCase() === email.toLowerCase(),
    );
  }
}

class PostgresStorage implements IStorage {
  constructor(private db: NodePgDatabase) {}

  async createContact(data: InsertContact): Promise<Contact> {
    const [row] = await this.db.insert(contacts).values(data).returning();
    return row;
  }

  async listContacts(): Promise<Contact[]> {
    return this.db.select().from(contacts);
  }

  async joinWaitlist(data: InsertWaitlist): Promise<Waitlist> {
    const [row] = await this.db
      .insert(waitlist)
      .values(data)
      .onConflictDoNothing({ target: waitlist.email })
      .returning();
    if (row) return row;
    const existing = await this.findWaitlistByEmail(data.email);
    if (!existing) throw new Error("Waitlist insert failed");
    return existing;
  }

  async findWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    const [row] = await this.db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, email))
      .limit(1);
    return row;
  }
}

function createStorage(): IStorage {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.warn(
      "[storage] DATABASE_URL absent - stockage en memoire. " +
        "Les soumissions seront perdues au redemarrage.",
    );
    return new MemoryStorage();
  }
  const pool = new pg.Pool({
    connectionString: url,
    ssl: url.includes("localhost") ? undefined : { rejectUnauthorized: false },
  });
  pool.on("error", (err) => console.error("[storage] pool error", err));
  return new PostgresStorage(drizzle(pool));
}

export const storage: IStorage = createStorage();
