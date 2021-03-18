const PopulationCounter = require('../populationCounter.js')

describe('Is populationCounter a function?', () => {
    it('should determine if populationCounter is a function', () => {
        //your test goes here
        expect(typeof PopulationCounter).toBe('function')
    })

    it('has a reader and parser property', () => {
        //your test goes here
        const testCounter = new PopulationCounter();

        expect(testCounter.reader).toEqual('fileReader')
        expect(testCounter.parser).toEqual('csvParser')
    })

    it('has a count method', () => {
        //your test goes here
        const testCounter = new PopulationCounter();
        // expect(testCounter.count()).toEqual(1)
        expect(typeof testCounter.count).toBe('function')

        
    })
  });