const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wordUp', {
  logging: false
});

module.exports = db;
