const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
    console.log("successfully connected with the database");
    app.listen(3000, () => {
        console.log("listening on por 300");
    });
});

const data = mongoose.model("restaurants", new mongoose.Schema());

app.get("/restaurants", async (req, res) => {
    result = await data.find(
        {},
        {
            "Restaurant Name": 1,
            Cuisine: 1,
            Rating: 1,
            "Number of Ratings": 1,
            "Pure Veg": 1,
            "Delivery Time": 1,
            Image: 1,
        }
    );
    res.status(200).json(result.slice(0, 20));
});

app.get("/restaurants/highestrated", async (req, res) => {
    result = await data.find().sort({ Rating: 1 });
    res.status(200).json(result.reverse().slice(0, 20));
});

app.get("/restaurants/mostrated", async (req, res) => {
    result = await data.find().sort({ "Number of Ratings": 1 });
    res.status(200).json(result.slice(0, 20));
});

app.get("/restaurants/deliverytime", async (req, res) => {
    result = await data.find().sort({ "Delivery Time": 1 });
    res.status(200).json(result.slice(0, 20));
});

app.get("/restaurants/veg", async (req, res) => {
    result = await data.find({ "Pure Veg": "Yes" });
    res.status(200).json(result.slice(0, 20));
});
app.get("/restaurants/nonveg", async (req, res) => {
    result = await data.find({ "Pure Veg": "No" });
    res.status(200).json(result.slice(0, 20));
});
// app.listen(3000, () => {
//     console.log("listing on 3k");
// });
// app.get("/", (req, res) => {
//     res.status(200).json({ yougot: "rooted" });
// });
