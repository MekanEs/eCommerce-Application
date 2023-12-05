import formatPrice from './formatPrice';

describe('formatPrice', () => {
  test('formats price correctly with zero cents', () => {
    const price = 5000;
    const formattedPrice = formatPrice(price, 'en-US');
    expect(formattedPrice).toBe('50.00');
  });
});
