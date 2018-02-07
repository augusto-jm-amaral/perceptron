import { generateMatrix } from './Weigths'

const Perceptron = layers => () => {
  this.state = {
    weigths: generateMatrix(layers),
  }
}

export default Perceptron
