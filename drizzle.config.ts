// import type { Config } from "drizzle-kit";

// export default {
//   dialect: "postgresql", // Specify the database dialect
//   schema: "./drizzle/schema.ts", // Localização do esquema
//   out: "./drizzle/migrations",  // Pasta de migrações
// } satisfies Config;

import type { Config } from "drizzle-kit";
import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

const config: Config = {
  dialect: "sqlite",
  schema: ["./drizzle/schema.ts"],
  out: "./drizzle",
  driver: "durable-sqlite",
    
};

export default config;