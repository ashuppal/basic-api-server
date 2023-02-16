'use strict';

const validator = require('../middleware/validator.js');

describe ('validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn ();



  it ('should call next() if name is in the query string', () => {
    req.query = {name: 'ash'};
    validator (req, res, next);
    expect (next).toHaveBeenCalledWith ();
  });

  it ('should call next() if name is in not in the query string', () => {
    req.query = {};
    validator (req, res, next);
    expect (next).toHaveBeenCalledWith ('No name provided');
  });
});

