class Parameter {
  constructor(
    baseValue,
    paramInit = 0,
    offsetFn = (x) => x,
    valueFn = () => (x) => x,
    step = false
  ) {
    this.offsetFn = offsetFn;
    this.valueFn = valueFn;
    this.step = step;

    this.baseValue = baseValue;
    this.decimal = paramInit;
    this.offset = offsetFn(this.decimal, step);
    this.currentValueAtOffset = this.valueFn(this.baseValue)(this.offset);
  }
  setParam = (newParamValue = this.decimal) => {
    this.decimal = newParamValue;
    this.offset = this.offsetFn(newParamValue, this.step);
    this.currentValueAtOffset = this.valueFn(this.baseValue)(this.offset);
  };
  toggleStep = () => {
    this.step = !this.step;
    this.setParam();
  };
}

export default Parameter;
