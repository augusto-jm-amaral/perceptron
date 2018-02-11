import { generateMatrix } from './Weigths'

function Perceptron(layers) {
  this.state = {
    weigths: generateMatrix(layers),
    layers,
  }
}

export default Perceptron
