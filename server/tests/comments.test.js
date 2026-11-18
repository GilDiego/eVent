const request = require('supertest');

jest.mock('../database/models/Comment', () => require('./helpers').modelMock());
jest.mock('../database/models/User', () => ({}));

const Comment = require('../database/models/Comment');
const app = require('../app');
const { groupByStars, averageRating } = require('../controllers/Comment/getController');

describe('rating helpers', () => {
  it('groups comments by star level', () => {
    const comments = [{ rating: '5' }, { rating: 5 }, { rating: '2' }];
    const grouped = groupByStars(comments);

    expect(grouped).toHaveLength(5);
    expect(grouped[4].star5).toHaveLength(2);
    expect(grouped[1].star2).toHaveLength(1);
    expect(grouped[0].star1).toHaveLength(0);
  });

  it('averages ratings rounding down', () => {
    expect(averageRating([{ rating: 5 }, { rating: 4 }])).toBe(4);
  });

  it('returns 0 when there are no comments', () => {
    expect(averageRating([])).toBe(0);
  });
});

describe('GET /api/comment', () => {
  beforeEach(() => jest.resetAllMocks());

  it('filters by event and groups by stars', async () => {
    Comment.findAll.mockResolvedValue([{ rating: 3 }]);

    const res = await request(app).get('/api/comment/all').query({ id: 'event-1' });

    expect(Comment.findAll).toHaveBeenCalledWith(
      expect.objectContaining({ where: { eventId: 'event-1' } })
    );
    expect(res.body[2].star3).toHaveLength(1);
  });

  it('returns an empty list untouched', async () => {
    Comment.findAll.mockResolvedValue([]);

    const res = await request(app).get('/api/comment/all');

    expect(res.body).toEqual([]);
  });

  it('answers with an error message when the query fails', async () => {
    Comment.findAll.mockRejectedValue(new Error('db down'));

    const res = await request(app).get('/api/comment/all');

    expect(res.body).toEqual({ msg: 'error!!' });
  });

  it('rejects formatted comments without an event id', async () => {
    const res = await request(app).get('/api/comment/getFormattedComments');

    expect(res.status).toBe(400);
  });

  it('computes the general rating of an event', async () => {
    Comment.findAll.mockResolvedValue([{ rating: 4 }, { rating: 5 }]);

    const res = await request(app).get('/api/comment/generalRating').query({ id: 'event-1' });

    expect(res.body).toBe(4);
  });
});
