const Sequelize = require('sequelize');

require('./models');

const db = new Sequelize('postgres://localhost:5432/wordUp', {
  logging: false
});


module.exports = db;
