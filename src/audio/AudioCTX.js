import { createContext } from "react";

const actx = new AudioContext();
const out = actx.destination;

const osc1 = actx.createOscillator();
osc1.type = "sine";
osc1.frequency.value = 200;
const gain1 = actx.createGain();
gain1.gain.value = 0.25;

const comp1 = actx.createDynamicsCompressor();
comp1.attack.value = 0.01;
comp1.release.value = 0.25;
comp1.ratio.value = 10;
comp1.threshold.value = -40;
comp1.knee.value = 40;

osc1.connect(gain1).connect(comp1).connect(out);

const initialValue = {
  actx,
  osc1,
  gain1,
};
const AudioCTX = createContext(initialValue);

export default AudioCTX;
