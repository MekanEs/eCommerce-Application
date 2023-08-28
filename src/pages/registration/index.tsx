import React, { Dispatch, useEffect, useState } from 'react';
import styles from './registration.module.scss';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';
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
} from '../../utils/helpers/formElements';
import createButton from '../../components/form/createButton/createButton';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { loginUser, registrationUser } from '../../store/auth/auth.slice';
import { store } from '../../store/store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { ISliceAuth } from '../../interfaces/sliceAuth';
import { Fields } from '../../types/formInputs';

const Registration: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
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

function createForm(form: UseFormReturn<FormFields>): React.JSX.Element {
  const dispatch: ThunkDispatch<{ user: ISliceAuth }, undefined, AnyAction> &
    Dispatch<AnyAction> = useAppDispatch();
  const navigator: NavigateFunction = useNavigate();
  const onSubmit: SubmitHandler<FormFields> = (data: FormFields): void => {
    registration(
      data,
      form,
      setErrorMessage,
      setSuccesMessage,
      dispatch,
      navigator,
    );
  };
  const [warningMessage, setWarningMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [succesMessage, setSuccesMessage] = useState('');
  createUseEffect(form, errorMessage, setErrorMessage);
  createUseEffect(form, succesMessage, setSuccesMessage);
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
        {createButton('registration', styles.button)}
      </form>
      {errorMessage && createErrorMessage(errorMessage)}
      {succesMessage && createSuccessMessage(succesMessage)}
    </>
  );
}
function createErrorMessage(errorMessage: string): JSX.Element {
  return (
    <div>
      <p className={`${styles['form-message']} ${styles['error']}`}>
        {errorMessage}
      </p>
      <div className={styles['additional-text']}>
        <p>Use a different email address or sign in to an existing account –</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}
function createSuccessMessage(succesMessage: string): JSX.Element {
  return (
    <div>
      <p className={`${styles['form-message']} ${styles['success']}`}>
        {succesMessage}
      </p>
      <div className={styles['additional-text']}>
        <p>Succesfully registered new user</p>
      </div>
    </div>
  );
}
function createGeneralInfoColumn(
  form: UseFormReturn<FormFields>,
  warningMessage: string,
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>,
): React.JSX.Element {
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
  form: UseFormReturn<FormFields>,
): React.JSX.Element {
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
  form: UseFormReturn<FormFields>,
  needDisable: boolean,
): React.JSX.Element {
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

function createEffect(form: UseFormReturn<FormFields>): void {
  const sameAddress: boolean = form.watch('sameAddress');
  const billingCountry: string = form.watch('billingCountry');
  const billingCity: string = form.watch('billingCity');
  const billingStreet: string = form.watch('billingStreet');
  const billingHouseNumber: string = form.watch('billingHouseNumber');
  const billingApartment: string = form.watch('billingApartment');
  const billingPostcode: string = form.watch('billingPostcode');

  useEffect((): void => {
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

function setShippingValues(form: UseFormReturn<FormFields>): void {
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
  form: UseFormReturn<FormFields>,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  setSuccesMessage: React.Dispatch<React.SetStateAction<string>>,
  dispatch: ThunkDispatch<{ user: ISliceAuth }, undefined, AnyAction> &
    Dispatch<AnyAction>,
  navigator: NavigateFunction,
): void {
  dispatch(registrationUser(data)).then(() => {
    const state = store.getState().auth;
    if (state.status === 'ok') {
      setSuccesMessage(typeof state.message === 'string' ? state.message : '');
      setTimeout(() => {
        dispatch(loginUser(data));
        form.reset();
        navigator('/');
      }, 500);
    } else {
      form.setError('email', {});
      setErrorMessage(typeof state.message === 'string' ? state.message : '');
    }
  });
}

function createUseEffect(
  form: UseFormReturn<FormFields>,
  message: string,
  setter: React.Dispatch<React.SetStateAction<string>>,
): void {
  useEffect((): void => {
    if (message != '') {
      form.trigger('email');
    }
    setter('');
  }, [form.watch('email'), form.watch('password')]);
}

export default Registration;
