const request = require('supertest');

jest.mock('../database/models/User', () => require('./helpers').modelMock());
jest.mock('../database/models/Promoter', () => require('./helpers').modelMock());
jest.mock('../database/models/Comment', () => ({}));
jest.mock('../database/models/Event', () => ({}));

const User = require('../database/models/User');
const Promoter = require('../database/models/Promoter');
const app = require('../app');

beforeEach(() => jest.resetAllMocks());

describe('user accounts', () => {
  it('logs in with email and password', async () => {
    User.findOne.mockResolvedValue({ id: 'u1', username: 'ana', picture: 'p.png' });

    const res = await request(app)
      .post('/api/user/login')
      .send({ type: 'email', email: 'a@b.c', password: 'secret' });

    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'a@b.c', password: 'secret' } });
    expect(res.body).toEqual({
      msg: true,
      id: 'u1',
      username: 'ana',
      picture: 'p.png',
      type: 'user',
    });
  });

  it('logs in by email only for social providers', async () => {
    User.findOne.mockResolvedValue({ id: 'u1' });

    await request(app).post('/api/user/login').send({ type: 'google', email: 'a@b.c' });

    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'a@b.c' } });
  });

  it('answers false for unknown credentials', async () => {
    User.findOne.mockResolvedValue(null);

    const res = await request(app).post('/api/user/login').send({ type: 'email', email: 'x' });

    expect(res.body).toEqual({ msg: false });
  });

  it('refuses to register an email twice', async () => {
    User.findOrCreate.mockResolvedValue([{}, false]);

    const res = await request(app).post('/api/user').send({ email: 'a@b.c' });

    expect(res.body.msg).toBe('There is already an user with the email a@b.c');
  });

  it('returns a message when the user id is unknown', async () => {
    User.findOne.mockResolvedValue(null);

    const res = await request(app).get('/api/user/9');

    expect(res.body.msg).toContain('whit ID: 9');
  });
});

describe('promoter accounts', () => {
  it('logs in a promoter', async () => {
    Promoter.findOne.mockResolvedValue({ id: 'p1', business_name: 'Acme', promoter_name: 'Ana' });

    const res = await request(app)
      .post('/api/promoter/login')
      .send({ type: 'email', email: 'a@b.c', password: 'secret' });

    expect(res.body).toMatchObject({ msg: true, id: 'p1', type: 'promoter' });
  });

  it('reports a failed query', async () => {
    Promoter.findOne.mockRejectedValue(new Error('db down'));

    const res = await request(app).post('/api/promoter/login').send({ email: 'a@b.c' });

    expect(res.body).toEqual({ msg: 'error' });
  });

  it('does not duplicate promoters', async () => {
    Promoter.findOrCreate.mockResolvedValue([{}, false]);

    const res = await request(app).post('/api/promoter').send({ email: 'a@b.c' });

    expect(res.body).toEqual({ created: false });
  });
});
