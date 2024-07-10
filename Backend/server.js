require('dotenv').config();

const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONN)
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => console.error(err));

app.listen(1010, () => {
    console.log("Server started.");
})