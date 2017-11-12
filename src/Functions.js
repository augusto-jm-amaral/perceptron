/* Partially Differentiable */
const Step = potential => (potential < 0 ? 0 : 1) 
const Sign = potential => helper(potential, 0, 1, 0)
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

export {
  Step,
  Sign,
  SymmetricalRamp,
}