const request = require('supertest');
const app = require('../src/app');

const examplePayload = {
  category: 'Movies',
  message: 'Example message',
};

describe('Test POST /notify', () => {
  test('It should respond with 201 created', async () => {
    const response = await request(app)
      .post('/notify')
      .send(examplePayload)
      .expect(201);
  });

  test('It should respond with success: true after posting', async () => {
    const response = await request(app).post('/notify').send(examplePayload);

    expect(response.body.success).toBe(true);
  });

  test('It should catch missing message property', async () => {
    const response = await request(app)
      .post('/notify')
      .send({ category: 'Movies', message: '' })
      .expect(400);
  });

  test('It should catch missing message property', async () => {
    const response = await request(app)
      .post('/notify')
      .send({ category: '', message: 'Default message' })
      .expect(400);
  });
});
