const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

const postRouter = require('./routes/posts');
const commentRouter = require('./routes/comments');

app.use('/posts', postRouter);
app.use('/comments', commentRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to mongodb'))
  .catch(() => console.log('mongodb connection failed'));

app.listen(8000, () => {
  console.log(`Server listening on port ${8000}`);
});
