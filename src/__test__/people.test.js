'use strict';

const{app} = require ('../server');

const supertest = require ('supertest');

const {sequelizeDatabase} = require ('../models');
const mockRequest = supertest (app);

beforeAll (async () => {
  await sequelizeDatabase.sync ();
});

afterAll (async () => {
  await sequelizeDatabase.drop ();
});

describe('REST API', () => {
  it('should create a new person', async () => {
    const response = await mockRequest.post('/people').send({
      name: 'Tester',
      age: 25,
      pronouns: 'she/her',
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(25);
    expect(response.body.pronouns).toEqual('she/her');
    expect(response.body.id).toBeTruthy();
  });
});
