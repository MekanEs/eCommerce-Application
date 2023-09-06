import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryButton from '.';

describe('CategoryButton Component', () => {
  const mockCategory = { id: '1', name: 'Category 1' };
  const mockActiveCategory = { id: '2', name: 'Category 2' };
  const mockActiveAncestor = { id: '3', name: 'Category 3' };
  const mockCallback = jest.fn();

  test('renders category name', () => {
    render(
      <CategoryButton
        el={mockCategory}
        styles={{}}
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        callback={mockCallback}
      />,
    );

    const categoryName = screen.getByText('Category 1');
    expect(categoryName).toBeInTheDocument();
  });

  test('applies active class when activeCategory or activeAncestor is equal to el', () => {
    render(
      <CategoryButton
        el={mockCategory}
        styles={{
          category: 'category',
          activeCategory: 'activeCategory',
        }}
        activeCategory={mockCategory}
        activeAncestor={null}
        callback={mockCallback}
      />,
    );

    const categoryElement = screen.getByText('Category 1');
    expect(categoryElement).toHaveClass('category', 'activeCategory');
  });

  test('calls callback function when category is clicked', () => {
    render(
      <CategoryButton
        el={mockCategory}
        styles={{}}
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        callback={mockCallback}
      />,
    );

    const categoryElement = screen.getByText('Category 1');
    fireEvent.click(categoryElement);
    expect(mockCallback).toHaveBeenCalledWith(mockCategory);
  });

  test('does not render when el is null or undefined', () => {
    render(
      <CategoryButton
        el={null}
        styles={{}}
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        callback={mockCallback}
      />,
    );

    const categoryElement = screen.queryByText('Category 1');
    expect(categoryElement).toBeNull();
  });
});
