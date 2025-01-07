const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

test('gets the test endpoint', async () => {

  const response = await request.get('/test');
  expect(response.status).toBe(200);
  expect(response.text).toBe('pass!');
});