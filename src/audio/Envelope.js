class Envelope {
  contructor(attack, decay, sustain, release, length = 1, amount = 0.5) {
    this.attack = attack;
    this.decay = decay;
    this.sustain = sustain;
    this.release = release;
    this.length = length;
    this.amount = amount;
  }
}

const test = new Envelope(0.25, 0.25, 0.5, 0.25);
