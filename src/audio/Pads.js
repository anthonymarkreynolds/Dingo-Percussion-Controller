import Pad from "./Pad";

const actx = new AudioContext();

const pads = {
  "Hi Tom": new Pad("7", actx, "Hi Tom", "sine", 220, 0.5),
  "Crash Cym": new Pad("8", actx, "Crash Cym", "sine", 440, 0.3),
  "Ride Cym": new Pad("9", actx, "Ride Cym", "sine", 880, 0.2),
  "Lo Tom": new Pad("4", actx, "Lo Tom", "sine", 440, 0.3),
  "Open HiHat": new Pad("5", actx, "Open HiHat", "sine", 440, 0.4),
  "Closed HiHat": new Pad("6", actx, "Closed HiHat", "sine", 440, 0.5),
  "Kick Drum": new Pad("1", actx, "Kick Drum", "sine", 440, 0.6),
  "Snare Drum": new Pad("2", actx, "Snare Drum", "sine", 440, 0.7),
  clap: new Pad("3", actx, "Clap", "sine", 440, 0.8),
};

export default pads;
