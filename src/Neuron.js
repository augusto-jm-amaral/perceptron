import { HyperbolicTangent } from './Functions'

const Neuron = (inputs, weigths, activationFunction = HyperbolicTangent) => {
  let output = 0

  for (let i = 0; i < weigths.length; i += 1) {
    output = output + (weigths[i] * inputs[i]) // eslint-disable-line
  }

  return {
    l: output,
    y: activationFunction(output),
  }
}

export default Neuron
