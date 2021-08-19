import React, { useState, createContext } from "react";
import { data } from "../Data/data";

const initState = {
  data: data,
  activeStation: {},
  admin: false,
};
export const Context = createContext(initState);
export default function Store({ children }) {
  const [state, setState] = useState(initState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
