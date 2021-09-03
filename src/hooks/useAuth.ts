import { useContext } from 'react';
import { AuthContext } from '../context/authProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
