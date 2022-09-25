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
  constructor(waveForm = "sine", baseFreq) {
    this.osc = new OscillatorNode(actx, {
      type: waveForm,
      frequency: this.baseFreq,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.osc.connect(this.vol).connect(out);
  }
  trigger = () => {
    this.vol.gain
      .cancelScheduledValues(actx.currentTime)
      .setValueAtTime(0.25, actx.currentTime)
      .linearRampToValueAtTime(0, actx.currentTime + 0.5);
  };
  setPitch = (value) => {
    console.log(value);
    console.log(semitoneToPitch(value));
    this.osc.frequency.setValueAtTime(semitoneToPitch(value), actx.currentTime);
  };
}

const pads = {
  "Hi Tom": new Pad(),
  // {
  //   osc: new OscillatorNode(actx, {
  //     type: "sine",
  //     frequency: main.pitch,
  //   }),
  //   vol: new GainNode(actx, { gain: 0 }),
  //   trigger: function () {
  //     this.vol.gain
  //       .cancelScheduledValues(actx.currentTime)
  //       .setValueAtTime(0.25, actx.currentTime)
  //       .linearRampToValueAtTime(0, actx.currentTime + 0.5);
  //   },
  //   setPitch: function (value) {
  //     console.log(value);
  //     console.log(semitoneToPitch(value));
  //   },
  // },
  "Lo Tom": {
    osc: new OscillatorNode(actx, {
      type: "square",
      frequency: 40,
    }),
    vol: new GainNode(actx, { gain: 0 }),
    trigger: function () {
      this.vol.gain
        .cancelScheduledValues(actx.currentTime)
        .setValueAtTime(0.3, actx.currentTime)
        .linearRampToValueAtTime(0, actx.currentTime + 0.3);
    },
  },
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
