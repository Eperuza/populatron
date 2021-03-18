const FileReader = require('../fileReader.js')


describe('Is fileReader a function?', () => {
    it('should determine if FileReader is a function', () => {
        //your test goes here
        expect(typeof FileReader).toBe('function')
    })

    it('has a readFile method', () => {
        //your test goes here
        const testReader = new FileReader();
        // expect(testCounter.count()).toEqual(1)
        expect(typeof testReader.readFile).toBe('function')
    })

    it('readFile has an argument', () => {
        //your test goes here
        const testReader = new FileReader();
        // expect(testCounter.count()).toEqual(1)
        expect(testReader.readFile.length).toBe(1)
    })

    it('readFile returns a promise', () => {
        const testReader = new FileReader();
        expect(isPromise(testReader.readFile('testFile.txt')).toBe(true))
    })

    // it('readFile returns a string', () => {
    //     //your test goes here
    //     const testReader = new FileReader();
    //     // expect(testCounter.count()).toEqual(1)
    //     expect(typeof testReader.readFile('testFile.txt')).toBe('string');
    //     //we expect the argument passed into readFile, filename, to be a string
    // })



  });
