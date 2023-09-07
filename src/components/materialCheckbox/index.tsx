import React, { ChangeEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  materialtype,
  setMaterial,
} from '../../store/productFilter/productFilter.slice';
import { isKey } from '../../utils/helpers/isKeyOfObj';

const Material: React.FC = () => {
  const dispatch = useAppDispatch();
  const materials = useAppSelector((state) => state.filter.materials);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newObj = structuredClone(materials);
    if (isKey<materialtype>(event.target.id)) {
      newObj[event.target.id] = event.target.checked;
      dispatch(setMaterial(newObj));
    }
  };
  return (
    <div>
      <h3>Frame materials</h3>
      {Object.keys(materials).map((el, i) => {
        if (isKey<materialtype>(el)) {
          return (
            <div key={i}>
              <input
                onChange={handleChange}
                type="checkbox"
                name={el}
                id={el}
                checked={materials[el]}
              />
              <label htmlFor={el}>{el}</label>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Material;
