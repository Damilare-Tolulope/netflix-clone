const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const movieRoute = require('./routes/Movies')
const userRoute = require('./routes/Users')

const app = express();

app.use(express.json());

app.use(cors());

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection
connection.once('open', () => {
    console.log("Connected to the database successfully");
})

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to my movies store.")
})
app.use('/movies', movieRoute)
app.use('/users', userRoute)


const port = 5000 || process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`))