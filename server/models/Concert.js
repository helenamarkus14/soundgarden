const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const concertSchema = new Schema({
    artist: {
        type: String,
        required: true,
        // unique: true,
    },
    month: {
        type: Number,
        required: true,
        // unique: true,
    },
    day: {
        type: Number,
        required: true,
        // unique: true,
    },
   //email as username
    year: {
        type: Number,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
});

const Concert = mongoose.model("Concert", concertSchema);

module.exports = Concert;