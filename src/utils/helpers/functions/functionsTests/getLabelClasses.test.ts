import getLabelClasses from '../getLabelClasses';

describe('getLabelClasses function', () => {
  const mockStyles = {
    'default-label': 'default-label-class',
    'valid-label': 'valid-label-class',
    'error-label': 'error-label-class',
  };

  test('returns default label class when isValid is undefined', () => {
    const result = getLabelClasses(undefined, mockStyles);
    expect(result).toBe('default-label-class');
  });

  test('returns valid label class when isValid is true', () => {
    const result = getLabelClasses(true, mockStyles);
    expect(result).toBe('valid-label-class');
  });

  test('returns error label class when isValid is false', () => {
    const result = getLabelClasses(false, mockStyles);
    expect(result).toBe('error-label-class');
  });
});
