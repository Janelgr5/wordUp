const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  grade: {
    type: Sequelize.STRING
  },
  district: {
    type: Sequelize.STRING
  },
  school: {
    type: Sequelize.STRING
  }
})
