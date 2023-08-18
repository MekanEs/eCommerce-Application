import { render, screen } from '@testing-library/react';
import Question from '.';

describe('when rendered Faq', () => {
  it('header text should be displayed', () => {
    render(<Question header="Test question">test text</Question>);
    expect(screen.getByText(/Test questio/)).toBeInTheDocument();
  });
  it('question text should be displayed', () => {
    render(<Question header="Test question">test text</Question>);
    expect(screen.getByText(/test text/)).toBeInTheDocument();
  });
});
