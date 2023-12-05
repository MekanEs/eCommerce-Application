import validateName from './validateDefault';

describe('validateName', () => {
  test('returns an error message when value is empty', () => {
    const value = '';
    const result = validateName(value);
    expect(result).toBe('Value must contain at least one character');
  });

  test('returns an error message when value contains special characters', () => {
    const value = 'John!Doe';
    const result = validateName(value);
    expect(result).toBe('Value must not contain special characters');
  });

  test('returns an error message when value contains digits', () => {
    const value = 'John123';
    const result = validateName(value);
    expect(result).toBe('Value must not contain digits');
  });

  test('returns true when value is valid', () => {
    const value = 'John Doe';
    const result = validateName(value);
    expect(result).toBe(true);
  });
});
