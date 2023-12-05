import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('when rendered Footer', () => {
  it('text should be displayed', () => {
    render(<Footer />);
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });
});
