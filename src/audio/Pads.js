import Pad from "./Pad";

const actx = new AudioContext();

const pads = {
  "Hi Tom": new Pad("7", actx, "Hi Tom", "square", 220, 0.5),
  "Crash Cym": new Pad("8", actx, "Crash Cym", "sine", 440, 0.5),
  "Ride Cym": new Pad("9", actx, "Ride Cym", "sine", 880, 0.5),
  "Lo Tom": new Pad("4", actx, "Lo Tom", "sine", 440, 0.5),
  "Open HiHat": new Pad("5", actx, "Open HiHat", "sine", 440, 0.5),
  "Closed HiHat": new Pad("6", actx, "Closed HiHat", "sine", 440, 0.5),
  "Kick Drum": new Pad("1", actx, "Kick Drum", "sawtooth", 220, 0.5),
  "Snare Drum": new Pad("2", actx, "Snare Drum", "sine", 440, 0.5),
  clap: new Pad("3", actx, "Clap", "sine", 440, 0.5),
};

export default pads;
