import { render, screen } from '@testing-library/react';
import Banner from './';

describe('when rendered Banner', () => {
  it('text should be displayed', () => {
    render(<Banner />);
    expect(screen.getByText(/bicycle for every road/)).toBeInTheDocument();
  });
});
