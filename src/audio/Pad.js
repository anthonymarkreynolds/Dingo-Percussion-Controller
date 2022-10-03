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
    duration = 0.25,
    res = 0
  ) {
    this.num = num;
    this.actx = actx;
    this.name = name;
    this.parameters = {
      pitch: new Parameter(initFreq, 0, multiplier(36), semitoneToPitch, true),
      volume: new Parameter(0, 0),
      pan: new Parameter(0, pan),
      cutoff: new Parameter(880, 0, multiplier(48), semitoneToPitch),
      res: new Parameter(0, 0.001, multiplier(15)),
    };
    this.envelopes = {
      volume: new Envelope(0, 0.5, 0.5, 0.5),
      pan: new Envelope(),
      pitch: new Envelope(0, 0.5, 0.5, 0),
      cutoff: new Envelope(0, 0.5, 0.5, 0),
    };
    this.osc = new OscillatorNode(actx, {
      type: waveForm,
      frequency: this.baseFreq,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.filter = new BiquadFilterNode(actx, {
      frequency: this.parameters.cutoff.currentValueAtOffset,
      Q: this.parameters.res.currentValueAtOffset,
      gain: 25,
      type: "lowpass",
    });
    this.pan = new StereoPannerNode(actx, {
      pan: this.parameters.pan.currentValueAtOffset,
    });
    this.osc
      .connect(this.vol)
      .connect(this.filter)
      .connect(this.pan)
      .connect(actx.destination);
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
    this.filter.frequency
      .cancelScheduledValues(now)
      .setValueAtTime(this.parameters.cutoff.currentValueAtOffset, now);
    this.filter.Q.cancelScheduledValues(now).setValueAtTime(
      this.parameters.res.currentValueAtOffset,
      now
    );
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
      this.envelopes.cutoff,
      this.parameters.cutoff,
      this.filter.frequency,
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
