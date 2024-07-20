const express = require('express');
const { getTasks, createTask, editTask } = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.route('/')
    .post(createTask)
taskRouter.route('/:userId')
    .get(getTasks)
taskRouter.route('/:taskId')
    .put(editTask)


module.exports = taskRouter