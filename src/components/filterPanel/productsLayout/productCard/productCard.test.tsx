/* eslint-disable max-lines-per-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './';

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
const mockStore = configureStore([]);
const mockProduct = {
  id: '11',
  name: 'Product 1',
  images: ['image-url'],
  categories: [{ id: '1', name: 'Category 1' }],
  atributes: [
    { name: 'frameMaterial', value: 'Material 1' },
    { name: 'wheelSize', value: 'Size 1' },
    { name: 'stock', value: 5 },
  ],
  price: {
    value: 1000,
    currencyCode: 'Us',
    discount: { value: 900, id: '1' },
  },
  key: 'key',
};

describe('ProductCard Component', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore({
      basket: {
        basket: {
          lineItems: [{ productId: '1' }, { productId: '2' }],
        },
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders product name and attributes', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>,
    );

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
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>,
    );

    const priceElement = screen.getByText('$ 10');
    expect(priceElement).toBeInTheDocument();
  });

  test('enables add to cart button when stock is not 0', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>,
    );

    const addToCartButton = screen.getByText('add to cart');
    expect(addToCartButton).toBeEnabled();
  });
});
