export const main = {
  vol: 0.25,
  pitch: 440,
};

export const semitoneToPitch = (pitch) => (n) => pitch * (2 ** (1 / 12)) ** n;
export const multiplier = (factor) => (value, step) =>
  step ? Math.trunc(value * factor) : value * factor;
