'use strict';

require ('dotenv').config ();

const {Sequelize, DataTypes} = require ('sequelize');
const people = require ('./people.js');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize (DATABASE_URL);

const peopleModel = people (sequelizeDatabase, DataTypes);

module.exports = {
  sequelizeDatabase,
  peopleModel,
};
