const db = require("../models");
const Song = db.song;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.premiumBoard = (req, res) => {
    res.status(200).send("Premium Content.");
};

// -------------------------------------------------------------------------------


// Create and Save a new Song
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    // Create a song
    const song = new Song({
        name: req.body.name,
        artist: req.body.name,
        album: req.body.album,
        imglogo: req.body.imglogo,
        url: req.body.url,
        lyrics: req.body.lyrics
    });

    // Save Song in the database
    song
        .save(song)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Find a single song with an id
exports.findOne = (req, res) => {
    const id = req.params.id;


    Song.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Song with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Song with id=" + id });
        });
};

// Find a all the songs
exports.findAll = (req, res) => {
    Song.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving songs."
            });
        });
};

// Update a single song with an id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Song.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Song with id=${id}. Song wasn't found!`
                });
            } else res.send({ message: "Song was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Song with id=" + id
            });
        });
};

// Delete a single song with and id
exports.delete = (req, res) => {
    const id = req.params.id;

    Song.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Song with id=${id}. Song was not found!`
                });
            } else {
                res.send({
                    message: "Song was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Song with id=" + id
            });
        });
};
