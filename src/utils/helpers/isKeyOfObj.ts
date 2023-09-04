export function isKey<E>(str: string): str is Extract<keyof E, string> {
  return true;
}
