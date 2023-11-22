const restaurantRouter = require('express').Router();
const Restaurant = require('../../models/Restaurant');

restaurantRouter.get('/', async (request, response, next) => {
    try {
        const restaurants = await Restaurant.findAll();
        response.json(restaurants);
    } catch(error) {
        next(error)
    }
});

restaurantRouter.get('/:id', async (request, response, next) => {
    try {
        const restaurant = await Restaurant.findByPk(request.params.id);
        response.json(restaurant);
    } catch(error) {
        next(error)
    }
});

restaurantRouter.post('/', async (request, response, next) => {
    try {
        const newRestaurant = await Restaurant.create(request.body);
        response.json(newRestaurant);
    } catch(error) {
        next(error)
    }
});

restaurantRouter.put('/:id', async (request, response, next) => {
    try {
        const restaurantToUpdate = await Restaurant.update(request.body, {where : {id : request.params.id}});
        response.sendStatus(200);
    } catch(error) {
        next(error)
    }
});

restaurantRouter.delete('/:id', async (request, response, next) => {
    try {
        await Restaurant.destroy({where : { id : request.params.id}});
        response.sendStatus(200);
    } catch(error) {
        next(error)
    }
});

module.exports = restaurantRouter;