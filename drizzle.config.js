import { Config } from "drizzle";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectionStrings: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
