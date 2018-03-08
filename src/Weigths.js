const generateWeigthsVector = num => Array.apply( // eslint-disable-line
  null,
  { length: num },
).map(Math.random, Number)

const generateMatrix = (layers) => {
  const matrix = []

  for (let i = 0; i < layers.length; i++) { // eslint-disable-line
    const weigthsLayer = []
    const layer = layers[i]

    for (let j = 0; j < layer.neurons; j++) { // eslint-disable-line
      if (layer.entries) {
        weigthsLayer.push(generateWeigthsVector(layer.entries))
      } else {
        const previusLayer = layers[i - 1]
        weigthsLayer.push(generateWeigthsVector(previusLayer.neurons))
      }
    }
  }

  return matrix
}

export {
  generateMatrix,
  generateWeigthsVector,
}
