import Parameter from "./Parameter";
import Envelope from "./Envelope";
import { multiplier, semitoneToPitch } from "./AudioFunctions";

class Pad {
  constructor({
    padNumber,
    actx,
    name,
    oscWaveform,
    filterType,
    parameters,
    envelopes,
  }) {
    this.num = padNumber;
    this.actx = actx;
    this.name = name;
    this.parameters = parameters;
    this.envelopes = envelopes;
    this.filterType = filterType;

    this.osc = new OscillatorNode(actx, {
      type: oscWaveform,
      frequency: 440,
    });
    this.vol = new GainNode(actx, {
      gain: 0,
    });
    this.filter = new BiquadFilterNode(actx, {
      frequency: this.parameters.cutoff.currentValueAtOffset,
      Q: this.parameters.res.currentValueAtOffset,
      gain: 25,
      type: filterType,
    });
    this.pan = new StereoPannerNode(actx, {
      pan: this.parameters.pan?.currentValueAtOffset || 0,
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
  };
}

export default Pad;
