import { Pool } from 'pg';

// Create a connection pool for PostgreSQL
const pool = new Pool({
  user: 'postgres',           // PostgreSQL username
  host: 'localhost',      // PostgreSQL host
  database: 'strategic_degree', // Database name
  password: 'solutions360dbs',           // PostgreSQL password
  port: 5433,             // PostgreSQL port
});

// Function to query the database
export const db = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};

export default db;
