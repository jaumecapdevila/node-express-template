const express = require('express');

const app = express();

const cuidMiddleware = require('./middleware/cuidMiddleware');

app.use(cuidMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;
