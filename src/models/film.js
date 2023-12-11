const mongoose = require("mongoose");


const FilmModels = mongoose.model('Films', {
    title: { type: String },
    description: { type: String },
    image_url: {   type: String },
    trailer_url: {   type: String },
    created_at: {type: Date, default: Date.now() },
    updated_at: {type: Date, default: Date.now() },    
});

module.exports = FilmModels;