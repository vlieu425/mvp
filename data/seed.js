// const pool = require('../server/db.js');
const data = require('./sampleData.js');
const { Pool } = require('pg');


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '',
  database: 'bark',
  port: 5432,
});

// Insert data into the 'locations' table
function insertLocations() {
  pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
      return;
    }
    pool.query('BEGIN', (err) => {
      if (err) {
        console.error('Error beginning transaction', err.stack);
        return;
      }
      data.locations.forEach((location) => {
        pool.query('INSERT INTO locations (name, address, lat, lng) VALUES ($1, $2, $3, $4)', [location.name, location.address, location.lat, location.lng], (err) => {
          if (err) {
            console.error('Error inserting location', err.stack);
            pool.query('ROLLBACK', (err) => {
              if (err) {
                console.error('Error rolling back transaction', err.stack);
              }
              client.release();
            });
            return;
          }
        });
      });
      pool.query('COMMIT', (err) => {
        if (err) {
          console.error('Error committing transaction', err.stack);
        }
        client.release();
        console.log('Locations inserted successfully.');
      });
    });
  });
}

// Insert data into the 'reviews' table
function insertReviews() {
  pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
      return;
    }
    pool.query('BEGIN', (err) => {
      if (err) {
        console.error('Error beginning transaction', err.stack);
        return;
      }
      data.reviews.forEach((review) => {
        pool.query('INSERT INTO reviews (location_id, username, email, review_body, rating, upvotes, downvotes, reported) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
          [review.locationID, review.userName, review.email, review.reviewBody, review.rating, review.upvote, review.downvote, review.report], (err) => {
          if (err) {
            console.error('Error inserting review', err.stack);
            pool.query('ROLLBACK', (err) => {
              if (err) {
                console.error('Error rolling back transaction', err.stack);
              }
              client.release();
            });
            return;
          }
        });
      });
      pool.query('COMMIT', (err) => {
        if (err) {
          console.error('Error committing transaction', err.stack);
        }
        client.release();
        console.log('Reviews inserted successfully.');
      });
    });
  });
}

// Run the functions to insert data
function main() {
  insertLocations();
  // insertReviews();
}

main();
