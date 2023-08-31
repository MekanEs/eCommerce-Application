import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';
import createShippingCountryInput from './shippingAddress/createShippingCountryInput';
import createShippingCityInput from './shippingAddress/createShippingCityInput/createShippingCityInput';
import createShippingStreetInput from './shippingAddress/createShippingStreetInput/createShippingStreetInput';
import createShippingHouseNumberInput from './shippingAddress/createShippingHouseNumberInput/createShippingHouseNumberInput';
import createShippingApartmentInput from './shippingAddress/createShippingApartmentInput/createShippingApartmentInput';
import createShippingPostcodeInput from './shippingAddress/createShippingPostcodeInput/createShippingPostcodeInput';
import createDefaultShipping from './billingAddress/checkboxes/createDefaultShipping/createDefaultShipping';

export default function createShippingAddressColumn(
  form: UseFormReturn<FormFields>,
  needDisable: boolean,
  styles: {
    readonly [key: string]: string;
  },
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
