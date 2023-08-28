import React, { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  materialtype,
  setAluminum,
  setCarbon,
  setSteel,
} from '../../store/productFilter/productFilter.slice';
import { useDispatch } from 'react-redux';

const Material: React.FC = () => {
  const dispatch = useDispatch();
  const materials = useAppSelector((state) => state.filter.materials);
  const setters = { Aluminum: setAluminum, Carbon: setCarbon, Steel: setSteel };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      setters[event.target.id as keyof typeof setters](event.target.checked),
    );
  };
  return (
    <div>
      <h3>Frame materials</h3>
      {Object.keys(materials).map((el, i) => {
        return (
          <div key={i}>
            <input
              onChange={handleChange}
              type="checkbox"
              name={el}
              id={el}
              checked={materials[el as keyof materialtype]}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Material;
