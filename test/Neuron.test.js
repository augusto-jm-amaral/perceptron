import test from 'ava'

import Neuron from './../src/Neuron'

test('should calculate l and y from neuron', (t) => {
  const weigths = [0.2, 0.4, 0.5]
  const inputs = [-1, 0.3, 0.7]

  const output = Neuron(inputs, weigths)

  t.is(output.l.toFixed(2), '0.27', 'should return the weighted value')
  t.is(output.y.toFixed(2), '0.26', 'should return the activation value')
})
