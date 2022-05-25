const mongoose = require('mongoose');

// Define Task Schema

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
