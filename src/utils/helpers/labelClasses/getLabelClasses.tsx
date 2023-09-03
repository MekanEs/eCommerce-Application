export default function getLabelClasses(
  isValid: boolean | undefined,
  styles: { readonly [x: string]: string },
): string {
  if (isValid === undefined) {
    return styles['default-label'];
  } else {
    if (isValid) {
      return styles['valid-label'];
    } else {
      return styles['error-label'];
    }
  }
}
