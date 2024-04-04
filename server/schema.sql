-- Create the database
CREATE DATABASE Bark;

-- Connect to the database
\c bark;


-- Create the locations table
CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  name TEXT,
  address TEXT,
  lat FLOAT,
  lng FLOAT
);

-- Create the reviews table
CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  location_id INTEGER REFERENCES locations(location_id),
  username TEXT,
  email TEXT,
  review_body TEXT,
  rating INTEGER,
  upvotes INTEGER DEFAULT 0,
  downvotes INTEGER DEFAULT 0,
  reported BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

