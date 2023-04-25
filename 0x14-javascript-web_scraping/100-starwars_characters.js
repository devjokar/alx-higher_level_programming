#!/usr/bin/node
const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';
req.get(url + id, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const dd = JSON.parse(body).characters;
  for (const i of dd) {
    req.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const data = JSON.parse(body1);
      console.log(data.name);
    });
  }
});
