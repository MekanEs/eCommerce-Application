import validateDate from '../validateDate';

describe('validateDate', () => {
  test('returns an error message when birth year is invalid', () => {
    const value = '1930-01-01';
    const result = validateDate(value);
    expect(result).toBe(
      'Invalid birth year. Year must be greater than or equal to 1940',
    );
  });

  test('returns an error message when age is under 13', () => {
    const today = new Date();
    const underageDate = new Date(
      today.getFullYear() - 12,
      today.getMonth(),
      today.getDate(),
    );
    const value = underageDate.toISOString().substring(0, 10);
    const result = validateDate(value);
    expect(result).toBe(
      'You are too young. Users over 13 years of age are allowed to register',
    );
  });

  test('returns true when date is valid', () => {
    const validDate = new Date();
    validDate.setFullYear(validDate.getFullYear() - 20);
    const value = validDate.toISOString().substring(0, 10);
    const result = validateDate(value);
    expect(result).toBe(true);
  });
});
