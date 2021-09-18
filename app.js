const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();
const app = express();
const taskRoutes = require('./routes/tasks');
const port = 8800;

const connection_url = process.env.DB_URL;

app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);

const start = async () => {
  try {
    await connectDB(connection_url);
    app.listen(port, () => {
      console.log('Server started at 8800');
    });
  } catch (err) {
    console.log(err);
  }
};

start();
