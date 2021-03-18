const FileReader = require('./fileReader.js')

class PopulationCounter {
    constructor(){
        this.reader = new FileReader();
        this.parser = 'csvParser';
    };

    count (filename) {
        let fileHolder = this.reader.readFile(filename); //this is a promise
        fileHolder.then(response => {
            //var dataPromise = this.parser.ParseFile(response);
            //datPromise.then()
            console.log("In count method: ", response);
        });
        return 1;
    }
}

const populationCounter = new PopulationCounter();
populationCounter.count("testFile.txt");

// console.log('populationCounter:', populationCounter)

// ('worldcitiespop.csv')

module.exports = PopulationCounter;