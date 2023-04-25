#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const cTasks = {};
    const tasks = JSON.parse(body);
    for (const i in tasks) {
      const task = tasks[i];
      if (task.cTasks === true) {
        if (cTasks[task.userId] === undefined) {
          cTasks[task.userId] = 1;
        } else {
          cTasks[task.userId]++;
        }
      }
    }
    console.log(cTasks);
  } else {
    console.log('An error occurred. Status code: ' + response.statusCode);
  }
});
