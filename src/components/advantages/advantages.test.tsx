import { render, screen } from '@testing-library/react';
import Advantages from './';

describe('when rendered Advantages', () => {
  it('text should be displayed', () => {
    render(<Advantages />);
    expect(screen.getByText(/our advantages/)).toBeInTheDocument();
    expect(screen.getByText(/Veros is a trusted company/)).toBeInTheDocument();
  });
});
