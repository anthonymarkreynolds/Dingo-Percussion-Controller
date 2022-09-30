import { createContext, useState } from "react";

const SelectCTX = createContext();

export const SelectProvider = ({ children }) => {
  const [selected, setSelected] = useState();
  return (
    <SelectCTX.Provider value={{ selected, setSelected }}>
      {children}
    </SelectCTX.Provider>
  );
};

export default SelectCTX;
