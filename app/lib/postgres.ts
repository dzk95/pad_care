import { Pool } from "pg";

const connectionString = process.env.POSTGRES_URL;

declare global {
  var postgresPool: Pool | undefined;
}

export function getPostgresPool() {
  if (!connectionString) {
    throw new Error("Missing POSTGRES_URL environment variable.");
  }

  if (!globalThis.postgresPool) {
    globalThis.postgresPool = new Pool({
      connectionString,
      max: 5,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return globalThis.postgresPool;
}
