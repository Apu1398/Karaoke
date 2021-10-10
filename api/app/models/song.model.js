const mongoose = require("mongoose");

//This model represent Role collection in MondoDB DataBase
const Song = mongoose.model(
    "Song",
    new mongoose.Schema({
        name: String,
        artist: String,
        album: String,
        imglogo: String,
        url: String,
        lyrics: String
    })
);

module.exports = Song;