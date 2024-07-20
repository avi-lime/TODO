const express = require('express');
const cors = require('cors')

const taskRouter = require('./routers/taskRouter');
const authRouter = require('./routers/authRouter');
const app = express();

app.use(express.json());
app.use(cors({ origin: true }))

app.use('/api/auth', authRouter)

app.use('/api/tasks', taskRouter)


module.exports = app;