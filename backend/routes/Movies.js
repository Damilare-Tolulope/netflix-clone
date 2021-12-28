const express = require('express')
const Movies = require('../models/Movies')

const app = express();

app.get('/', (req, res) => {
    Movies.find()
        .then(movies => res.json(movies))
        .catch(err => res.status(400).json("Coouldn't fetch movies :" + err))
})

app.get('/:movieId', (req, res) => {
    Movies.findById(req.params.movieId)
        .then(movie => res.json(movie))
        .catch(err => res.status(400).json("Couldn't fetch movie :" + err))
})

app.post('/addMovie', (req, res) => {
    const newMovie = new Movies({
        title : req.body.title,
        description : req.body.description,
        rating : req.body.rating,
        img_url : req.body.img_url,
        year : req.body.year,
        author : req.body.author,
        tagline : req.body.tagline,
        genre : req.body.genre,
        actors : req.body.actors
    })

    newMovie.save()
        .then(() => res.json("Movie added successfully"))
        .catch(err => res.status(400).json("Error adding new movie :" + err))
   
})

app.post('/addMovie', (req, res) => {
    Movies.findById()
        .then( movie => {
            movie.title = req.body.title,
            movie.description = req.body.description,
            movie.rating = req.body.rating,
            movie.img_url = req.body.img_url,
            movie.year = req.body.year,
            movie.author = req.body.author,
            movie.tagline = req.body.tagline,
            movie.genre = req.body.genre,
            movie.actors = req.body.actors

            movie.save()
                .then(() => res.json("Movie Updated"))
                .catch(err => res.status(400).json("Error updating movie :" + err))
        })

    newMovie.save()
        .then(() => res.json("Movie added successfully"))
        .catch(err => res.status(400).json("Couldn't find movie :" + err))
   
})


app.delete('/:movieId', (req, res) => {
    Movies.findByIdAndDelete(req.params.movieId)
        .then(() => res.json("Movie deleted"))
        .catch(err => res.status(400).json("Error deleting movie :" + err))
})


module.exports = app