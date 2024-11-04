import { createContext } from 'react';

interface AlertContext {
  alert: any;
  setAlert: (msg: string, type: string) => void;
}

const alertContext = createContext<AlertContext>({
  alert: null,
  setAlert: () => {}
});

export default alertContext;
