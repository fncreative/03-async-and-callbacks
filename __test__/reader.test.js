'use strict';

const reader = require('../lib/reader');

describe('this test will read files', () => {
  test('bacon ipsum', (done) => {
    reader.read(`${__dirname}/../data/bacon.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('beye buffa');
      done();
    });
  });
  test('cat ipsum', (done) => {
    reader.read(`${__dirname}/../data/cat.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('stume in s');
      done();
    });
  });
  test('Social change ipsum', (done) => {
    reader.read(`${__dirname}/../data/social.txt`, (err, data) => {
      expect(err).toBeNull();
      expect(data).toEqual('ble the re');
      done();
    });
  });
});
