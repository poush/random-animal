const animals = require('../data/animals.json')
const adjectives = require('../data/adjectives.json')

const util = require("./util");

function generateRandomAnimal() {
  const adjective = adjectives[util.aRandom(adjectives.length)]
  const animal = animals[util.aRandom(animals.length)]
  return `${util.capitalizeFirstLetter(adjective)} ${util.capitalizeFirstLetter(animal)}`
}

if (require.main === module) {
  console.log(generateRandomAnimal())
}

module.exports = generateRandomAnimal
