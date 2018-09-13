'use strict';

const fs = require('fs');

const readfile = module.exports = {};

readfile.read = (path, callback) => {
  return fs.readFile(
    path,
    (error, data) => {
      if (error) {
        console.log('ERROR: File cannot be read');
        console.log(error);
        return callback(error);
      }
      return callback(null, data.toString('utf8'));
    },
  );
};
