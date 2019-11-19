const Sequelize = require('sequelize');
const db = require('../index');
const User = require('./user');
const InventoryResult = require('./inventoryResult');
const SpellingInventory = require('./spellingInventory');
const WordSort = require('./wordSort');

// ADD MODEL ASSOCIATIONS HERE

module.exports = {
  db,
  User,
  InventoryResult,
  SpellingInventory,
  WordSort
}
