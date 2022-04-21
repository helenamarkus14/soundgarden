const db = require("../models")

const indexConcert = (req, res) => {
    db.Concert.find()
    .populate("user")
    .exec((err, allConcerts) => {
        if(err)
            return res.status(400).json({
                message: "Failed to get posts",
                error: err,
            });
            return res.status(200).json({
                message: "Successful concert list retrieval",
                data: allConcerts,
            });
        });
};

const showConcert = (req, res) => {
    db.Concert.findById(req.params.id)
    .populate("user")
    .exec((err, foundConcert) => {
        if(err)
            return res.status(400).json({
                message: "Failed to find a post",
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
            day: req.file.day,
            year: req.file.year,
            venu: req.file.venue,
            user: req.userId,
        }
    } else {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            day: req.file.day,
            year: req.file.year,
            venu: req.file.venue,
            user: req.userId,
        }
    }

    db.Concert.create(concertData, (err, savedConcert) => {
        if(err)
            return res.status(400).json({
                message: "Failed to create concert",
                error: err,
            });
            db.User.findById(savedConcert.user)
            .exec((err, foundUser) => {
                if(err) return res.status(400).json({
                    message: "Failed to create a concert record",
                    error: err,
                })
                foundUser.post.push(savedConcert)
                foundUser.save()
            })
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
            day: req.file.day,
            year: req.file.year,
            venu: req.file.venue,
            user: req.userId,
        }
    } else {
        concertData = {
            artist: req.body.artist,
            month: req.body.month,
            day: req.file.day,
            year: req.file.year,
            venu: req.file.venue,
            user: req.userId,
        }
    }

    db.Concert.findByIdAndUpdate(
        req.params.id,
        concertData,
        { new: true },
        (err, updatedConcert) => {
            if(err)
                return res.status(400).json({
                    message: "Failed to update post",
                    error: err
                });
                return res.status(202).json({
                    message: "Successfully updated a post",
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
            message: "Failed to delete post",
            error: err
        });
        return res.status(200).json({
            message: "Successfully deleted post",
            data: deletedConcert,
        });
    });
}



module.exports = {
    indexConcert,
    showConcert,
    createConcert,
    updateConcert,
    destroyConcert,
}