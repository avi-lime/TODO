const express = require('express');
const taskRouter = require('./routers/taskRouter');
const authRouter = require('./routers/authRouter');
const app = express();

app.use(express.json());
app.use('/api/auth', authRouter)

app.use('/api/tasks', taskRouter)


module.exports = app;