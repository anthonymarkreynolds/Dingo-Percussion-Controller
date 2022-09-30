import Pad from "./Pad";

const actx = new AudioContext();

const pads = {
  "hi tom": new Pad(actx, "Hi Tom", "sine", 220, 0.1),
  "crash cym": new Pad(actx, "Crash Cym", "sine", 440, 0.3),
  "ride cym": new Pad(actx, "Ride Cym", "sine", 880, 0.2),
  // "lo tom": new Pad("Lo Tom", "sine", 440, 0.3),
  // "open hihat": new Pad("Open HiHat", "sine", semitoneToPitch(4), 0.4),
  // "closed hihat": new Pad("Closed HiHat", "sine", semitoneToPitch(3), 0.5),
  // "kick drum": new Pad("Kick Drum", "sine", semitoneToPitch(2), 0.6),
  // "snare drum": new Pad("Snare Drum", "sine", semitoneToPitch(1), 0.7),
  // clap: new Pad("Clap", "sine", semitoneToPitch(0), 0.8),
};

let initParams = {};
for (const pad in pads) {
  initParams[pad] = pads[pad].parameters;
}
export let padParams = initParams;

export default pads;
