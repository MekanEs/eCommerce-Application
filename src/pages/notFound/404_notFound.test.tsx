import { render, screen } from '@testing-library/react';
import PageNotFound from '.';
import { MemoryRouter } from 'react-router-dom';

describe('when rendered PageNotFound', () => {
  it('text should be displayed', () => {
    render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
    );
    expect(screen.getByText(/ooops/)).toBeInTheDocument();
  });
});
