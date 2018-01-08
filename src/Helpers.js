const roundFunction = activationFunction => (value, places) =>
  parseFloat(activationFunction(value).toFixed(places))

export {
  roundFunction as default,
}
