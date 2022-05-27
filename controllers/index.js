const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskID} not found` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const body = req.body;

    const task = await Task.findOneAndUpdate({ _id: taskID }, body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskID} not found` });
    }
    res.status(200).json({
      status: 'success',
      msg: `Task with ${taskID}  updated`,
      task,
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `Task with ${taskID} not found` });
    }
    res.status(200).json({
      msg: `Task with ${taskID} deleted`,
      task: null,
      status: 'success',
    });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
