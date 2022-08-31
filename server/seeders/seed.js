const db = require('../config/connection');
const { Profile, Team } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const teamSeeds = require('./teamSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
