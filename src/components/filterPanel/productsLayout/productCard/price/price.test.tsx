import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from '.';

describe('Price Component', () => {
  test('renders default price', () => {
    render(
      <Price
        price={{
          value: 1000,
          currencyCode: 'Us',
          discount: { value: 900, id: '1' },
        }}
      />,
    );

    const defaultPriceElement = screen.getByText('$ 10');
    expect(defaultPriceElement).toBeInTheDocument();
  });

  test('renders discounted price', () => {
    render(
      <Price
        price={{
          value: 1000,
          currencyCode: 'Us',
          discount: { value: 800, id: '2' },
        }}
      />,
    );

    const discountPriceElement = screen.getByText('$ 8');
    expect(discountPriceElement).toBeInTheDocument();
  });

  test('does not render when price is undefined', () => {
    render(<Price price={undefined} />);

    const priceElement = screen.queryByText('$ 10');
    expect(priceElement).toBeNull();
  });
});
