const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('wordSort', {
  name: {
    type: Sequelize.STRING
  },
  spellingStage: {
    type: Sequelize.STRING
  },
  feature: {
    type: Sequelize.STRING
  },
  sortNumber: {
    type: Sequelize.INTEGER
  },
  patterns: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  words: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

// for emergent/letter naming stage patterns or words can be pictures or a mix of words and pictures
// This model may need to be stored in a noSQL database?
