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

const semitoneToPitch = (n) => 440 * (2 ** (1 / 12)) ** n;

class Pad {
  constructor(name, waveForm = "sine", baseFreq = main.pitch, pan = 0) {
    this.name = name;
    this.baseVol = 0.25;
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
    console.log(value);
    console.log(semitoneToPitch(value));
    this.osc.frequency.setValueAtTime(semitoneToPitch(value), actx.currentTime);
  };
}

const pads = {
  "hi tom": new Pad("Hi Tom", "sine", semitoneToPitch(8)),
  "crash cym": new Pad("Crash Cym", "sine", semitoneToPitch(7)),
  "ride cym": new Pad("Ride Cym", "sine", semitoneToPitch(6)),
  "lo tom": new Pad("Lo Tom", "sine", semitoneToPitch(5)),
  "open hihat": new Pad("Open HiHat", "sine", semitoneToPitch(4)),
  "closed hihat": new Pad("Closed HiHat", "sine", semitoneToPitch(3)),
  "kick drum": new Pad("Kick Drum", "sine", semitoneToPitch(2)),
  "snare drum": new Pad("Snare Drum", "sine", semitoneToPitch(1)),
  clap: new Pad("Clap", "sine", semitoneToPitch(0)),
  // {

  // osc: new OscillatorNode(actx, {
  //   type: "square",
  //   frequency: 40,
  // }),
  // vol: new GainNode(actx, { gain: 0 }),
  // trigger: function () {
  //   this.vol.gain
  //     .cancelScheduledValues(actx.currentTime)
  //     .setValueAtTime(0.3, actx.currentTime)
  //     .linearRampToValueAtTime(0, actx.currentTime + 0.3);
  // },
  // },
};

// connect nodes to out
// for (const pad in pads) {
//   pads[pad].osc.connect(pads[pad].vol).connect(out);
// }

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

// const comp1 = actx.createDynamicsCompressor();
// comp1.attack.value = 0.01;
// comp1.release.value = 0.25;
// comp1.ratio.value = 10;
// comp1.threshold.value = -40;
// comp1.knee.value = 40;

const initialValue = {
  actx,
  pads,
  play,
  stop,
};
const AudioCTX = createContext(initialValue);

export default AudioCTX;
