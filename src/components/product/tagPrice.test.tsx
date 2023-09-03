import { render } from '@testing-library/react';
import createTagPrice from './tagPrice';

describe('createTagPrice', () => {
  it('should render price without discount', () => {
    const price = '50.00';
    const styles = {
      discount: 'discount-class',
    };

    const { container } = render(createTagPrice(price, undefined, styles));

    expect(container).toHaveTextContent('$ 50.00');
    expect(container.querySelector('.discount-class')).toBeNull();
  });

  it('should render price with discount', () => {
    const price = '50.00';
    const discountPrice = '45.00';
    const styles = {
      discount: 'discount-class',
    };

    const { container } = render(createTagPrice(price, discountPrice, styles));

    expect(container).toHaveTextContent('$ 50.00');
    expect(container).toHaveTextContent('$ 45.00');
    expect(container.querySelector('.discount-class')).toBeTruthy();
  });
});
