import { CheckboxProps } from '../../utils/helpers/interface';
import styles from './checkbox.module.scss';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, hookData }) => {
  return (
    <div className={styles['checkbox-container']}>
      <input id={id} type="checkbox" {...hookData} />
      <label className={styles['checkbox-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
