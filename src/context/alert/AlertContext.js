import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispacth] = useReducer(AlertReducer, initialState);

  // Set alert
  const setAlert = (msg, type) => {
    dispacth({
      type: 'SET_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => dispacth({ type: 'REMOVE_ALERT' }), 2500);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
