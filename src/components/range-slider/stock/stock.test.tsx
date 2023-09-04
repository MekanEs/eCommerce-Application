import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StockSlider from '.';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe('StockSlider Component', () => {
  let store: Store<unknown, AnyAction>;

  beforeEach(() => {
    store = mockStore({
      filter: {
        stockRange: {
          from: 0,
          to: 50,
        },
      },
    });
  });

  test('renders stock slider with default values', () => {
    render(
      <Provider store={store}>
        <StockSlider />
      </Provider>,
    );

    const minValueElement = screen.getByText('0');
    const maxValueElement = screen.getByText('50');

    expect(minValueElement).toBeInTheDocument();
    expect(maxValueElement).toBeInTheDocument();
  });

  test('updates min and max values when sliders are changed', () => {
    render(
      <Provider store={store}>
        <StockSlider />
      </Provider>,
    );

    const Sliders = screen.getAllByRole('slider');

    fireEvent.change(Sliders[0], { target: { value: '10' } });
    fireEvent.change(Sliders[1], { target: { value: '20' } });

    const minValueElement = screen.getByText('10');
    const maxValueElement = screen.getByText('20');

    expect(minValueElement).toBeInTheDocument();
    expect(maxValueElement).toBeInTheDocument();
  });
});
