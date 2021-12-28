const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title : String,
    description : String,
    rating : String,
    img_url : String,
    year : Number,
    author : String,
    tagline : String,
    genre : [String],
    actors : [String],

})

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;

