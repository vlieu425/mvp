require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db');
const morgan = require('morgan');

const app = express();
app.listen(process.env.PORT, console.log(`listening on Port: ${process.env.PORT}`))

app.use(express.static(path.join(__dirname, "../dist")))
app.use(express.json());
app.use(morgan('dev'))

app.get('/api/locations', (req, res) => {
  db.query('SELECT * FROM locations', (err, result) => {
    if (err) {
      console.error('Error fetching locations: ', err);
      res.status(500).send('Error fetching locations');
    } else {
      res.send(result.rows);
    }
  });
})

app.get('/api/favorite/:locationId', (req, res) => {
  const locationId = req.params.locationId;
  db.query('SELECT favorite FROM locations WHERE location_id = $1', [locationId], (err, result) => {
    if (err) {
      console.error('Error fetching favorite status: ', err);
      res.status(500).send('Error fetching favorite status');
    } else {
      res.send(result.rows);
    }
  });
})

// app.get('/api/reviews/:locationId', (req, res) => {
//   const locationId = req.params.locationId;
//   console.log('locationId', locationId);
//   db.query('SELECT * FROM reviews WHERE location_id = $1', [locationId], (err, result) => {
//     if (err) {
//       console.error('Error fetching reviews: ', err);
//       res.status(500).send('Error fetching reviews');
//     } else {
//       res.send(result.rows);
//     }
//   });
// })



app.get('/api/reviews/:locationId?', (req, res) => {
  const locationId = req.params.locationId;
  if (locationId) {
    // If locationId is provided, fetch reviews for that location
    console.log('locationId', locationId);
    db.query('SELECT * FROM reviews WHERE location_id = $1', [locationId], (err, result) => {
      if (err) {
        console.error('Error fetching reviews: ', err);
        res.status(500).send('Error fetching reviews');
      } else {
        res.send(result.rows);
      }
    });
  } else {
    // If no locationId is provided, fetch all reviews
    db.query('SELECT * FROM reviews', (err, result) => {
      if (err) {
        console.error('Error fetching reviews: ', err);
        res.status(500).send('Error fetching reviews');
      } else {
        res.send(result.rows);
      }
    });
  }
});


app.post('/api/reviews', (req, res) => {
  const { location_id, rating, review } = req.body;
  db.query('INSERT INTO reviews (location_id, username, email, review_body, rating, upvotes, downvotes, reported) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [req.body.locationID, req.body.username, req.body.email, req.body.reviewBody, req.body.rating, req.body.upvote, req.body.downvote, req.body.report], (err) => {
    if (err) {
      console.error('Error inserting review: ', err);
      res.status(500).send('Error inserting review');
    } else {
      res.status(201).send('Review inserted successfully');
    }
  });
})

app.delete('/api/reviews/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;
  db.query('DELETE FROM reviews WHERE review_id = $1', [reviewId], (err) => {
    if (err) {
      console.error('Error deleting review: ', err);
      res.status(500).send('Error deleting review');
    } else {
      res.status(200).send('Review deleted successfully');
    }
  });
})

app.put('/api/favorite/:locationId', (req, res) => {
  const locationId = req.params.locationId;
  db.query('UPDATE locations SET favorite = NOT favorite WHERE location_id = $1', [locationId], (err) => {
    if (err) {
      console.error('Error updating favorite status: ', err);
      res.status(500).send('Error updating favorite status');
    } else {
      res.status(200).send('Favorite status updated successfully');
    }
  });


})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});