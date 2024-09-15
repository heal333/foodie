const mongoose = require("mongoose");

const data = mongoose.model(
    "restaurants",
    // "rams",
    new mongoose.Schema({
        "Restaurant Name": String,
    })
);

module.exports = data;
