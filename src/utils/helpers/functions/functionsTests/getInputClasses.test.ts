import getInputClasses from '../getInputClasses';

describe('getInputClasses function', () => {
  const mockStyles = {
    'default-input': 'default-input-class',
    'error-input': 'error-input-class',
  };

  test('returns default input class when isValid is undefined', () => {
    const result = getInputClasses(undefined, mockStyles);
    expect(result).toBe('default-input-class');
  });

  test('returns default input class when isValid is true', () => {
    const result = getInputClasses(true, mockStyles);
    expect(result).toBe('default-input-class');
  });

  test('returns error input class when isValid is false', () => {
    const result = getInputClasses(false, mockStyles);
    expect(result).toBe('error-input-class');
  });
});
