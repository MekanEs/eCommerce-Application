import { render } from '@testing-library/react';
import DeveloperNovikova from './novikova';

describe('DeveloperNovikova Component', () => {
  it('should render the developer name', () => {
    const { getByText } = render(<DeveloperNovikova />);
    const developerName = getByText('Elizaveta Novikova');
    expect(developerName).toBeInTheDocument();
  });

  it('should render developer roles', () => {
    const { getByText } = render(<DeveloperNovikova />);
    const developerRole1 = getByText('developer');
    const developerRole2 = getByText('designer');
    expect(developerRole1).toBeInTheDocument();
    expect(developerRole2).toBeInTheDocument();
  });

  it('should render developer photo', () => {
    const { getByAltText } = render(<DeveloperNovikova />);
    const developerPhoto = getByAltText('E. Novikova');
    expect(developerPhoto).toBeInTheDocument();
  });

  it('should render developer Github link', () => {
    const { getByText } = render(<DeveloperNovikova />);
    const developerGithubHeader = getByText('Github:');
    const developerGithubLink = getByText('kotangenss');
    expect(developerGithubHeader).toBeInTheDocument();
    expect(developerGithubLink).toBeInTheDocument();
  });
});
