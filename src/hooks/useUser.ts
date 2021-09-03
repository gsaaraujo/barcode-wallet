import { useContext } from 'react';
import { UserContext } from '../context/userProvider';

export const useAuth = () => {
  const context = useContext(UserContext);

  return context;
};
