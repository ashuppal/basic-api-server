'use strict';

const supertest = require ('supertest');
const {app} = require ('../server');
const mockRequest = supertest (app);

describe ('handles 404 path', () => {

  it ('invalid route', async () => {
    const response = await mockRequest.get ('/path-not-found');
    expect (response.status).toBe (404);
  });

  it ('invalid path', async () => {
    const response = await mockRequest.post ('/path-not-found');
    expect (response.status).toBe (404);
  });

  it ('handles the root path', async () => {
    const response = await mockRequest.get ('/');
    expect (response.status).toBe (200);
  });

  it ('handles the person path with a name', async () => {
    const response = await mockRequest.get ('/people?name=ash');
    let nameJSON = JSON.stringify({name: 'ash'});
    expect (response.text).toEqual (nameJSON);
    expect (response.status).toBe (200);
  });

  it ('handles the person path with no name', async () => {
    const response = await mockRequest.get ('/people');
    expect (response.status).toBe (500);
  });
});
