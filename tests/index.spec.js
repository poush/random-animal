const chai = require('chai')
const expect = require('chai').expect

const animalNameGenerator = require('../src')

describe('The animal name generator', () => {
  it('returns two words', () => {
    const result = animalNameGenerator()
    expect(result).to.be.a('string')
    expect(result.split(' ')).to.have.lengthOf(2)
  })

  it('returns a word with a first capital letter', () => {
    const result = animalNameGenerator()
    const firstLetter = result[0].charAt(0)
    expect(firstLetter).to.equal(firstLetter.toUpperCase())
  })
})
