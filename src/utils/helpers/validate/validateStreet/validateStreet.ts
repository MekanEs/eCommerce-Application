export default function validateStreet(value: string): boolean | string {
  if (!/.+/.test(value)) {
    return 'Value must contain at least one character';
  }

  return true;
}
