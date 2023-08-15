import { postcodeValidator } from 'postcode-validator';

export default function validatePostcode(
  postCode: string,
  countryCode: string,
): boolean | string {
  try {
    if (!postcodeValidator(postCode, countryCode)) {
      return 'This index does not exist in the selected country';
    }
  } catch (error) {
    return 'This index does not exist in the selected country';
  }

  return true;
}
