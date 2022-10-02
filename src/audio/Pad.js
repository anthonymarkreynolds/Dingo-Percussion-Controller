import Parameter from "./Parameter";
import Envelope from "./Envelope";
import { multiplier, semitoneToPitch } from "./AudioFunctions";

class Pad {
  constructor(
    num,
    actx,
    name,
    waveForm = "sine",
    initFreq = 440,
    initVol = 0.25,
    pan = 0,
    duration = 0.25
  ) {
    this.num = num;
    this.actx = actx;
    this.name = name;
    this.parameters = {
      pitch: new Parameter(initFreq, 0, multiplier(24), semitoneToPitch, true),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, pan),
    };
    this.envelopes = {
      volume: new Envelope(0, 0.5, 0.5, 0.5),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.5, 0.5, 0),
      filter: new Envelope(),
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
  runEnv = (envelope, parameter, node, now) => {
    const { attack, decay, amount, length } = envelope;
    const attackTime =
      attack.currentValueAtOffset * length.currentValueAtOffset;
    const decayTime =
      attackTime + decay.currentValueAtOffset * length.currentValueAtOffset;
    console.log(amount);
    const peakHeight = parameter.valueFn(parameter.currentValueAtOffset)(
      parameter.offsetFn(amount.currentValueAtOffset)
    );
    //
    node
      .cancelScheduledValues(now)
      .setValueAtTime(parameter.currentValueAtOffset, now)
      .linearRampToValueAtTime(peakHeight, now + attackTime)
      .linearRampToValueAtTime(parameter.currentValueAtOffset, now + decayTime);
  };
  trigger = () => {
    const now = this.actx.currentTime;
    this.runEnv(
      this.envelopes.pan,
      this.parameters.pan,
      this.pan.pan,
      now,
      true
    );
    this.runEnv(
      this.envelopes.pitch,
      this.parameters.pitch,
      this.osc.frequency,
      now,
      true
    );

    this.runEnv(
      this.envelopes.volume,
      this.parameters.volume,
      this.vol.gain,
      now
    );
    // const { attack, decay, sustain, release, amount } = this.envelopes.volume;
    // const attackTime = attack.currentValueAtOffset;
    // const decayTime = attackTime + decay.currentValueAtOffset;
    // const peakHeight =
    //   this.parameters.volume.currentValueAtOffset * amount.currentValueAtOffset;
    // this.vol.gain
    //   .cancelScheduledValues(now)
    //   .setValueAtTime(0, now)
    //   .linearRampToValueAtTime(peakHeight, now + attackTime)
    //   .linearRampToValueAtTime(0, now + decayTime);
  };
}

export default Pad;
