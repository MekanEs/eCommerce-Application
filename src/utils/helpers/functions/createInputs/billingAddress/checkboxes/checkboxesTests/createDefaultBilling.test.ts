import { render, screen } from '@testing-library/react';
import createDefaultBilling from '../createDefaultBilling';

describe('createDefaultBilling function', () => {
  test('renders checkbox with correct label and id', () => {
    const mockRegister = jest.fn();
    render(createDefaultBilling(mockRegister));

    const checkbox = screen.getByLabelText('Set as default billing address');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox.getAttribute('id')).toBe('set-default-billing');
  });

  test('calls mockRegister with the correct arguments', () => {
    const mockRegister = jest.fn();
    render(createDefaultBilling(mockRegister));

    expect(mockRegister).toHaveBeenCalledWith('defaultBilling', {});
  });
});
