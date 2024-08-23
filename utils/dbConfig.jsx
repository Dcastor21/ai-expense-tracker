import { neon } from "@neondatabase/serverless";
import { DrizzleError } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql, { schema });
