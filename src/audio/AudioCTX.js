import { createContext } from "react";

const actx = new AudioContext();
const out = actx.destination;

const envTest = (parameter, evelope, noteLength = 1) => {
  parameter.cancelScheduledValues();

  const ADSR = evelope || {
    attack: 0.24,
    decay: 0.25,
    sustain: 0.5,
    release: 0.5,
    length: 1,
    amount: 1,
  };
  const STAGE_MAX_TIME = 2;
  const multiplier = 1;

  const now = actx.currentTime;
  const attackDuration = ADSR.attack * STAGE_MAX_TIME;
  const attackEnd = now + attackDuration;
  const decayDuration = ADSR.decay * STAGE_MAX_TIME;
};

let main = {
  vol: 0.25,
  pitch: 440,
};

const semitoneToPitch = (n, pitch = 440) => pitch * (2 ** (1 / 12)) ** n;

class Pad {
  constructor(
    name,
    waveForm = "sine",
    baseFreq = main.pitch,
    baseVol = 0.25,
    pan = 0
  ) {
    this.name = name;
    this.baseVol = baseVol;
    this.baseFreq = baseFreq;
    this.osc = new OscillatorNode(actx, {
      type: waveForm,
      frequency: baseFreq,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.pan = new StereoPannerNode(actx, { pan: pan });
    this.osc.connect(this.vol).connect(this.pan).connect(out);
  }
  trigger = () => {
    console.log(this.baseVol);
    this.vol.gain
      .cancelScheduledValues(actx.currentTime)
      .setValueAtTime(this.baseVol, actx.currentTime)
      .linearRampToValueAtTime(0, actx.currentTime + 0.5);
  };
  setVol = (value) => {
    this.baseVol = value;
    console.log(this.baseVol);
  };
  setPan = (value) => {
    this.pan.pan.setValueAtTime(value, actx.currentTime);
  };
  getPan() {
    return this.pan.pan.value;
  }
  setPitch = (value) => {
    console.log(semitoneToPitch(value, this.baseFreq));
    this.osc.frequency.setValueAtTime(
      semitoneToPitch(value, this.baseFreq),
      actx.currentTime
    );
  };
}

const pads = {
  "hi tom": new Pad("Hi Tom", "sine", semitoneToPitch(8), 0.1),
  "crash cym": new Pad("Crash Cym", "sine", semitoneToPitch(7), 0.1),
  "ride cym": new Pad("Ride Cym", "sine", semitoneToPitch(6), 0.2),
  "lo tom": new Pad("Lo Tom", "sine", semitoneToPitch(5), 0.3),
  "open hihat": new Pad("Open HiHat", "sine", semitoneToPitch(4), 0.4),
  "closed hihat": new Pad("Closed HiHat", "sine", semitoneToPitch(3), 0.5),
  "kick drum": new Pad("Kick Drum", "sine", semitoneToPitch(2), 0.6),
  "snare drum": new Pad("Snare Drum", "sine", semitoneToPitch(1), 0.7),
  clap: new Pad("Clap", "sine", semitoneToPitch(0), 0.8),
};

// start VCOs
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
  actx,
  pads,
  play,
  stop,
};
const AudioCTX = createContext(initialValue);

export default AudioCTX;
