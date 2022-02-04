const express = require("express")
const Restaurant = require('../models/Restaurant')
const app = express()

// get all restaurants, all columns, might have sort query param
app.get('/restaurants', async(req, res) => {
    let sort = req.query.sortBy
    let restaurants
    if(sort == 'ACS') {
        restaurants = await Restaurant.find({}).sort({_id: 1})
    } else {
        restaurants = await Restaurant.find({}).sort({_id: -1})
    }
    try {
        res.send(restaurants)
    } catch(err) {
        res.status(500).send(err)
    }
})

// get all restaurants by cuisine, all columns
app.get('/restaurants/cuisine/:cuisine', async(req, res) => {
    let cuisineParam = req.params.cuisine
    const restaurants = await Restaurant.find({cuisine: cuisineParam})

    try {
        res.send(restaurants)
    } catch(err) {
        res.status(500).send(err)
    }
})

// idk what this means tbh
app.get('/restaurants/:name', async(req, res) => {
    const name = req.params.name
    const restaurants = await Restaurant.find({name: name}, {_id: 0}).sort({_id: 1})

    try {
        res.send(restaurants)
    } catch(err) {
        res.status(500).send(err)
    }
})

// for adding restaurants
app.post('/restaurant', async (req, res) => {
  
    console.log(req.body)
    const restaurant = new Restaurant(req.body);
    
    try {
      await restaurant.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(restaurant);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = app;