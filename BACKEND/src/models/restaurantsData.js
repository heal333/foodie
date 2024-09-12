const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
    console.log("successfully connected with the database");
});

const data = mongoose.model(
    "restaurants",
    // "rams",
    new mongoose.Schema({
        "Restaurant Name": String,
    })
);

module.exports = data;
