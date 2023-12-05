import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';
import createBillingCountryInput from './billingAddress/createBillingCountryInput';
import createBillingCityInput from './billingAddress/createBillingCityInput/createBillingCityInput';
import createBillingStreetInput from './billingAddress/createBillingStreetInput/createBillingStreetInput';
import createBillingHouseNumberInput from './billingAddress/createBillingHouseNumberInput/createBillingHouseNumberInput';
import createBillingApartmentInput from './billingAddress/createBillingApartmentInput/createBillingApartmentInput';
import createBillingPostcodeInput from './billingAddress/createBillingPostcodeInput/createBillingPostcodeInput';
import createDefaultBilling from './billingAddress/checkboxes/createDefaultBilling/createDefaultBilling';
import createSameAddress from './billingAddress/checkboxes/createSameAddress/createSameAddress';

export default function createBillingAddressColumn(
  form: UseFormReturn<FormFields>,
  styles: {
    readonly [key: string]: string;
  },
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
