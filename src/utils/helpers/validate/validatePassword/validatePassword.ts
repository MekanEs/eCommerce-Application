export default function validatePassword(value: string): boolean | string {
  if (!/[A-Z]/.test(value)) {
    return 'Password must contain at least one uppercase letter (AZ)';
  }

  if (!/[a-z]/.test(value)) {
    return 'Password must contain at least one lowercase letter (az)';
  }

  if (!/\d/.test(value)) {
    return 'Password must contain at least one number (0-9)';
  }

  if (value.trim() !== value) {
    return 'Password must not contain leading or trailing spaces';
  }

  return true;
}
