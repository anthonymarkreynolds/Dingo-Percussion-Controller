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
    this.name = name;
    this.parameters = {
      pitch: new Parameter(initFreq, 0, multiplier(12), semitoneToPitch, true),
      volume: new Parameter(0, initVol),
      pan: new Parameter(0, pan),
    };
    this.osc = new OscillatorNode(actx, {
      type: waveForm,
      frequency: this.baseFreq,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.pan = new StereoPannerNode(actx, {
      pan: this.parameters.pan.currentValueAtOffset,
    });
    this.osc.connect(this.vol).connect(this.pan).connect(actx.destination);
  }
  trigger = () => {
    this.pan.pan.setValueAtTime(
      this.parameters.pan.currentValueAtOffset,
      this.actx.currentTime
    );
    this.osc.frequency
      .cancelScheduledValues(this.actx.currentTime)
      .setValueAtTime(
        this.parameters.pitch.currentValueAtOffset,
        this.actx.currentTime
      );
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
