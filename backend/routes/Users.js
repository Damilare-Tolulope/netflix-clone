const express = require('express');
const Users = require('../models/Users')

const app = express()

app.get('/', (req, res) =>{
    Users.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Couldn't fetch users :" + err))
})

app.get('/:userId', (req, res) => {
    Users.findById(req.params.userId)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Couldn't fetch user :" + err))
})

app.post('/addUser', (req, res) => {
    const newUser = new Users({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })

    newUser.save()
        .then(()=> res.json("User added successfully"))
        .catch(err => res.status(400).json("Error adding user :" + err))
})

app.delete('/:userId', (req, res) => {
    Users.findByIdAndDelete(req.params.userId)
        .then(()=> res.json("User details deleted"))
        .catch(err => res.status(400).json("Error deleting user :" + err))
})

module.exports = app;