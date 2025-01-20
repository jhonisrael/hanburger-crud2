import { drizzle } from "drizzle-orm/sqlite";
import sqlite3 from "sqlite3";

const sqlite = new sqlite3.Database("./drizzle/db.sqlite");
export const db = drizzle(sqlite);
