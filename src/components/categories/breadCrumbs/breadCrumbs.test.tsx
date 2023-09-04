import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BreadCrumbs from '.';

describe('BreadCrumbs Component', () => {
  const mockCategories = [
    { id: '1', name: 'Category 1' },
    { id: '2', name: 'Category 2' },
    { id: '3', name: 'Category 3' },
  ];

  const mockActiveAncestor = { id: '1', name: 'Category 1' };
  const mockActiveCategory = { id: '1', name: 'Category 2' };

  const mockHandleClick = jest.fn();

  test('renders initial breadcrumbs with Catalog', () => {
    render(
      <BreadCrumbs
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        styles={{}}
        categories={mockCategories}
        handleClick={mockHandleClick}
      />,
    );

    const catalogElement = screen.getByText('Catalog');
    expect(catalogElement).toBeInTheDocument();
  });

  test('renders breadcrumbs with active ancestor and category buttons', () => {
    render(
      <BreadCrumbs
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        styles={{}}
        categories={mockCategories}
        handleClick={mockHandleClick}
      />,
    );

    const activeAncestorButton = screen.getByText('Category 1');
    const activeCategoryButton = screen.getByText('Category 2');

    expect(activeAncestorButton).toBeInTheDocument();
    expect(activeCategoryButton).toBeInTheDocument();
  });

  test('calls handleClick function when category buttons are clicked', () => {
    render(
      <BreadCrumbs
        activeCategory={mockActiveCategory}
        activeAncestor={mockActiveAncestor}
        styles={{}}
        categories={mockCategories}
        handleClick={mockHandleClick}
      />,
    );

    const activeAncestorButton = screen.getByText('Category 1');
    fireEvent.click(activeAncestorButton);
    expect(mockHandleClick).toHaveBeenCalledWith(mockActiveAncestor);

    const activeCategoryButton = screen.getByText('Category 2');
    fireEvent.click(activeCategoryButton);
    expect(mockHandleClick).toHaveBeenCalledWith(mockActiveCategory);
  });
});
