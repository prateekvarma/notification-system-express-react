const request = require('supertest');
const app = require('../src/app');

describe('Test GET /logs', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app).get('/logs').expect(200);
  });
});
