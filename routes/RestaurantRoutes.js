const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

app.get('/restaurants', async (req, res) => {
  let restaurants = {};
  if (req.query.sortBy === 'ASC') {
    restaurants = await restaurantModel.find({}).sort({"restaurant_id": 1});
  }
  else if (req.query.sortBy === 'DESC') {
    restaurants = await restaurantModel.find({}).sort({restaurant_id: -1});
  }
  else {
    restaurants = await restaurantModel.find({});
  }
    
    
    try {
      res.status(200).send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
const restaurants = await restaurantModel.find({cuisine: req.params.cuisine});
try {
    if(restaurants.length != 0){
      res.send(restaurants);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }
})
app.get('/restaurants/Delicatessen', async (req, res) => {
    const restaurants = await restaurantModel.find({})
    .where('cuisine').equals('Delicatessen')
    .where('city').ne('Brooklyn');
    
    try {
      res.status(200).send(restaurants);
    } catch (err) {
      res.status(500).send(err);
    }
});
module.exports = app

