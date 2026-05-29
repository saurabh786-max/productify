import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../models/schema.js"

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
    console.log("Database connected successfully !!");
});

pool.on("error", (err) => {
    console.log("Database connection error:", err);
});

const db = drizzle({client:pool, schema});

export default db;