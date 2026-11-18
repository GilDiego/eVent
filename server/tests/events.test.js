const request = require('supertest');

jest.mock('../database/models/Event', () => require('./helpers').modelMock());
jest.mock('../database/models/Location', () => require('./helpers').modelMock());
jest.mock('../database/models/Comment', () => ({}));
jest.mock('../database/models/Promoter', () => ({}));

const Event = require('../database/models/Event');
const Location = require('../database/models/Location');
const app = require('../app');

beforeEach(() => jest.resetAllMocks());

describe('GET /api/main', () => {
  it('lists events', async () => {
    Event.findAll.mockResolvedValue([{ id: '1', name: 'Book fair' }]);

    const res = await request(app).get('/api/main');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', name: 'Book fair' }]);
  });

  it('responds 500 when the query fails', async () => {
    Event.findAll.mockRejectedValue(new Error('db down'));

    const res = await request(app).get('/api/main');

    expect(res.status).toBe(500);
  });
});

describe('GET /api/event/:id', () => {
  it('returns the event when it exists', async () => {
    Event.findByPk.mockResolvedValue({ id: '1' });

    const res = await request(app).get('/api/event/1');

    expect(res.body).toEqual({ msg: 'Search ID: 1 Success!', consult: { id: '1' } });
  });

  it('reports an unknown id', async () => {
    Event.findByPk.mockResolvedValue(null);

    const res = await request(app).get('/api/event/404');

    expect(res.body.msg).toBe('ID does not match with any event');
  });
});

describe('GET /api/event', () => {
  it.each([
    [{ country: 'MX', city: 'Leon' }, 'Country: MX   City: Leon'],
    [{ country: 'MX' }, 'Country: MX'],
    [{ city: 'Leon' }, 'City: Leon'],
    [{}, 'no data sent'],
  ])('describes the filter %j', async (query, msg) => {
    const res = await request(app).get('/api/event').query(query);

    expect(res.body).toEqual({ msg });
  });
});

describe('POST /api/event', () => {
  const payload = {
    name: 'Book fair',
    country: 'MX',
    region: 'GTO',
    city: 'Leon',
    promoter_id: 'p1',
  };

  it('creates the event and links its location and promoter', async () => {
    const event = { setLocation: jest.fn(), setPromoter: jest.fn() };
    Event.findOrCreate.mockResolvedValue([event, true]);
    Location.findOrCreate.mockResolvedValue([{ id: 'l1' }, true]);

    const res = await request(app).post('/api/event').send(payload);

    expect(res.body.created).toBe(true);
    expect(event.setLocation).toHaveBeenCalledWith({ id: 'l1' });
    expect(event.setPromoter).toHaveBeenCalledWith('p1');
  });

  it('does not duplicate an existing event', async () => {
    Event.findOrCreate.mockResolvedValue([{}, false]);

    const res = await request(app).post('/api/event').send(payload);

    expect(res.body).toEqual({ created: false });
    expect(Location.findOrCreate).not.toHaveBeenCalled();
  });
});

describe('PATCH and DELETE /api/event', () => {
  it('updates an event by id', async () => {
    Event.update.mockResolvedValue([1]);

    const res = await request(app).patch('/api/event/edit/1').send({ name: 'New name' });

    expect(Event.update).toHaveBeenCalledWith(expect.objectContaining({ name: 'New name' }), {
      where: { id: '1' },
    });
    expect(res.body).toEqual([1]);
  });

  it('deletes an event by id', async () => {
    Event.destroy.mockResolvedValue(1);

    const res = await request(app).delete('/api/event/delete/1');

    expect(Event.destroy).toHaveBeenCalledWith({ where: { id: '1' } });
    expect(res.text).toBe('Activity Deleted');
  });
});
