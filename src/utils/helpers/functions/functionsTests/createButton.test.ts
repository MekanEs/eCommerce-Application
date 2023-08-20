import { render } from '@testing-library/react';
import createButton from '../createButton';

describe('createButton', () => {
  test('renders a button with the provided label', () => {
    const label = 'Submit';
    const { getByText } = render(createButton(label));
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });
});
