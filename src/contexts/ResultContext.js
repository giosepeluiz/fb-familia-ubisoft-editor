import { createContext, useState } from "react";

export const ResultContext = createContext(["", () => {}]);

export const ResultProvider = ({ children }) => {
  const [state, setState] = useState([]);
  return <ResultContext.Provider value={[state, setState]}>{children}</ResultContext.Provider>;
};
