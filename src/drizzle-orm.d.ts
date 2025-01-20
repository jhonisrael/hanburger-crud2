// filepath: src/types/drizzle-orm.d.ts
declare module 'drizzle-orm/sqlite' {
    import { Database } from 'sqlite3';
    export function drizzle(db: Database): any;
  }