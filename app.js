const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();
const app = express();
const taskRoutes = require('./routes/tasks');
const notFound = require('./middlewares/not-found');
const errorHandleMiddleware = require('./middlewares/error-handler');
const port = process.env.PORT || 8080;

const connection_url = process.env.DB_URL;

// middlewares
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);

// handle 404
app.use(notFound);

// error handler
app.use(errorHandleMiddleware);

const start = async () => {
  try {
    await connectDB(connection_url);
    app.listen(port, () => {
      console.log('Server started at 8080');
    });
  } catch (err) {
    console.log(err);
  }
};

start();
