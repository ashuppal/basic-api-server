'use strict';

const express = require ('express');

const {peopleModel} = require ('../models');

const router = express.Router ();

router.get ('/people', async (req, res, next) => {
  const people = await peopleModel.findAll ();
  res.status (200).send (people);
});

router.post ('/people', async (req, res, next) => {
  try {
    const newPeople = await peopleModel.create (req.body);
    res.status (200).send (newPeople);
  }
  catch (e) {
    next (e.message);
  }

});

module.exports = router;
