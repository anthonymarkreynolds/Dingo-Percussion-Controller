import Parameter from "./Parameter";
import { multiplier, semitoneToPitch } from "./AudioFunctions";

class Pad {
  constructor(
    actx,
    name,
    waveForm = "sine",
    initFreq = 440,
    initVol = 0.25,
    pan = 0
  ) {
    this.actx = actx;
    this.parameters = {
      test: "test",
      pitch: new Parameter(initFreq, multiplier(12), semitoneToPitch, 0),
      volume: new Parameter(initVol),
    };
    this.name = name;
    this.osc = new OscillatorNode(actx, {
      type: waveForm,
      frequency: this.baseFreq,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.pan = new StereoPannerNode(actx, { pan: pan });
    this.osc.connect(this.vol).connect(this.pan).connect(actx.destination);
  }
  trigger = () => {
    this.osc.frequency
      .cancelScheduledValues(this.actx.currentTime)
      .setValueAtTime(
        this.parameters.pitch.currentValueAtOffset,
        this.actx.currentTime
      );
    console.log(this.parameters.test);
    console.log(this.actx.currentTime);
    this.vol.gain
      .cancelScheduledValues(this.actx.currentTime)
      .setValueAtTime(
        this.parameters.volume.currentValueAtOffset,
        this.actx.currentTime
      )
      .linearRampToValueAtTime(0, this.actx.currentTime + 0.5);
    console.log(this.pitch);
  };
}

export default Pad;
