import { render, screen } from '@testing-library/react';
import Faq from './';

describe('when rendered Faq', () => {
  it('text should be displayed', () => {
    render(<Faq />);
    expect(screen.getByText(/faq/)).toBeInTheDocument();
  });
});
