import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const setAlert = (msg, type) => {
    dispatch({
      type: "set_alert",
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: "remove_alert" });
    }, 3000);
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
