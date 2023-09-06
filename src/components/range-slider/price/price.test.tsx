import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PriceSlider from '.';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe('PriceSlider Component', () => {
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      filter: {
        priceRange: {
          from: 0,
          to: 10000,
        },
      },
    });
  });

  test('renders price slider with default values', () => {
    render(
      <Provider store={store}>
        <PriceSlider />
      </Provider>,
    );

    const minValueElement = screen.getByText('$0');
    const maxValueElement = screen.getByText('$10000');

    expect(minValueElement).toBeInTheDocument();
    expect(maxValueElement).toBeInTheDocument();
  });

  test('updates min and max values when sliders are changed', () => {
    render(
      <Provider store={store}>
        <PriceSlider />
      </Provider>,
    );

    const Sliders = screen.getAllByRole('slider');

    fireEvent.change(Sliders[0], { target: { value: '1000' } });
    fireEvent.change(Sliders[1], { target: { value: '9000' } });

    const minValueElement = screen.getByText('$1000');
    const maxValueElement = screen.getByText('$9000');

    expect(minValueElement).toBeInTheDocument();
    expect(maxValueElement).toBeInTheDocument();
  });
});
