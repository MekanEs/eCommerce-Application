import { BaseAddress } from '@commercetools/platform-sdk';
import { regUser } from '../../types/auth';

export const getAddress = (options: regUser): BaseAddress[] => {
  const address = [
    {
      country: options.billingCountry,
      city: options.billingCity,
      streetName: options.billingStreet,
      building: options.billingHouseNumber,
      apartment: options.billingApartment,
      postalCode: options.billingPostcode,
    },
    {
      country: options.shippingCountry,
      city: options.shippingCity,
      streetName: options.shippingStreet,
      building: options.shippingHouseNumber,
      apartment: options.shippingApartment,
      postalCode: options.shippingPostcode,
    },
  ];
  return address;
};
