const roundFunction = activationFunction => (value, places) => {
  return parseFloat(activationFunction(value).toFixed(places))
}

export {
  roundFunction,
}