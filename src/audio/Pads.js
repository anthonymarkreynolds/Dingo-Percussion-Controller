import Pad from "./Pad";

const actx = new AudioContext();

const pads = {
  "Hi Tom": new Pad(actx, "Hi Tom", "sine", 220, 0.5),
  "Crash Cym": new Pad(actx, "Crash Cym", "sine", 440, 0.3),
  "Ride Cym": new Pad(actx, "Ride Cym", "sine", 880, 0.2),
  "Lo Tom": new Pad(actx, "Lo Tom", "sine", 440, 0.3),
  "Open HiHat": new Pad(actx, "Open HiHat", "sine", 440, 0.4),
  "Closed HiHat": new Pad(actx, "Closed HiHat", "sine", 440, 0.5),
  "Kick Drum": new Pad(actx, "Kick Drum", "sine", 440, 0.6),
  "Snare Drum": new Pad(actx, "Snare Drum", "sine", 440, 0.7),
  clap: new Pad(actx, "Clap", "sine", 440, 0.8),
};

export default pads;
