'use strict';

const fileReader = require('../lib/reader');

const baconPath = `${__dirname}/data/bacon.txt`;
// const catPath = `${__dirname}/data/cat.txt`;
// const rossPath = `${__dirname}/data/bob-ross-ipsum.txt`;

describe('#file-reader.js', () => {
  test('The first 5 characters of a file should be read', (done) => {
    return fileReader.readFirstNCharactersAsync(baconPath, 5, (data) => {
      expect(data).toEqual('tempor');
      done();
    });
  });
});
