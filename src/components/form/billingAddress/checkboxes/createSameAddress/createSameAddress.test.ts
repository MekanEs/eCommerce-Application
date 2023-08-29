import { render, screen } from '@testing-library/react';
import createSameAddress from './createSameAddress';

describe('createSameAddress function', () => {
  test('renders checkbox with correct label and id', () => {
    const mockRegister = jest.fn();
    render(createSameAddress(mockRegister));

    const checkbox = screen.getByLabelText(
      'Use the same address for both billing and shipping',
    );

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.getAttribute('id')).toBe('set-same-address');
  });

  test('calls mockRegister with the correct arguments', () => {
    const mockRegister = jest.fn();
    render(createSameAddress(mockRegister));

    expect(mockRegister).toHaveBeenCalledWith('sameAddress', {});
  });
});
