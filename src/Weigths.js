const generateWeigthsVector = num => Array.apply( // eslint-disable-line
  null,
  { length: num },
).map(Math.random, Number)

const generateMatrix = (layers) => {
  const matrix = []

  for (let i = 0; i < layers.length; i++) { // eslint-disable-line
    const layer = layers[i]

    if (layer.entries) {
      matrix.push(generateWeigthsVector(layer.neurons * layer.entries))
    } else {
      const previusLayer = layers[i - 1]

      matrix.push(generateWeigthsVector(previusLayer.neurons * layer.neurons))
    }
  }

  return matrix
}

export {
  generateMatrix,
  generateWeigthsVector,
}
