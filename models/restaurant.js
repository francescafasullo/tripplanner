const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Restaurant = dbConnection.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
  	type: Sequelize.INTEGER,
  	validate: {
  		min: 1,
  		max: 5
  	},
  	allowNull: false
  },
  cuisine: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = Restaurant;