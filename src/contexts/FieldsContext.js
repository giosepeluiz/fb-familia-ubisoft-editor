/* eslint-disable */
import { createContext, useState } from "react";

export const FieldsContext = createContext(["", () => {}]);

export const FieldsProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return <FieldsContext.Provider value={[state, setState]}>{children}</FieldsContext.Provider>;
};
