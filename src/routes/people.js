

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

router.get('/people/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatePeople = await peopleModel.findByPk(id);
    res.status (200).send (updatePeople);
  }
  catch (e) {
    next (e.message);
  }
});

router.put('/people/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatePeople = await peopleModel.findByPk({id});
    const update = await updatePeople.update(req.body);
    res.status (200).send (update);
  }
  catch (e) {
    next (e.message);
  }
});

router.delete('/people/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletePeople = await peopleModel.findByPk({id});
    const update = await deletePeople.destroy();
    res.status (200).send (update);
  }
  catch (e) {
    next (e.message);
  }
});


module.exports = router;
