const mongoose = require("mongoose");

// dotenv.config({ path: "config.env" });
// const DB =
//     process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD) +
//     "/foodie";

// mongoose.connect(DB).then((con) => {
//     console.log("successfully connected with the database wts");
// });

const userData = mongoose.model(
    "users",
    // "rams",
    new mongoose.Schema({
        user: { type: String },
        email: { type: String },
        password: { type: String },
        created: { type: Number },
        cart: { type: Array },
        history: { type: Array },
    })
);

module.exports = userData;
