import { CheckboxProps } from '../../utils/helpers/interface';
import styles from './checkbox.module.scss';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, value, onChange }) => {
  return (
    <div className={styles['checkbox-container']}>
      <input id={id} type="checkbox" checked={value} onChange={onChange} />
      <label className={styles['checkbox-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
