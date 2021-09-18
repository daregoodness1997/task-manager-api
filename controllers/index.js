const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    res.status(200).json('get all Tasks');
  } catch (err) {
    console.log(err);
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    console.log(err);
  }
};
const getTask = async (req, res) => {
  try {
    res.status(200).json('get Task');
  } catch (err) {
    console.log(err);
  }
};
const updateTask = async (req, res) => {
  try {
    res.status(200).json('Task updated');
  } catch (err) {
    console.log(err);
  }
};
const deleteTask = async (req, res) => {
  try {
    res.status(200).json('Task deleted');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
