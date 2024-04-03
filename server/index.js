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