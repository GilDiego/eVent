import validate from './validate';

const validEvent = {
  name: 'Book fair',
  description: 'A long enough description for the event, over forty characters.',
  starring: 'Local authors',
  pictures: ['image.png'],
  country: 'Mexico',
  region: 'Guanajuato',
  city: 'Leon',
  address: 'Av. Central 123',
  start_date: '2026-01-10',
  isRecurrent: 'false',
  finish_date: '',
  schedule: [],
  weekdays: [],
  tags: 'Indoors',
  age_rating: '7+',
  moneda: 'MXN',
  price: '100',
  ticket_limit: '50',
};

describe('event form validation', () => {
  it('accepts a complete one-time event', () => {
    expect(validate(validEvent)).toEqual({});
  });

  it('requires a long enough description', () => {
    expect(validate({ ...validEvent, description: 'short' }).description).toBe(true);
  });

  it('requires an end date, schedule and weekdays for recurrent events', () => {
    const errors = validate({ ...validEvent, isRecurrent: 'true' });

    expect(errors.finish_date).toBe(true);
    expect(errors.schedule).toBe(true);
    expect(errors.weekdays).toBe(true);
  });

  it('accepts a complete recurrent event', () => {
    const recurrent = {
      ...validEvent,
      isRecurrent: 'true',
      finish_date: '2026-02-10',
      schedule: ['10:00'],
      weekdays: ['SUN'],
    };

    expect(validate(recurrent)).toEqual({});
  });

  it('reports every missing required field', () => {
    const errors = validate({
      ...validEvent,
      name: '',
      country: '',
      tags: '',
      price: '',
      pictures: [],
    });

    expect(Object.keys(errors).sort()).toEqual(['country', 'name', 'pictures', 'price', 'tags']);
  });
});
