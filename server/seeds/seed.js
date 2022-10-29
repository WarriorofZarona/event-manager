const db = require('../config/connection');
// Import friend json here

db.once('open', async () => {
  // Add code for seeding here

  console.log('Friends seeded!');
  process.exit(0);
});
