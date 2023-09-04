import { getAddress } from './getAddress';

const options = {
  email: 'test@example.com',
  password: 'password123',
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-01-01',
  billingCountry: 'USA',
  billingCity: 'New York',
  billingStreet: '123 Main St',
  billingHouseNumber: 'Apt 4B',
  billingApartment: '456',
  billingPostcode: '10001',
  shippingCountry: 'Canada',
  shippingCity: 'Toronto',
  shippingStreet: '456 Elm St',
  shippingHouseNumber: 'Unit 2C',
  shippingApartment: '789',
  shippingPostcode: 'M5V 2V6',
  sameAddress: false,
  defaultBilling: true,
  defaultShipping: false,
};

test('getAddress returns an array with billing and shipping addresses', () => {
  const result = getAddress(options);

  expect(result).toHaveLength(2);

  expect(result[0]).toEqual({
    country: 'USA',
    city: 'New York',
    streetName: '123 Main St',
    building: 'Apt 4B',
    apartment: '456',
    postalCode: '10001',
  });

  expect(result[1]).toEqual({
    country: 'Canada',
    city: 'Toronto',
    streetName: '456 Elm St',
    building: 'Unit 2C',
    apartment: '789',
    postalCode: 'M5V 2V6',
  });
});
