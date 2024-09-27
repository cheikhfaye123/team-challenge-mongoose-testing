const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const Post = require('../models/Post');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /posts/create', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/posts/create')
      .send({
        title: 'Test Post',
        body: 'This is a test post'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Post');
    expect(res.body.body).toBe('This is a test post');
  });

  it('should not create a post without title', async () => {
    const res = await request(app)
      .post('/posts/create')
      .send({
        body: 'This is a test post without title'
      });
    expect(res.statusCode).toBe(400);
  });
});

describe('GET /posts', () => {
  it('should get all posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});