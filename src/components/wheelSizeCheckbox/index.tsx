import React, { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import {
  set16,
  set20,
  set24,
  set26,
  set29,
  wheelSizetype,
} from '../../store/productFilter/productFilter.slice';
import { useDispatch } from 'react-redux';

const WheelSize: React.FC = () => {
  const dispatch = useDispatch();
  const wheelSize = useAppSelector((state) => state.filter.wheelsize);
  const setters = {
    '16\\"': set16,
    '20\\"': set20,
    '24\\"': set24,
    '26\\"': set26,
    '29\\"': set29,
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(
      setters[event.target.id as keyof typeof setters](event.target.checked),
    );
  };
  return (
    <div>
      <h3>Wheel size</h3>
      {Object.keys(wheelSize).map((el, i) => {
        return (
          <div key={i}>
            <input
              onChange={handleChange}
              type="checkbox"
              name={el}
              id={el}
              checked={wheelSize[el as keyof wheelSizetype]}
            />
            <label htmlFor={el}>{el}</label>
          </div>
        );
      })}
    </div>
  );
};

export default WheelSize;
