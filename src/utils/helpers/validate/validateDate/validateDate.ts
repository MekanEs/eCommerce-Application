export default function validateDate(value: string): boolean | string {
  const date: Date = new Date(value);

  if (date.getFullYear() < 1940) {
    return 'Invalid birth year. Year must be greater than or equal to 1940';
  }

  date.setFullYear(date.getFullYear() + 13);

  if (date > new Date()) {
    return 'You are too young. Users over 13 years of age are allowed to register';
  }

  return true;
}
