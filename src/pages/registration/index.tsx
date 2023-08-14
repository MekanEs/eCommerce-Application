import React, { useState } from 'react';
import styles from './registration.module.scss';
import { Link } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { Fields, FormFields } from '../../utils/helpers/interface';
import {
  createEmailInput,
  createPasswordInput,
  createFirstNameInput,
  createLastNameInput,
  createDateOfBirthInput,
  createBillingCityInput,
  createBillingCountryInput,
  createBillingStreetInput,
  createBillingHouseNumberInput,
  createBillingApartmentInput,
  createBillingPostcodeInput,
  createShippingCountryInput,
  createShippingCityInput,
  createShippingStreetInput,
  createShippingHouseNumberInput,
  createShippingApartmentInput,
  createShippingPostcodeInput,
  createDefaultBilling,
  createDefaultShipping,
  createSameAddress,
} from '../../utils/helpers/functions';
import createButton from '../../utils/helpers/functions/createButton';

const Registartion: React.FC = (): JSX.Element => {
  const form = useForm<FormFields>({
    mode: 'onChange',
    defaultValues: {
      sameAddress: false,
      defaultShipping: false,
      defaultBilling: false,
    },
  });

  if (form.getValues('sameAddress')) {
    setShippingValues(form);
  }

  cloneBillingerrorToShipping(form);

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>Welcome to «Veros» Store</h2>
      <div className={styles['login-link']}>
        <p>Have an account? </p>
        <Link to="/login">Log in</Link>
      </div>
      <div className={styles['form-container']}>{createForm(form)}</div>
    </div>
  );
};

function createForm(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const onSubmit: SubmitHandler<FormFields> = () => form.reset();
  const [warningMessage, setWarningMessage] = useState('');

  return (
    <form
      className={styles['registration-form']}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className={styles['columns-container']}>
        {createGeneralInfoColumn(form, warningMessage, setWarningMessage)}
        {createBillingAddressColumn(form)}
        {createShippingAddressColumn(form, form.watch('sameAddress'))}
      </div>
      {createButton('registration')}
    </form>
  );
}

function createGeneralInfoColumn(
  form: UseFormReturn<FormFields, unknown, undefined>,
  warningMessage: string,
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>,
): JSX.Element {
  return (
    <div className={styles['general-column']}>
      <h5 className={styles['form-title']}>General</h5>
      {createEmailInput(form)}
      {createPasswordInput(form, warningMessage, setWarningMessage)}
      {createFirstNameInput(form)}
      {createLastNameInput(form)}
      {createDateOfBirthInput(form)}
    </div>
  );
}

function createBillingAddressColumn(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  return (
    <div className={styles['billing-column']}>
      <h5 className={styles['form-title']}>Billing address</h5>
      {createBillingCountryInput(form)}
      {createBillingCityInput(form)}
      {createBillingStreetInput(form)}
      <div className={styles['house-info']}>
        {createBillingHouseNumberInput(form, styles['house-number'])}
        {createBillingApartmentInput(form, styles['apartment'])}
      </div>
      {createBillingPostcodeInput(form)}
      {createDefaultBilling(form.register)}
      {createSameAddress(form.register)}
    </div>
  );
}

function createShippingAddressColumn(
  form: UseFormReturn<FormFields, unknown, undefined>,
  needDisable: boolean,
): JSX.Element {
  return (
    <div
      className={
        styles['shipping-column'] +
        ' ' +
        (needDisable ? styles['disabled-shipping'] : '')
      }
    >
      <h5 className={styles['form-title']}>Shipping address</h5>
      {createShippingCountryInput(form)}
      {createShippingCityInput(form)}
      {createShippingStreetInput(form)}
      <div className={styles['house-info']}>
        {createShippingHouseNumberInput(form, styles['house-number'])}
        {createShippingApartmentInput(form, styles['apartment'])}
      </div>
      {createShippingPostcodeInput(form)}
      {createDefaultShipping(form.register)}
    </div>
  );
}

function setShippingValues(
  form: UseFormReturn<FormFields, unknown, undefined>,
): void {
  const fields: Fields[][] = [
    ['shippingCountry', 'billingCountry'],
    ['shippingCity', 'billingCity'],
    ['shippingStreet', 'billingStreet'],
    ['shippingHouseNumber', 'billingHouseNumber'],
    ['shippingApartment', 'billingApartment'],
    ['shippingPostcode', 'billingPostcode'],
  ];

  fields.forEach(([to, from]) => {
    form.setValue(to, form.watch(from), {
      shouldDirty: form.getValues(to) !== '',
    });
  });
}

function cloneBillingerrorToShipping(
  form: UseFormReturn<FormFields, unknown, undefined>,
): void {
  const fields: Fields[][] = [
    ['shippingCountry', 'billingCountry'],
    ['shippingCity', 'billingCity'],
    ['shippingStreet', 'billingStreet'],
    ['shippingHouseNumber', 'billingHouseNumber'],
    ['shippingApartment', 'billingApartment'],
    ['shippingPostcode', 'billingPostcode'],
  ];

  fields.forEach(([to, from]) => {
    if (
      form.getValues(to) === form.getValues(from) &&
      form.formState.dirtyFields[to] &&
      form.formState.errors[from]?.message
    ) {
      form.formState.errors[to] = {
        type: 'validate',
        message: form.formState.errors[from]?.message,
      };
    }

    if (
      form.getValues(to) === form.getValues(from) &&
      !form.formState.errors[from]?.message
    ) {
      form.formState.errors[to] = undefined;
    }
  });
}

export default Registartion;
