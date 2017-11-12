/* Partially Differentiable */
const Step = potential => (potential < 0 ? 0 : 1) 
const Sign = potential => Math.sign(potential)
const SymmetricalRamp = interval => potential => {
  const absInterval = Math.abs(interval)
  return helper(potential, absInterval, absInterval, potential)
}

const helper = (potential, absInterval, returnLimit, middleReturn) => (
    potential > absInterval ?
      returnLimit :
      (potential < (-absInterval) ?
        (-returnLimit) :
        middleReturn)  
  )

/* Fully Differentiable */
const Sigmoid = potential => (1/(1+Math.exp(-potential)))
const HyperbolicTangent = potential => Math.tanh(potential)
const Gaussian = (potential, variance = 1) => {
  let V1, V2, S, X
  do {
    const U1 = Math.random();
    const U2 = Math.random();
    V1 = 2 * U1 - 1;
    V2 = 2 * U2 - 1;
    S = V1 * V1 + V2 * V2;
  } while (S > 1);

  X = Math.sqrt(-2 * Math.log(S) / S) * V1;
  X = mean + Math.sqrt(variance) * X;

  return X;
}
const Identity = potential => potential

export {
  Step,
  Sign,
  SymmetricalRamp,
  Sigmoid,
  HyperbolicTangent,
  Gaussian,
  Identity,
}