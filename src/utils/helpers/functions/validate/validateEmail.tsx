export default function validateEmail(value: string): boolean | string {
  if (!/@/.test(value)) {
    return 'Email address must contain the "@" symbol';
  }

  if (!/.+@/.test(value)) {
    return 'Enter a valid domain for the email address, e.g. user@example.com';
  }

  if (value.trim() !== value) {
    return 'Password must not contain leading or trailing spaces';
  }

  if (!value.match(/@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,}$/)) {
    return 'Enter a valid domain for the email address, e.g. user@example.com';
  }

  return true;
}
