const Task = require('../models/Task');
const asyncWrapper = require('../middlewares/async');

const { createCustomError } = require('../errors/custom-error');

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`Task with ${taskID} not found`, 404));
  }
  res.status(200).json({ task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const body = req.body;

  const task = await Task.findOneAndUpdate({ _id: taskID }, body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`Task with ${taskID} not found`, 404));

    // return res.status(404).json({ msg: `Task with ${taskID} not found` });
  }
  res.status(200).json({
    status: 'success',
    msg: `Task with ${taskID}  updated`,
    task,
  });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`Task with ${taskID} not found`, 404));

    // return res.status(404).json({ msg: `Task with ${taskID} not found` });
  }
  res.status(200).json({
    msg: `Task with ${taskID} deleted`,
    task: null,
    status: 'success',
  });
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
