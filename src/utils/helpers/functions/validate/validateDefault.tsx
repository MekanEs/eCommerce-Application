export default function validateName(value: string): boolean | string {
  if (!/.+/.test(value)) {
    return 'Value must contain at least one character';
  }

  if (/[!\\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value)) {
    return 'Value must not contain special characters';
  }

  if (/\d/.test(value)) {
    return 'Value must not contain digits';
  }

  return true;
}
