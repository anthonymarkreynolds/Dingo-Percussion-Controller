import { createContext, useState } from "react";
import _pads from "./Pads";

const play = () => {
  for (const pad in _pads) {
    _pads[pad].osc.start();
  }
};
const stop = () => {
  for (const pad in _pads) {
    _pads[pad].osc.stop();
  }
};

const AudioCTX = createContext();

export const AudioCTXProvider = ({ children }) => {
  const [pads, setPads] = useState(_pads);
  const setParam = (name, param) => (value) => {
    setPads((prev) => {
      console.log("test: ", name);
      prev[name].parameters[param].setParam(value);
      console.log(prev.update);
      return prev;
    });
  };
  return (
    <AudioCTX.Provider value={{ play, stop, pads, setParam }}>
      {children}
    </AudioCTX.Provider>
  );
};

export default AudioCTX;
