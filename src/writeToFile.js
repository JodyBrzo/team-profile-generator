const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const writeToFile = async (fileName, data) =>{

    try {
      await writeFileAsync(fileName, data);
  
      console.log('Your Team Profile is complete!');
    } catch (err) {
      console.log(err);
      console.log('There was an error writing your file');
    }
  }

module.exports = writeToFile;