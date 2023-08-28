import validatePassword from './validatePassword';

describe('validatePassword', () => {
  test('returns an error message when password lacks an uppercase letter', () => {
    const password = 'abc123';
    const result = validatePassword(password);
    expect(result).toBe(
      'Password must contain at least one uppercase letter (AZ)',
    );
  });

  test('returns an error message when password lacks a lowercase letter', () => {
    const password = 'ABC123';
    const result = validatePassword(password);
    expect(result).toBe(
      'Password must contain at least one lowercase letter (az)',
    );
  });

  test('returns an error message when password lacks a number', () => {
    const password = 'Abcdef';
    const result = validatePassword(password);
    expect(result).toBe('Password must contain at least one number (0-9)');
  });

  test('returns an error message when password contains leading or trailing spaces', () => {
    const password = ' Abc123 ';
    const result = validatePassword(password);
    expect(result).toBe('Password must not contain leading or trailing spaces');
  });

  test('returns true when password is valid', () => {
    const password = 'Abc12345';
    const result = validatePassword(password);
    expect(result).toBe(true);
  });
});
