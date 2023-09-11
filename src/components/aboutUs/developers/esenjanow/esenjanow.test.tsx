import { render } from '@testing-library/react';
import DeveloperEsenjanow from './esenjanow';

describe('DeveloperEsenjanow Component', () => {
  it('should render the developer name', () => {
    const { getByText } = render(<DeveloperEsenjanow />);
    const developerName = getByText('Mekan Esenjanow');
    expect(developerName).toBeInTheDocument();
  });

  it('should render developer roles', () => {
    const { getByText } = render(<DeveloperEsenjanow />);
    const developerRole1 = getByText('developer');
    const developerRole2 = getByText('team leader');
    expect(developerRole1).toBeInTheDocument();
    expect(developerRole2).toBeInTheDocument();
  });

  it('should render developer photo', () => {
    const { getByAltText } = render(<DeveloperEsenjanow />);
    const developerPhoto = getByAltText('M. Esenjanow');
    expect(developerPhoto).toBeInTheDocument();
  });

  it('should render developer Github link', () => {
    const { getByText } = render(<DeveloperEsenjanow />);
    const developerGithubHeader = getByText('Github:');
    const developerGithubLink = getByText('mekanes');
    expect(developerGithubHeader).toBeInTheDocument();
    expect(developerGithubLink).toBeInTheDocument();
  });
});
