import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '.';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ProductCard Component', () => {
  const mockProduct = {
    id: '1',
    name: 'Product 1',
    images: ['image-url'],
    categories: [{ id: '1', name: 'Category 1' }],
    atributes: [
      { name: '1', value: 'Material 1' },
      { name: '2', value: 'Size 1' },
      { name: '3', value: 5 },
    ],
    price: {
      value: 1000,
      currencyCode: 'Us',
      discount: { value: 900, id: '1' },
    },
    key: 'key',
  };

  test('renders product name and attributes', () => {
    render(<ProductCard product={mockProduct} />);

    const productName = screen.getByText('Product 1');
    const attribute1 = screen.getByText('Material 1');
    const attribute2 = screen.getByText('Size 1');
    const attribute3 = screen.getByText('5');

    expect(productName).toBeInTheDocument();
    expect(attribute1).toBeInTheDocument();
    expect(attribute2).toBeInTheDocument();
    expect(attribute3).toBeInTheDocument();
  });

  test('renders price component', () => {
    render(<ProductCard product={mockProduct} />);

    const priceElement = screen.getByText('$ 10');
    expect(priceElement).toBeInTheDocument();
  });

  test('disables add to cart button when stock is 0', () => {
    render(
      <ProductCard
        product={{
          ...mockProduct,
          atributes: [
            { name: '1', value: 'Material 1' },
            { name: '1', value: 'Size 1' },
            { name: '1', value: 0 },
          ],
        }}
      />,
    );

    const addToCartButton = screen.getByText('add to cart');
    expect(addToCartButton).toBeDisabled();
  });

  test('enables add to cart button when stock is not 0', () => {
    render(<ProductCard product={mockProduct} />);

    const addToCartButton = screen.getByText('add to cart');
    expect(addToCartButton).toBeEnabled();
  });
});
