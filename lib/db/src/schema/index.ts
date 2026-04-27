import { pgTable, text, serial, varchar, numeric, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";

export const adminUsersTable = pgTable("admin_users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type AdminUser = typeof adminUsersTable.$inferSelect;
export type InsertAdminUser = typeof adminUsersTable.$inferInsert;

export const domainPricingTable = pgTable("domain_pricing", {
  id: serial("id").primaryKey(),
  tld: varchar("tld", { length: 50 }).notNull().unique(),
  register: numeric("register", { precision: 10, scale: 2 }).notNull().default("0"),
  renew: numeric("renew", { precision: 10, scale: 2 }).notNull().default("0"),
  transfer: numeric("transfer", { precision: 10, scale: 2 }).notNull().default("0"),
  sortOrder: integer("sort_order").notNull().default(0),
  enabled: boolean("enabled").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export type DomainPricing = typeof domainPricingTable.$inferSelect;
export type InsertDomainPricing = typeof domainPricingTable.$inferInsert;

export const formSubmissionsTable = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  formType: text("form_type").notNull(),
  data: jsonb("data").notNull(),
  submittedAt: timestamp("submitted_at", { withTimezone: true }).defaultNow(),
});

export type FormSubmission = typeof formSubmissionsTable.$inferSelect;
export type InsertFormSubmission = typeof formSubmissionsTable.$inferInsert;
