const mongoose = require("mongoose");
const db = mongoose.connection;
const dbUrl = process.env.MONGO_URL;
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

mongoose
    .connect(dbUrl)
    .then(() => {
        console.log(
            `MongoDB connected at ${db.host}:${db.port}! `
        )
    })
    .catch((err) => console.log(`MongoDB connection FAILED :( Error ${err}`))