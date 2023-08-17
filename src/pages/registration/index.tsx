import React, { Dispatch, useEffect, useState } from 'react';
import styles from './registration.module.scss';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
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
import { useAppDispatch } from '../../hooks/redux-hooks';
import { loginUser, registrationUser } from '../../store/auth/auth.slice';
import { store } from '../../store/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { ISliceUser } from '../../interfaces/sliceUser';

const Registartion: React.FC = (): JSX.Element => {
  const form = useForm<FormFields>({
    mode: 'onChange',
  });

  createEffect(form);

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
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    registration(data, form, setErrorMessage, dispatch, navigator);
  };
  const [warningMessage, setWarningMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  createUseEffect(form, errorMessage, setErrorMessage);

  return (
    <>
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
      {errorMessage && (
        <div className={styles['error-container']}>
          <p className={styles['form-error']}>{errorMessage}</p>
          <div className={styles['additional-error-text']}>
            <p>
              Use a different email address or sign in to an existing account –
            </p>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      )}
    </>
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

function createEffect(
  form: UseFormReturn<FormFields, unknown, undefined>,
): void {
  const sameAddress = form.watch('sameAddress');
  const billingCountry = form.watch('billingCountry');
  const billingCity = form.watch('billingCity');
  const billingStreet = form.watch('billingStreet');
  const billingHouseNumber = form.watch('billingHouseNumber');
  const billingApartment = form.watch('billingApartment');
  const billingPostcode = form.watch('billingPostcode');

  useEffect(() => {
    if (sameAddress) {
      setShippingValues(form);
    } else if (form.formState.dirtyFields.sameAddress) {
      form.trigger('shippingCountry');
      form.trigger('shippingCity');
      form.trigger('shippingStreet');
      form.trigger('shippingHouseNumber');
      form.trigger('shippingApartment');
      form.trigger('shippingPostcode');
    }
  }, [
    sameAddress,
    billingCountry,
    billingCity,
    billingStreet,
    billingHouseNumber,
    billingApartment,
    billingPostcode,
  ]);
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
    form.formState.errors[to] = undefined;
    form.setValue(to, form.watch(from), {
      shouldDirty: true,
    });
  });
}

function registration(
  data: FormFields,
  form: UseFormReturn<FormFields, unknown, undefined>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  dispatch: ThunkDispatch<{ user: ISliceUser }, undefined, AnyAction> &
    Dispatch<AnyAction>,
  navigator: NavigateFunction,
): void {
  dispatch(registrationUser(data)).then(() => {
    const state = store.getState().user;
    if (state.status === 'ok') {
      dispatch(loginUser(data));
      form.reset();
      navigator('/');
    } else {
      form.setError('email', {});

      setErrorMessage(typeof state.message === 'string' ? state.message : '');
    }
  });
}

function createUseEffect(
  form: UseFormReturn<FormFields, unknown, undefined>,
  errorMessage: string,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
): void {
  useEffect(() => {
    if (errorMessage != '') {
      form.trigger('email');
    }
    setErrorMessage('');
  }, [form.watch('email'), form.watch('password')]);
}

export default Registartion;
