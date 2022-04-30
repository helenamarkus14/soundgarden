const db = require("../models")

const indexConcert = (req, res) => {
    db.Concert.find()
    // .populate("user")
    .exec((err, allConcerts) => {
        if(err)
            return res.status(400).json({
                message: "Failed to get concert list",
                error: err,
            });
            return res.status(200).json({
                message: "Successful concert list retrieval",
                data: allConcerts,
            });
        });
};

const userConcerts = (req, res) => {
    db.Concert.find({"user": req.params.name})
    // .populate("user")
    .exec((err, userConcerts) => {
        if(err)
            return res.status(400).json({
                message: "Failed to get concert list",
                error: err,
            });
            return res.status(200).json({
                message: "Successful concert list retrieval",
                data: userConcerts,
            });
        });
};

const showConcert = (req, res) => {
    db.Concert.findById(req.params.id)
    // .populate("user")
    .exec((err, foundConcert) => {
        if(err)
            return res.status(400).json({
                message: "Failed to find a concert record",
                error: err,
            });
            return res.status(200).json({
                message: "Successfully retrieved a concert record",
                data: foundConcert,
            });
    });
};

const createConcert = async (req, res) => {
    let concertData;
    if(req.file !== undefined) {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            img: req.file.originalname,
            day: req.body.day,
            year: req.body.year,
            venue: req.body.venue,
            user: req.body.user,
        }
    } else {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            day: req.body.day,
            year: req.body.year,
            venue: req.body.venue,
            user: req.body.user,
        }
    }

    db.Concert.create(concertData, (err, savedConcert) => {
        if(err)
            return res.status(400).json({
                message: "Failed to create concert",
                error: err,
            });
            // db.User.findById(savedConcert.user)
            // .exec((err, foundUser) => {
            //     if(err) return res.status(400).json({
            //         message: "Failed to create a concert record",
            //         error: err,
            //     })
                // foundUser.post.push(savedConcert)
                // foundUser.save()
            // })
            return res.status(200).json({
                message: "Successfully created concert record",
                data: savedConcert,
            });
    });
}

const updateConcert = (req, res) => {
    let concertData;
    if(req.file !== undefined) {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            img: req.file.originalname,
            day: req.body.day,
            year: req.body.year,
            venue: req.body.venue,
        }
    } else {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            day: req.body.day,
            year: req.body.year,
            venu: req.body.venue,
        }
    }

    db.Concert.findByIdAndUpdate(
        req.params.id,
        concertData,
        { new: true },
        (err, updatedConcert) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to update concert record",
                    error: err
                });
                return res.status(202).json({
                    message: "Successfully updated a concert record",
                    data: updatedConcert,
                });
        }
    );
};

const destroyConcert = (req, res) => {
    db.Concert.findByIdAndDelete(req.params.id, (err, deletedConcert) =>{
        console.log(req.params.id)
        if(err)
        return res.status(400).json({
            message: "Failed to delete concert record",
            error: err
        });
        return res.status(200).json({
            message: "Successfully deleted concert record",
            data: deletedConcert,
        });
    });
}

const newPlaylist = (req, res) => {
    db.Concert.findById(req.params.id, (err, concert) => {
        let playlistData = {
            name: req.body.name,
            description: req.body.description,
        }
        concert.playlists.push(playlistData);
        concert.save(function() {
            if (err)
                return res.status(400).json({
                    message: "Failed to create a playlist under a concert",
                    error: err,
                });
                return res.status(200).json({
                    message: "Successfully created a playlist under a concert",
                    data: concert,
                });
        });
    });
};

const editPlaylist = (req, res) => {
    db.Concert.findOne({_id:req.params.id1}, (err, concert) => {
        const concertPlaylist = concert.playlists.id(req.params.id2);
        const context = {playlists: concertPlaylist};
            if(err)
            return res.status(400).json({
                message: "Failed to show concert's playlist",
                error: err,
            });
            return res.status(200).json({
                message: "Successfully retrieved concert playlist info",
                data: context,
            });
    });
};

const updatePlaylist = (req, res) => {
    db.Concert.findOne({_id:req.params.id1}, (err, concert) => {
        const concertPlaylist = concert.playlists.id(req.params.id2);
        concertPlaylist.set(req.body);
        concert.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to update concert playlist",
                    error: err,
                });
                return res.status(200).json({
                    message: "Successfully updated concert playlist",
                    data: concert,
                });
        });
    });
};

const deletePlaylist = (req, res) => {
    db.Concert.findOne({_id:req.params.id1}, (err, concert) => {
        const concertPlaylist = concert.playlists.id(req.params.id2);
        concertPlaylist.remove();
        concert.save(function() {
            if(err)
                return res.status(400).json({
                    message: "Failed to delete a concert playlist",
                    error: err
                });
                return res.status(200).json({
                    message: "Successfully deleted a concert playlist",
                    data: concert
            });
        });
    });
};




module.exports = {
    indexConcert,
    userConcerts,
    showConcert,
    createConcert,
    updateConcert,
    destroyConcert,
    newPlaylist,
    editPlaylist,
    updatePlaylist,
    deletePlaylist,
}