import test from 'ava'
import {
  generateWeigthsVector,
  generateMatrix,
} from '../src/Weigths'

test('should generate weights', (t) => {
  const weigthsVector = generateWeigthsVector(2 * 2)

  t.is(weigthsVector.length, 4)
  t.true(weigthsVector[1] < 1)
  t.true(weigthsVector[1] > 0)
})

test('should generate matrix', (t) => {
  const neuralConfig = [
    { neurons: 2, entries: 2 },
    { neurons: 1 },
  ]

  const matrix = generateMatrix(neuralConfig)

  t.is(matrix.length, 2)
  t.is(matrix[0].length, 4)
  t.is(matrix[1].length, 2)
  t.true(matrix[1][1] < 1)
  t.true(matrix[1][1] > 0)
})
