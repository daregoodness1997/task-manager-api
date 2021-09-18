const express = require('express');
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers');
const router = express.Router();

// router.get('/', getTasks);
// router.post('/', createTask);
// router.get('/:id', getTask);
// router.patch('/:id', updateTask);
// router.delete('/:id', deleteTask);
// OR

router.route('/').get(getTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
module.exports = router;
