const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
// app.use(express.urlencoded());

//TODO: Create your GET Request Route Below: 
app.get('/restaurants', async (request, response) => {
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
});

app.get('/restaurants/:id', async (request, response) => {
    const restaurant = await Restaurant.findByPk(request.params.id);
    response.json(restaurant);
});

app.post('/restaurants', async (request, response) => {
    const newRestaurant = await Restaurant.create(request.body);
    response.json(newRestaurant);
});

app.put('/restaurants/:id', async (request, response) => {
    const restaurantToUpdate = await Restaurant.update(request.body, {where : {id : request.params.id}});
    response.sendStatus(200);
});

app.delete('/restaurants/:id', async (request, response) => {
    await Restaurant.destroy({where : { id : request.params.id}});
    response.sendStatus(200);
});






module.exports = app;