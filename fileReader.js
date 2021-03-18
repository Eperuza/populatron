var fs = require('fs');

// const fileReader = (filename) => {
//     fs.readFile(filename, 'utf8', (err, data) => {
//         if(err) console.log('Error');
        
//     })
// }

class FileReader {
    constructor(){
        // this.data = '';
    };
    readFile  (filename) {
        
        return new Promise((resolve, reject) => {
            fs.readFile(filename, 'utf8', (error, data) => {
                if (error != null) {
                    reject(error);
                    return;
                   }
                // console.log('\ndata in readFile:\n', data);
                // console.log('this:', this); 
                // console.log('data from fs.readFile:', data);
                resolve(data);
                
            })
        })
}
}
// //readFile is a FileReader method. =>
const fileReaderObject = new FileReader();
let stuff = fileReaderObject.readFile('testFile.txt'); //will be a promise
stuff.then(response => {
    console.log("\nthen response:\n",response)
    // return response;
    // console.log('thisPromise type:', thisPromise)
    
})
console.log('fileReaderObject:', stuff)

    
//console.log('testData:', testData)

module.exports = FileReader