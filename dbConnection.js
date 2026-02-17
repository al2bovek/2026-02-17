import postgres from "postgres";
import "dotenv/config";

export const sql = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
});

//function to test db connection

export const testConnection = async () => {
  try {
    await sql`SELECT 1 AS result`;
    console.log(`Successful connecting to database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.log(`Failed connection to database: ${process.env.DB_NAME}`, error);
    throw error;
  }
};

// .env
// PORT=3000
// NODE_ENV=development
// # database
// DB_HOST=postgres
// DB_PORT=5432
// DB_NAME=postgres
// DB_USER=postgres 
// DB_PASSWORD=postgres
// # authorisation
// JWT_SECRET=a-string-secret-at-least-256-bits-long
// JWT_EXPIRES_IN=90d
// JWT_COOKIE_EXPIRES_IN=90