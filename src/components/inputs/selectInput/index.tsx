import { InputProps } from '../../../utils/helpers/interface';
import styles from './selectInput.module.scss';

const SelectInput: React.FC<InputProps> = ({
  label: label,
  id: id,
  placeholder: placeholder,
  hookData: hookData,
  errorMessage: errorMessage,
  isValid: isValid,
  options: options,
}): JSX.Element => {
  return (
    <div className={styles.field}>
      <label className={getLabelClasses(isValid)} htmlFor={id}>
        {label}
      </label>
      <select
        defaultValue=""
        id={id}
        className={getInputClasses(isValid)}
        {...hookData}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map(({ value: value, label: label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
    </div>
  );
};

function getLabelClasses(isValid: boolean | undefined): string {
  if (isValid === undefined) {
    return styles['default-label'];
  } else {
    if (isValid) {
      return styles['valid-label'];
    } else {
      return styles['error-label'];
    }
  }
}

function getInputClasses(isValid: boolean | undefined): string {
  if (isValid === undefined || isValid) {
    return styles['default-input'];
  } else {
    return styles['error-input'];
  }
}

export default SelectInput;
