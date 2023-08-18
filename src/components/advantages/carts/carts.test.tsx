import { render, screen } from '@testing-library/react';
import AdvantegeCart from '.';

describe('when rendered with a `header` and `children` props', () => {
  it('header text should be displayed', () => {
    render(
      <AdvantegeCart imagePath="" header="Test Name">
        Test text
      </AdvantegeCart>,
    );
    expect(screen.getByText(/Test Name/)).toBeInTheDocument();
  });
  it('children text should be displayed', () => {
    render(
      <AdvantegeCart imagePath="" header="Test Name">
        Test text
      </AdvantegeCart>,
    );
    expect(screen.getByText(/Test text/)).toBeInTheDocument();
  });
});
