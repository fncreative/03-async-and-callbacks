'use strict';

const fileReader = require('/lib/reader'); //eslint-disable-line

const reading1 = `${__dirname}/data/bacon.txt`;
const reading2 = `${__dirname}/data/cat.txt`;
const reading3 = `${__dirname}/data/social.txt`;

const files = [reading1, reading2, reading3];

const array = [];

const readFileArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }

  const currentFilePath = fileArray[currentIndex];
  try {
    return fileReader(currentFilePath, (err, data) => {
      if (err) {
        console.log('ERROR');
      }
      array.push(data);
      readFileArray(fileArray, currentIndex + 1, callback);
    });
  } catch (err) {
    console.log('ERROR');
  }
  return undefined;
};

readFileArray(files, 10, () => {
  console.log('All files are belong to us');
  console.log(files);
});
