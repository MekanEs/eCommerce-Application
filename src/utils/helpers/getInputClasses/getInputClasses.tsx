export default function getInputClasses(
  isValid: boolean | undefined,
  styles: { readonly [x: string]: string },
): string {
  if (isValid === undefined || isValid) {
    return styles['default-input'];
  } else {
    return styles['error-input'];
  }
}
