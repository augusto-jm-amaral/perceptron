import test from 'ava'
import Perceptron from './../src'

test('Make a multilayer perceptron', (t) => {
  const layers = [
    { neurons: 2, entries: 3 },
    { neurons: 2 },
    { neurons: 1 },
  ]

  const perceptron = new Perceptron(layers)

  t.is(typeof perceptron, 'object')
})
