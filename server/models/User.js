const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    display_name: {
        type: String,
        required: true,
        // unique: true,
    },
    external_urls: {
        type: String,
        required: true,
        // unique: true,
    },
    href: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    type: {
        type: "user",
        required: true,
    },
    uri: {
        type: String,
        required: true,
    },
    concerts: [{ type: Schema.Types.ObjectId, ref: "Concert" }],
    playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;