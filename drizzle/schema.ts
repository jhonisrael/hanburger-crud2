import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// export const hamburgers = sqliteTable("hamburgers", {
//   id: integer("id").primaryKey().autoIncrement(),
//   name: text("name").notNull(),
//   price: real("price").notNull(),
//   description: text("description"),
// });

export const hamburgers = sqliteTable("hamburgers", {
  id: integer("id").primaryKey().notNull(), 
  name: text("name").notNull(),
  price: real("price").notNull(),
  description: text("description"),
});