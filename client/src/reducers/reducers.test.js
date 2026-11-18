import rootReducer from './reducers';
import {
  GET_EVENTS,
  GET_DETAIL,
  FILTER_TAGS,
  FILTER_AGE_RATING,
  FILTER_WEEKDAYS,
  REMOVE_FILTERS,
  CHANGE_MODAL,
  SEARCH_NAME,
  changeModal,
  searchName,
  removeFilters,
} from '../actions/actions';

const events = [
  { name: 'Book fair', tags: 'Indoors', age_rating: '7+', weekdays: ['SUN', 'FRI'] },
  { name: 'Street food', tags: 'Outdoors', age_rating: '18+', weekdays: ['SAT'] },
];

const stateWithEvents = () => rootReducer(undefined, { type: GET_EVENTS, payload: events });

describe('rootReducer', () => {
  it('starts with an empty state', () => {
    const state = rootReducer(undefined, { type: '@@INIT' });

    expect(state.home).toEqual([]);
    expect(state.filters).toEqual([]);
    expect(state.modal).toEqual({ render: false, type: null, message: null });
  });

  it('stores the events and the detail of an event', () => {
    const state = rootReducer(stateWithEvents(), { type: GET_DETAIL, payload: { id: 1 } });

    expect(state.home).toEqual(events);
    expect(state.detailsEvent).toEqual({ id: 1 });
  });

  it.each([
    [FILTER_TAGS, 'Indoors', 'Book fair'],
    [FILTER_AGE_RATING, '18+', 'Street food'],
    [FILTER_WEEKDAYS, 'SAT', 'Street food'],
  ])('filters with %s', (type, payload, expectedName) => {
    const state = rootReducer(stateWithEvents(), { type, payload });

    expect(state.filters.map((event) => event.name)).toEqual([expectedName]);
  });

  it('clears the filters', () => {
    const filtered = rootReducer(stateWithEvents(), { type: FILTER_TAGS, payload: 'Indoors' });

    expect(rootReducer(filtered, { type: REMOVE_FILTERS }).filters).toEqual([]);
  });

  it('narrows the events by name', () => {
    const state = rootReducer(stateWithEvents(), { type: SEARCH_NAME, payload: 'food' });

    expect(state.home).toHaveLength(1);
  });

  it('toggles the modal and keeps its message', () => {
    const opened = rootReducer(undefined, changeModal('correct', 'Saved'));
    const closed = rootReducer(opened, changeModal('correct', 'Saved'));

    expect(opened.modal).toEqual({ render: true, type: 'correct', message: 'Saved' });
    expect(closed.modal.render).toBe(false);
  });

  it('ignores unknown actions', () => {
    const state = stateWithEvents();

    expect(rootReducer(state, { type: 'UNKNOWN' })).toBe(state);
  });
});

describe('action creators', () => {
  it('builds the modal action', () => {
    expect(changeModal('error', 'Oops')).toEqual({
      type: CHANGE_MODAL,
      payload: { type: 'error', message: 'Oops' },
    });
  });

  it('builds the search and reset actions', () => {
    expect(searchName('fair')).toEqual({ type: SEARCH_NAME, payload: 'fair' });
    expect(removeFilters()).toEqual({ type: REMOVE_FILTERS });
  });
});
