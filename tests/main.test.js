const request = require('supertest');

describe('Express API', () => {
  let server;

  beforeAll(() => {
    server = require('../src/main');
  });

  test('GET / should return Hello, DevSecOps!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Hello, DevSecOps! Test2' });
  });
});