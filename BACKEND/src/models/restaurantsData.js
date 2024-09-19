const mongoose = require("mongoose");

const data = mongoose.model(
    "restaurants",
    // "rams",
    new mongoose.Schema({
        "Restaurant Name": { type: String },
    })
);

module.exports = data;
