const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        // unique: true,
    },
    lastName: {
        type: String,
        required: true,
        // unique: true,
    },
   //email as username
    email: {
        type: String,
        required: true,
        unique: true,
    },
    concerts: [{ type: Schema.Types.ObjectId, ref: "Concert" }],
    playlists: [{ type: Schema.Types.ObjectId, ref: "Playlist" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;