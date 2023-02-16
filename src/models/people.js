'use strict';

module.exports = (sequelizeDatabase,DataTypes) => {
  return sequelizeDatabase.define('people', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pronouns: {
      type: DataTypes.ENUM('she/her', 'he/him', 'they/them'),
      allowNull: true,
    },
  });

};