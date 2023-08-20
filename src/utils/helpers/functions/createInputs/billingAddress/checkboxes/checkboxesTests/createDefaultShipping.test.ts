import { render, screen } from '@testing-library/react';
import createDefaultShipping from '../createDefaultShipping';

describe('createDefaultShipping function', () => {
  test('renders checkbox with correct label and id', () => {
    const mockRegister = jest.fn();
    render(createDefaultShipping(mockRegister));

    const checkbox = screen.getByLabelText('Set as default shipping address');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.getAttribute('id')).toBe('set-default-shipping');
  });

  test('calls mockRegister with the correct arguments', () => {
    const mockRegister = jest.fn();
    render(createDefaultShipping(mockRegister));

    expect(mockRegister).toHaveBeenCalledWith('defaultShipping', {});
  });
});
