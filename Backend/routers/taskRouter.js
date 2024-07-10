const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController');

const taskRouter = express.Router();

taskRouter.route('/')
    .post(createTask)
taskRouter.route('/:userId')
    .get(getTasks)


module.exports = taskRouter