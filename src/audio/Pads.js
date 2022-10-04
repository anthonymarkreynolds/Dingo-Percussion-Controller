import Pad from "./Pad";
import Parameter from "./Parameter";
import Envelope from "./Envelope";
import { multiplier, semitoneToPitch } from "./AudioFunctions";

const actx = new AudioContext();

const pads = {
  // "Hi Tom": new Pad("7", actx, "Hi Tom", "square", 220, 0.5),
  // "Crash Cym": new Pad("8", actx, "Crash Cym", "sine", 440, 0.5),
  // "Ride Cym": new Pad("9", actx, "Ride Cym", "sine", 880, 0.5),
  // "Lo Tom": new Pad("4", actx, "Lo Tom", "sine", 440, 0.5),
  // "Closed HiHat": new Pad("5", actx, "Closed HiHat", "sine", 440, 0.5),
  // "Open HiHat": new Pad("6", actx, "Open HiHat", "sine", 440, 0.5),
  "Hi Tom": new Pad({
    padNumber: "7",
    actx,
    name: "Hi Tom",
    oscWaveform: "sine",
    filterType: "allpass",
    parameters: {
      pitch: new Parameter(
        440,
        -(8 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, 0.2, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.2, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.38, 0.5, 0.44),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.08),
      cutoff: new Envelope(0, 0.35, 0.5, 0.01),
    },
  }),
  "Crash Cym": new Pad({
    padNumber: "8",
    actx,
    name: "Crash Cym",
    oscWaveform: "sine",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(26 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.65),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  "Ride Cym": new Pad({
    padNumber: "9",
    actx,
    name: "Ride Cym",
    oscWaveform: "sine",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(26 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.65),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  "Lo Tom": new Pad({
    padNumber: "4",
    actx,
    name: "Lo Tom",
    oscWaveform: "square",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(19 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, 0.1, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.1, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.4, 0.5, 0.3),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.08, 0.5, 0.4),
      cutoff: new Envelope(0, 0.05, 0.5, 0.4),
    },
  }),
  "Closed HiHat": new Pad({
    padNumber: "5",
    actx,
    name: "Closed HiHat",
    oscWaveform: "sine",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(26 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.65),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  "Open HiHat": new Pad({
    padNumber: "6",
    actx,
    name: "Open HiHat",
    oscWaveform: "sine",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(26 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.65),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  "Kick Drum": new Pad({
    padNumber: "1",
    actx,
    name: "Kick Drum",
    oscWaveform: "sine",
    filterType: "lowpass",
    parameters: {
      pitch: new Parameter(
        220,
        -(26 / 36),
        multiplier(36),
        semitoneToPitch,
        true
      ),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.65),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  "Snare Drum": new Pad({
    padNumber: "2",
    actx,
    name: "Snare Drum",
    oscWaveform: "sawtooth",
    filterType: "bandpass",
    parameters: {
      pitch: new Parameter(220, 0, multiplier(36), semitoneToPitch, true),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.5),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
  Clap: new Pad({
    padNumber: "3",
    actx,
    name: "Clap",
    oscWaveform: "triangle",
    filterType: "peaking",
    parameters: {
      pitch: new Parameter(220, 0, multiplier(36), semitoneToPitch, true),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, 0),
      cutoff: new Parameter(880, -0.4, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.5, multiplier(15)),
    },
    envelopes: {
      volume: new Envelope(0, 0.34, 0.5, 0.5),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.06, 0.5, 0.8),
      cutoff: new Envelope(0, 0.2, 0.5, 1),
    },
  }),
};

export default pads;
