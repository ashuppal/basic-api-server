'use strict';

module.exports = (err, req, res, next) => {
  res.status(500).send({
    error: '500 Server Error',
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(err) === 'string' ? err : `Internal Server Error : ${err.message}`,
  });
};
