import React from 'react';
import { removeUser } from '../../store/auth/auth.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick: () => void = () => {
    dispatch(removeUser());
    localStorage.setItem('token', '');
  };
  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
