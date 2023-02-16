'use strict';

const logger = require ('../middleware/logger.js');

describe ('logger middleware', () => {
  let req = {};
  let res = {};
  //jest.fn() is a mock function that allows you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and returning test values.
  let next = jest.fn ();

  it ('should log to the console', () => {
    logger (req, res, next);
    //toHaveBeenCalledWith() allows you to test that a mock function was called with specific arguments. It returns true or false. 
    expect (next).toHaveBeenCalledWith ();

  });
} );
