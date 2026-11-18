import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityCard from './ActivityCard';

const event = {
  id: 'abc',
  name: 'Book fair',
  tags: 'Indoors',
  price: 290,
  pictures: ['https://example.com/cover.png'],
};

describe('ActivityCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ActivityCard event={event} />
      </MemoryRouter>
    );
  });

  it('shows the event data', () => {
    expect(screen.getByText('Book fair')).toBeInTheDocument();
    expect(screen.getByText('Indoors')).toBeInTheDocument();
    expect(screen.getByText(/290/)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', event.pictures[0]);
  });

  it('links to the event detail', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/eventDetailsUsuario/abc');
  });
});
