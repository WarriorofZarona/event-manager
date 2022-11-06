const db = require('../config/connection');
const { Person } = require('../models');

const peopleData = require('./people.json');

db.once('open', async () => {
  await Person.deleteMany({});

  const people = await Person.insertMany(peopleData);

  console.log('Friends seeded!');
  process.exit(0);
});
