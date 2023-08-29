import validateStreet from './validateStreet';

describe('validateStreet', (): void => {
  test('returns an error message when the value is empty', (): void => {
    const value: string = '';
    const result: string | boolean = validateStreet(value);
    expect(result).toBe('Value must contain at least one character');
  });

  test('returns true when the value is not empty', (): void => {
    const value: string = 'Some street';
    const result: string | boolean = validateStreet(value);
    expect(result).toBe(true);
  });
});
