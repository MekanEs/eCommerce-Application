import validateEmail from '../validateEmail';

describe('validateEmail', () => {
  test('returns an error message when email lacks the "@" symbol', () => {
    const email = 'userexample.com';
    const result = validateEmail(email);
    expect(result).toBe('Email address must contain the "@" symbol');
  });

  test('returns an error message when email lacks a valid domain', () => {
    const email = 'user@';
    const result = validateEmail(email);
    expect(result).toBe(
      'Enter a valid domain for the email address, e.g. user@example.com',
    );
  });

  test('returns an error message when email contains leading or trailing spaces', () => {
    const email = ' user@example.com ';
    const result = validateEmail(email);
    expect(result).toBe('Password must not contain leading or trailing spaces');
  });

  test('returns an error message when email contains an invalid domain', () => {
    const email = 'user@example.';
    const result = validateEmail(email);
    expect(result).toBe(
      'Enter a valid domain for the email address, e.g. user@example.com',
    );
  });

  test('returns true when email is valid', () => {
    const email = 'user@example.com';
    const result = validateEmail(email);
    expect(result).toBe(true);
  });
});
