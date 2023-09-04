import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectInput from './index';

describe('SelectInput Component', () => {
  it('should render the label and options correctly', () => {
    const label = 'Select an option';
    const id = 'select-input';
    const placeholder = 'Choose one';
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];
    render(
      <SelectInput
        label={label}
        id={id}
        placeholder={placeholder}
        options={options}
        hookData={{}}
      />,
    );
    const labelElement = screen.getByText(label);
    const selectElement = screen.getByRole('combobox');
    const placeholderOptionElement = screen.getByText(placeholder);
    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(placeholderOptionElement).toBeInTheDocument();
    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('value', option.value);
    });
  });
  it('should render an error message when errorMessage is provided', () => {
    const label = 'Select an option';
    const id = 'select-input';
    const errorMessage = 'This field is required';

    render(
      <SelectInput
        label={label}
        id={id}
        errorMessage={errorMessage}
        isValid={false}
        placeholder={''}
        hookData={{}}
      />,
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
