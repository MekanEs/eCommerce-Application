import validatePostcode from '../validatePostcode';

test('returns true when postcode is valid', () => {
  const countryCode = 'US';
  const validPostcode = '90210';
  const result = validatePostcode(validPostcode, countryCode);

  expect(result).toBe(true);
});

test('returns error message when postcode validation throws an error', () => {
  const countryCode = 'US';
  const invalidPostcode = 'ABCDE';
  const result = validatePostcode(invalidPostcode, countryCode);

  expect(result).toBe('This index does not exist in the selected country');
});

test('returns true when valid postcode for another country', () => {
  const countryCode = 'CA';
  const validPostcode = 'M5V 2Z5';
  const result = validatePostcode(validPostcode, countryCode);

  expect(result).toBe(true);
});
