import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';
import createEmailInput from './general/createEmailInput/createEmailInput';
import createPasswordInput from './general/createPasswordInput/createPasswordInput';
import createFirstNameInput from './general/createFirstNameInput/createFirstNameInput';
import createLastNameInput from './general/createLastNameInput/createLastNameInput';
import createDateOfBirthInput from './general/createDateOfBirthInput/createDateOfBirthInput';

export default function createGeneralInfoColumn(
  form: UseFormReturn<FormFields>,
  warningMessage: string,
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>,
  styles: {
    readonly [key: string]: string;
  },
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
