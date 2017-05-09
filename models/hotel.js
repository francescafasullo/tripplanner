const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
  	type: Sequelize.FLOAT,
  	validate: {
  		min: 1,
  		max: 5
  	},
  	allowNull: false
  },
  amenities: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = Hotel;

