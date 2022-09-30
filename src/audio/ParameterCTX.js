import { createContext, useState } from "react";
import { padParams } from "./Pads";

// // start VCOs
// const play = () => {
//   for (const pad in pads) {
//     pads[pad].osc.start();
//   }
// };
// const stop = () => {
//   for (const pad in pads) {
//     pads[pad].osc.stop();
//   }
// };

// const initialValue = {
//   actx,
//   pads,
//   play,
//   stop,
// };

const ParameterCTX = createContext();

export const ParameterProvider = ({ children }) => {
  const [parameters, setParameters] = useState(padParams);
  return (
    <ParameterCTX.Provider value={{ parameters, setParameters }}>
      {children}
    </ParameterCTX.Provider>
  );
};

export default ParameterCTX;
// const AudioCTX = createContext(initialValue);
// export default AudioCTX;
