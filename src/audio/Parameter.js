class Parameter {
  constructor(
    baseValue,
    offsetFn = (x) => x,
    valueFn = (x) => () => x,
    paramInit = 0,
    step = false
  ) {
    this.baseValue = baseValue;
    this.currentValueAtOffset = baseValue;
    this.parameter = paramInit;
    this.offset = 0;
    this.offsetFn = offsetFn;
    this.valueFn = valueFn;
    this.step = step;
    this.setParam(paramInit);
  }
  setParam = (newParamValue = this.parameter) => {
    this.parameter = newParamValue;
    this.offset = this.offsetFn(newParamValue, this.step);
    this.currentValueAtOffset = this.valueFn(this.baseValue)(this.offset);
  };
  toggleStep = () => {
    this.step = !this.step;
    this.setParam();
  };
}

export default Parameter;
