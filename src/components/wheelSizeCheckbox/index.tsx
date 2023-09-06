import React, { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  setWheelSize,
  wheelSizeType,
} from '../../store/productFilter/productFilter.slice';
import { useDispatch } from 'react-redux';
import { isKey } from '../../utils/helpers/isKeyOfObj';

const WheelSize: React.FC = () => {
  const dispatch = useDispatch();
  const wheelSize = useAppSelector((state) => state.filter.wheelsize);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newObj = structuredClone(wheelSize);
    if (isKey<wheelSizeType>(event.target.id)) {
      const id = event.target.id;
      newObj[id] = event.target.checked;
      dispatch(setWheelSize(newObj));
    }
  };

  return (
    <div>
      <h3>Wheel size</h3>
      {Object.keys(wheelSize).map((el, i) => {
        if (isKey<wheelSizeType>(el)) {
          return (
            <div key={i}>
              <input
                onChange={handleChange}
                type="checkbox"
                name={el}
                id={el}
                checked={wheelSize[el]}
              />
              <label htmlFor={el}>{el}</label>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WheelSize;
