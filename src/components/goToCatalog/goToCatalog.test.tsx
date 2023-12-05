import React from 'react';
import { render, screen } from '@testing-library/react';
import GoToCatalog from './';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
}));

describe('GoToCatalog Component', () => {
  test('renders GoToCatalog component', () => {
    jest
      .spyOn(require('../../hooks/user-auth'), 'userAuth')
      .mockReturnValue(true);

    render(
      <MemoryRouter>
        <GoToCatalog />
      </MemoryRouter>,
    );

    const logoutButton = screen.getByText('go to catalog');
    expect(logoutButton).toBeInTheDocument();
  });
});
