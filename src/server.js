'use strict';

const express = require ('express');

const PORT = process.env.PORT || 3001;
const errorHandler = require ('./error-handlers/500.js');
const logger = require ('./middleware/logger.js');
const notFound = require ('./error-handlers/404.js');
const peopleRouter = require ('./routes/people.js');
const validator = require('./middleware/validator');

// creates an express singleton
const app = express();

app.use(express.json());
app.use(peopleRouter);
app.use(logger);

app.get('/', (req, res, next) => {

  res.status(200).send('Hello World!');
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
});

app.get('/person', validator, (req, res, next) => {
  console.log('this is the query from server.js', req.query);
  res.status(200).json(req.query);
});

app.use('*', notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => console.log('server running on port', PORT));
};

module.exports = { start, app };




