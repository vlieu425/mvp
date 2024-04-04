const locations = [
  {
    name: 'Golden Gate Park',
    address: '501 Stanyan St, San Francisco, CA 94117',
    lat: 37.7694,
    lng: -122.4862,
  },
  {
    name: 'Dolores Park',
    address: '19th St & Dolores St, San Francisco, CA 94114',
    lat: 37.7596,
    lng: -122.4269,
  },
  {
    name: 'Crissy Field',
    address: '1199 E Beach, San Francisco, CA 94129',
    lat: 37.8060,
    lng: -122.4545,
  },
  {
    name: 'Presidio Park',
    address: '103 Montgomery St, San Francisco, CA 94129',
    lat: 37.7986,
    lng: -122.4666,
  },
  {
    name: 'Alamo Square Park',
    address: 'Steiner St & Hayes St, San Francisco, CA 94117',
    lat: 37.7764,
    lng: -122.4346,
  },
  {
    name: 'Mission Dolores Park',
    address: 'Dolores St & 18th St, San Francisco, CA 94114',
    lat: 37.7596,
    lng: -122.4269,
  },
  {
    name: 'Yerba Buena Gardens',
    address: '750 Howard St, San Francisco, CA 94103',
    lat: 37.7849,
    lng: -122.4023,
  },
  {
    name: 'Washington Square Park',
    address: 'Filbert St & Stockton St, San Francisco, CA 94133',
    lat: 37.8003,
    lng: -122.4090,
  },
  {
    name: 'Glen Canyon Park',
    address: 'Elk St & Chenery St, San Francisco, CA 94127',
    lat: 37.7369,
    lng: -122.4407,
  },
  {
    name: 'Buena Vista Park',
    address: 'Buena Vista Ave W & Haight St, San Francisco, CA 94117',
    lat: 37.7679,
    lng: -122.4395,
  }
];

const reviews = [
  {
    locationID: 1,
    username: 'John',
    email: 'john@example.com',
    reviewBody: 'Great place to visit! My dog had a blast!',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 2,
    username: 'Jane',
    email: 'jane@example.com',
    reviewBody: 'Decent place, could be better. Not very pet friendly though.',
    rating: 4,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 3,
    username: 'Alice',
    email: 'alice@example.com',
    reviewBody: 'Amazing experience! They have a dedicated pet area.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 4,
    username: 'Bob',
    email: 'bob@example.com',
    reviewBody: 'Nice atmosphere. Pets are allowed on the patio.',
    rating: 4,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 5,
    username: 'Eve',
    email: 'eve@example.com',
    reviewBody: 'Not worth the visit. Not pet friendly at all.',
    rating: 2,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 6,
    username: 'Charlie',
    email: 'charlie@example.com',
    reviewBody: 'Highly recommended! They have a dog park nearby.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 7,
    username: 'David',
    email: 'david@example.com',
    reviewBody: 'Average place. Not much for pets.',
    rating: 3,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 8,
    username: 'Olivia',
    email: 'olivia@example.com',
    reviewBody: 'Absolutely loved it! They have a pet-friendly policy.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 9,
    username: 'Michael',
    email: 'michael@example.com',
    reviewBody: 'Could be improved. Not very pet friendly.',
    rating: 4,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 10,
    username: 'Sophia',
    email: 'sophia@example.com',
    reviewBody: 'Good experience overall. They have a pet-friendly patio.',
    rating: 4,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 1,
    username: 'Liam',
    email: 'liam@example.com',
    reviewBody: 'Awesome place! Perfect for pets.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 1,
    username: 'Emma',
    email: 'emma@example.com',
    reviewBody: 'Not impressed. Not pet friendly.',
    rating: 2,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 3,
    username: 'Noah',
    email: 'noah@example.com',
    reviewBody: 'Great spot! They have a dog park nearby.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 4,
    username: 'Ava',
    email: 'ava@example.com',
    reviewBody: 'Decent place. Could use more pet amenities.',
    rating: 3,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 5,
    username: 'William',
    email: 'william@example.com',
    reviewBody: 'Loved it! Very pet friendly.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 6,
    username: 'Olivia',
    email: 'olivia@example.com',
    reviewBody: 'Not recommended for pets. Limited space.',
    rating: 2,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 7,
    username: 'James',
    email: 'james@example.com',
    reviewBody: 'Good place. Pets allowed on the patio.',
    rating: 4,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 8,
    username: 'Isabella',
    email: 'isabella@example.com',
    reviewBody: 'Average experience. Not much for pets.',
    rating: 3,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 9,
    username: 'Benjamin',
    email: 'benjamin@example.com',
    reviewBody: 'Pet-friendly place. Highly recommended.',
    rating: 5,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  },
  {
    locationID: 10,
    username: 'Mia',
    email: 'mia@example.com',
    reviewBody: 'Could be better for pets. Limited amenities.',
    rating: 3,
    upvotes: 0,
    downvotes: 0,
    reported: false,
  }
];

module.exports = { locations, reviews };