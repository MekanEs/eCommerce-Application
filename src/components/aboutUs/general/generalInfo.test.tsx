import { render } from '@testing-library/react';
import AboutGeneralInfo from './generalInfo';

describe('AboutGeneralInfo Component', () => {
  it('should render the collaboration section', () => {
    const { getByText } = render(<AboutGeneralInfo />);
    const collaborationHeader = getByText('collaboration');
    expect(collaborationHeader).toBeInTheDocument();
  });

  it('should render the educational program section', () => {
    const { getByText } = render(<AboutGeneralInfo />);
    const programHeader = getByText('our educational program');
    expect(programHeader).toBeInTheDocument();
  });

  it('should render the collaboration image', () => {
    const { getByAltText } = render(<AboutGeneralInfo />);
    const collaborationImage = getByAltText('collaboration');
    expect(collaborationImage).toBeInTheDocument();
  });

  it('should render the RSS logo image', () => {
    const { getByAltText } = render(<AboutGeneralInfo />);
    const rssLogoImage = getByAltText('rss logo');
    expect(rssLogoImage).toBeInTheDocument();
  });
});
