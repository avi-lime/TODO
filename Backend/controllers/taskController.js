const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(400).json({ error: 'You must provide a user ID' });
    }
    try {
        const tasks = await Task.find({ userId });
        console.log(tasks);
        res.status(200)
            .json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching tasks' });
    }
}

const createTask = async (req, res) => {
    const { title, userId } = req.body;
    if (!title || !userId) {
        return res.status(400).json({ error: 'You must provide a title and a user ID' });
    }

    try {
        const task = new Task({
            title,
            userId
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error while creating task' });
    }
}

const editTask = async (req, res) => {
    const taskId = req.params.taskId;
    if (!taskId) {
        return res.status(400).json({ error: 'You must provide a task ID' });
    }
    try {
        const data = req.body;
        const task = await Task.findByIdAndUpdate(taskId, data, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error while updating task' });
    }
}

module.exports = { getTasks, createTask, editTask }