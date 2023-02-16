'use strict';

module.exports = (req, res, next) => {
  res.status(404).send({
    error: '404 Not Found',
    route: req.baseUrl,
    message: 'The route you are looking for does not exist',
  });
};


