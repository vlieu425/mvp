const locations = [
  {
    name: 'Golden Gate Park',
    address: '501 Stanyan St, San Francisco, CA 94117',
  },
  {
    name: 'Dolores Park',
    address: '19th St & Dolores St, San Francisco, CA 94114',
  },
  {
    name: 'Crissy Field',
    address: '1199 E Beach, San Francisco, CA 94129',
  },
  {
    name: 'Presidio Park',
    address: '103 Montgomery St, San Francisco, CA 94129',
  },
  {
    name: 'Alamo Square Park',
    address: 'Steiner St & Hayes St, San Francisco, CA 94117',
  },
  {
    name: 'Mission Dolores Park',
    address: 'Dolores St & 18th St, San Francisco, CA 94114',
  },
  {
    name: 'Yerba Buena Gardens',
    address: '750 Howard St, San Francisco, CA 94103',
  },
  {
    name: 'Washington Square Park',
    address: 'Filbert St & Stockton St, San Francisco, CA 94133',
  },
  {
    name: 'Glen Canyon Park',
    address: 'Elk St & Chenery St, San Francisco, CA 94127',
  },
  {
    name: 'Buena Vista Park',
    address: 'Buena Vista Ave W & Haight St, San Francisco, CA 94117',
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
  }
];

module.exports = { locations, reviews };