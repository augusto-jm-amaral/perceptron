import test from 'ava'
import Perceptron from './../src/index.js'

test('Make a multilayer perceptron', t => {
  const layers = [
    { neurons: 2 },
    { neurons: 2 },
    { neurons: 1 },
  ]

  const perceptron = Perceptron(layers)

  t.is(typeof perceptron, 'function')
})