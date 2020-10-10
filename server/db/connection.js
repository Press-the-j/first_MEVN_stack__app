//$ MONK=A tiny layer that provides simple yet substantial usability improvements for MongoDB usage within Node.JS.

const monk = require('monk');
const connectionString = 'localhost/messageboard';
const db = monk(connectionString);

module.exports = db;
