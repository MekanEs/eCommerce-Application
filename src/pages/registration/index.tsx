import React, { useState } from 'react';
import styles from './registration.module.scss';
import { Link } from 'react-router-dom';
import {
  FieldErrors,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
import { FormFields, DirtyFields } from '../../utils/helpers/interface';
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

const Registartion: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<FormFields>({ mode: 'onChange' });
  const onSubmit: SubmitHandler<FormFields> = () => reset();
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>Welcome to «Veros» Store</h2>
      <div className={styles['login-link']}>
        <p>Have an account? </p>
        <Link to="/login">Log in</Link>
      </div>
      <div className={styles['form-container']}>
        <form
          className={styles['registration-form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          {createGeneralInfoColumn(errors, dirtyFields, register)}
          {createBillingAddressColumn(errors, dirtyFields, register)}
          {createShippingAddressColumn(errors, dirtyFields, register)}
        </form>
      </div>
    </div>
  );
};

function createGeneralInfoColumn(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <div>
      <h5 className={styles['form-title']}>General</h5>
      {createEmailInput(errors, dirtyFields, register)}
      {createPasswordInput(errors, dirtyFields, register)}
      {createFirstNameInput(errors, dirtyFields, register)}
      {createLastNameInput(errors, dirtyFields, register)}
      {createDateOfBirthInput(errors, dirtyFields, register)}
    </div>
  );
}

function createBillingAddressColumn(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  const [checked, setChecked] = useState(false);
  const onChange = (): void => {
    setChecked(!checked);
  };
  const [checkedSame, setCheckedSame] = useState(false);
  const onChangeSame = (): void => {
    setCheckedSame(!checkedSame);
  };

  return (
    <div className={styles['billing-column']}>
      <h5 className={styles['form-title']}>Billing address</h5>
      {createBillingCountryInput(errors, dirtyFields, register)}
      {createBillingCityInput(errors, dirtyFields, register)}
      {createBillingStreetInput(errors, dirtyFields, register)}
      <div className={styles['house-info']}>
        {createBillingHouseNumberInput(
          errors,
          dirtyFields,
          register,
          styles['house-number'],
        )}
        {createBillingApartmentInput(
          errors,
          dirtyFields,
          register,
          styles['apartment'],
        )}
      </div>
      {createBillingPostcodeInput(errors, dirtyFields, register)}
      {createDefaultBilling(checked, onChange)}
      {createSameAddress(checkedSame, onChangeSame)}
    </div>
  );
}

function createShippingAddressColumn(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  const [checked, setChecked] = useState(false);
  const onChange = (): void => {
    setChecked(!checked);
  };

  return (
    <div>
      <h5 className={styles['form-title']}>Shipping address</h5>
      {createShippingCountryInput(errors, dirtyFields, register)}
      {createShippingCityInput(errors, dirtyFields, register)}
      {createShippingStreetInput(errors, dirtyFields, register)}
      <div className={styles['house-info']}>
        {createShippingHouseNumberInput(
          errors,
          dirtyFields,
          register,
          styles['house-number'],
        )}
        {createShippingApartmentInput(
          errors,
          dirtyFields,
          register,
          styles['apartment'],
        )}
      </div>
      {createShippingPostcodeInput(errors, dirtyFields, register)}
      {createDefaultShipping(checked, onChange)}
    </div>
  );
}

export default Registartion;
