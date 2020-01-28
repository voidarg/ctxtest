import React, { createContext, useMemo, useReducer, useContext } from "react";
import reducer, { useMyController } from "./MyController";

const Context = createContext();

const Provider = ({ value: initialValue = 0, children }) => {
  const [data, dispatch] = useReducer(reducer, initialValue);
  const controller = useMyController(dispatch);
  const value = useMemo(() => ({ data, controller }), [data, controller]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useMyContext = () => useContext(Context);
export default Provider;
