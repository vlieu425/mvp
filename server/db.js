const { Pool } = require('pg');

// console.log(process.env.POSTGRES_DB);

// Create a new pool instance with your database connection details
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT || 5432,
});


// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  // Release the client when done
  release();
});

// Export the pool for use in other modules
module.exports = pool;