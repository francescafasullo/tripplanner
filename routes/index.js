const router = require('express').Router();
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;

router.get('/', function(req, res, next) {

  var outerScopeContainer = {};
	Hotel.findAll()
		.then(function (dbHotels) {
  			outerScopeContainer.dbHotels = dbHotels;
  			return Restaurant.findAll();
		})
		.then(function (dbRestaurants) {
  			outerScopeContainer.dbRestaurants = dbRestaurants;
  			return Activity.findAll();
		})
		.then(function (dbActivities) {
  			res.render('index', {
   				hotels: outerScopeContainer.dbHotels,
    			restaurants: outerScopeContainer.dbRestaurants,
    			activities: dbActivities
  			});
		})
		.catch(next);
  
})

module.exports = router;