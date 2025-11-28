import { DrizzleD1Database } from "drizzle-orm/d1";

type DrizzleDB = DrizzleD1Database;

export type Context = {
  Bindings: {
    DB: D1Database;
    JWT_SECRET: string;
    TURNSTILE_SCECRET: string;
  };
  Variables: {
    db: DrizzleDB;
  };
};

export interface Env {
  accountId: string;
  databaseId: string;
  token: string;
}
