#!/usr/bin/node
const request = require('request');
const fs = require('fs');
request(process.argv[2], function (err, response, body) {
  if (!err) {
    fs.writeFileSync(process.argv[3], body);
  }
});
