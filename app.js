const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);

const port = 8800;
app.listen(port, () => {
  console.log('Server started at 8800');
});
