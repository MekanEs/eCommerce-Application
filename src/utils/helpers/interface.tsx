export interface InputProps {
  label: string;
  type?: string;
  id: string;
  placeholder: string;
  hookData: object;
  errorMessage?: string;
  warningMessage?: string | boolean;
  isValid?: boolean;
  className?: string;
  options?: SelectOptions[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectOptions {
  label: string;
  value: string;
}

export interface ButtonProps {
  label: string;
  type: string;
  onClick: () => void;
}

export type Fields =
  | 'email'
  | 'password'
  | 'firstName'
  | 'lastName'
  | 'dateOfBirth'
  | 'shippingCountry'
  | 'billingCountry'
  | 'shippingCity'
  | 'billingCity'
  | 'shippingStreet'
  | 'billingStreet'
  | 'shippingHouseNumber'
  | 'billingHouseNumber'
  | 'shippingApartment'
  | 'billingApartment'
  | 'shippingPostcode'
  | 'billingPostcode'
  | 'sameAddress'
  | 'defaultBilling'
  | 'defaultShipping';

export interface FormFields {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  shippingCountry: string;
  billingCountry: string;
  shippingCity: string;
  billingCity: string;
  shippingStreet: string;
  billingStreet: string;
  shippingHouseNumber: string;
  billingHouseNumber: string;
  shippingApartment: string;
  billingApartment: string;
  shippingPostcode: string;
  billingPostcode: string;
  sameAddress: boolean;
  defaultBilling: boolean;
  defaultShipping: boolean;
}

export interface DirtyFields {
  email?: boolean | undefined;
  password?: boolean | undefined;
  firstName?: boolean | undefined;
  lastName?: boolean | undefined;
  dateOfBirth?: boolean | undefined;
  shippingCountry?: boolean | undefined;
  billingCountry?: boolean | undefined;
  shippingCity?: boolean | undefined;
  billingCity?: boolean | undefined;
  shippingStreet?: boolean | undefined;
  billingStreet?: boolean | undefined;
  shippingHouseNumber?: boolean | undefined;
  billingHouseNumber?: boolean | undefined;
  shippingApartment?: boolean | undefined;
  billingApartment?: boolean | undefined;
  shippingPostcode?: boolean | undefined;
  billingPostcode?: boolean | undefined;
  sameAddress?: boolean | undefined;
  defaultBilling?: boolean | undefined;
  defaultShipping?: boolean | undefined;
}

export interface CheckboxProps {
  id: string;
  label: string;
  hookData: object;
}
