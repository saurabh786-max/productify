import { relations } from "drizzle-orm";
import { pgTable, timestamp } from "drizzle-orm/pg-core";
import { integer, varchar, uuid, text } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 100 }).notNull(),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title",{ length: 355 }).notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
});

export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: varchar("content", { length: 1500 }).notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  productsId: uuid("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});

// users Relations: A user can have many products and many comments
// many(), means one user can have multiple related records

export const usersRelation = relations(users, ({ many }) => ({
  products: many(products),
  comments: many(comments),
}));

// products relations: a products belong to one user and can have many comments
// one() means a single related record, many() means multiple related records
export const productRelation = relations(products, ({ many, one }) => ({
  users: one(users, { fields: [products.userId], references: [users.id] }),
  // "fields" = the foreign key column in this table(products.userId),
  // 'references' = the primary key colum in the related table (users.id)
  comments: many(comments),
}));

export const commentRelation = relations(comments, ({ one }) => ({
  users: one(users, { fields: [comments.userId], references: [users.id] }),
  products: one(products, {
    fields: [comments.productsId],
    references: [products.id],
  }),
}));
