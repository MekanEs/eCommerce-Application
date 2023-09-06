import React from 'react';

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
  className?: string;
  disabled?: boolean;
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
  sameAddress: boolean;
  defaultBilling: boolean;
  defaultShipping: boolean;
  newPassword: string;
  currentPassword: string;
}

export interface FormAddress {
  country: string;
  city: string;
  streetName: string;
  building: string;
  apartment: string;
  postalCode: string;
  defaultBilling: boolean;
  defaultShiping: boolean;
}

export interface CheckboxProps {
  id: string;
  label: string;
  hookData: object;
}
