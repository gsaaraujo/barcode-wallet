import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export const useUser = () => {
  const context = useContext(UserContext);

  return context;
};
