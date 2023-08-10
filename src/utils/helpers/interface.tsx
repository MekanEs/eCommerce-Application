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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ButtonProps {
  label: string;
  type: string;
  onClick: () => void;
}

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
  checkbox: boolean;
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
}

export interface CheckboxProps {
  id: string;
  label: string;
  value?: boolean;
  onChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | (() => void);
}
