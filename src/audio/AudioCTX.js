import { createContext } from "react";
import pads from "./Pads";

const play = () => {
  for (const pad in pads) {
    pads[pad].osc.start();
  }
};
const stop = () => {
  for (const pad in pads) {
    pads[pad].osc.stop();
  }
};

const initialValue = {
  pads,
  play,
  stop,
};

const AudioCTX = createContext(initialValue);

export default AudioCTX;
