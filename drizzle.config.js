export default {
  dialect: "postgresql",
  scheme: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
