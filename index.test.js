const request = require('supertest');
const app = require('./src/app');

// jest.mock('./models/Restaurant', () => ({ create: jest.fn() }));
// jest.mock('./models/Restaurant', () => ({ update: jest.fn() }));
// jest.mock('./models/Restaurant', () => ({ destroy: jest.fn() }));

describe('The API for /restaurants', () => {
    test('when we send a get request, all restaurants are returned', async () => {
        const response = await request(app)
            .get('/restaurants')

        console.log(response.body)
    })
})