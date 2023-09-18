import { render } from '@testing-library/react';
import DeveloperVoropai from './voropai';

describe('DeveloperVarapai Component', () => {
  it('should render the developer name', () => {
    const { getByText } = render(<DeveloperVoropai />);
    const developerName = getByText('Vadim Voropai');
    expect(developerName).toBeInTheDocument();
  });

  it('should render developer role', () => {
    const { getByText } = render(<DeveloperVoropai />);
    const developerRole = getByText('developer');
    expect(developerRole).toBeInTheDocument();
  });

  it('should render developer photo', () => {
    const { getByAltText } = render(<DeveloperVoropai />);
    const developerPhoto = getByAltText('V. Voropai');
    expect(developerPhoto).toBeInTheDocument();
  });

  it('should render developer Github link', () => {
    const { getByText } = render(<DeveloperVoropai />);
    const developerGithubHeader = getByText('Github:');
    const developerGithubLink = getByText('sergpet93');
    expect(developerGithubHeader).toBeInTheDocument();
    expect(developerGithubLink).toBeInTheDocument();
  });
});
