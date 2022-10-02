import Parameter from "./Parameter";
import { multiplier } from "./AudioFunctions";

export default class Envelope {
  constructor(attack = 0, decay = 0, length = 0.5, amount = 0) {
    this.attack = new Parameter(0, attack);
    this.decay = new Parameter(0, decay);
    this.length = new Parameter(0, length, multiplier(2));
    this.amount = new Parameter(0, amount);
  }
}
