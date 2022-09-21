import { createContext } from "react";

const actx = new AudioContext();
const out = actx.destination;

const pads = {
  "Hi Tom": {
    osc: new OscillatorNode(actx, {
      type: "sine",
      frequency: 440,
    }),
    vol: new GainNode(actx, { gain: 0 }),
    trigger: function () {
      this.osc.frequency
        .cancelScheduledValues(actx.currentTime)
        .setValueAtTime(440, actx.currentTime)
        .exponentialRampToValueAtTime(110, actx.currentTime + 1);

      this.vol.gain
        .cancelScheduledValues(actx.currentTime)
        .setValueAtTime(0.25, actx.currentTime)
        .linearRampToValueAtTime(0, actx.currentTime + 0.5);
    },
  },
  "Lo Tom": {
    osc: new OscillatorNode(actx, {
      type: "triangle",
      frequency: 138.59,
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
for (const pad in pads) {
  pads[pad].osc.connect(pads[pad].vol).connect(out);
}

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
