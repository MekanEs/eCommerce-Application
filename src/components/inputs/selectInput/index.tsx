import { InputProps } from '../../../utils/helpers/interface';
import styles from './selectInput.module.scss';

const SelectInput: React.FC<InputProps> = ({
  label: label,
  id: id,
  placeholder: placeholder,
  hookData: hookData,
  isValid: isValid,
  options: options,
}): JSX.Element => {
  return (
    <div className={styles.field}>
      <label className={getLabelClasses(isValid)} htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className={styles['default-input']}
        {...hookData}
        required
      >
        <option value="">{placeholder}</option>
        {options?.map(({ value: value, label: label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
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

export default SelectInput;
