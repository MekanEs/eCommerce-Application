import { render } from '@testing-library/react';
import { CreateButton } from './createButton';

describe('CreateButton', () => {
  test('renders a button with the provided label', () => {
    const label = 'Submit';
    const { getByText } = render(<CreateButton label={label} />);
    const button = getByText(label);
    expect(button).toBeInTheDocument();
  });
});
