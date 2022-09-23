const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const post = require('./routes/posts');

app.use('/', post);

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/test', {
    dbName: 'posts',
    useNewUrlParser: true,
  })
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log('mongodb connection failed'));

app.listen(8000, () => {
  console.log(`Server listening on port ${8000}`);
});

