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

const data = mongoose.model(
    "restaurants",
    // "rams",
    new mongoose.Schema({
        "Restaurant Name": String,
    })
);

app.get("/", (req, res) => {
    res.status(200).json({ youGot: "rooted" });
});

const resSchema = {
    _id: 1,
    "Restaurant Name": 1,
    Cuisine: 1,
    Rating: 1,
    "Number of Ratings": 1,
    "Pure Veg": 1,
    "Delivery Time": 1,
    Image: 1,
};

app.get("/restaurants", async (req, res) => {
    if (req.query.veg === "1") {
        if (req.query.activeSort === "1") {
            result = await data
                .find({ "Pure Veg": "Yes" }, resSchema)
                .sort({ Rating: 1 });
            result.reverse();
        } else if (req.query.activeSort === "2") {
            result = await data
                .find({ "Pure Veg": "Yes" }, resSchema)
                .sort({ "Number of Ratings": 1 });
            result.reverse();
        } else if (req.query.activeSort === "3") {
            result = await data
                .find({ "Pure Veg": "Yes" }, resSchema)
                .sort({ "Delivery Time": 1 });
        } else {
            result = await data.find({ "Pure Veg": "Yes" }, resSchema);
        }
    } else if (req.query.veg === "2") {
        if (req.query.activeSort === "1") {
            result = await data
                .find({ "Pure Veg": "No" }, resSchema)
                .sort({ Rating: 1 });
            result.reverse();
        } else if (req.query.activeSort === "2") {
            result = await data
                .find({ "Pure Veg": "No" }, resSchema)
                .sort({ "Number of Ratings": 1 });
            result.reverse();
        } else if (req.query.activeSort === "3") {
            result = await data
                .find({ "Pure Veg": "No" }, resSchema)
                .sort({ "Delivery Time": 1 });
        } else {
            result = await data.find({ "Pure Veg": "No" }, resSchema);
        }
    } else {
        if (req.query.activeSort === "1") {
            result = await data.find({}, resSchema).sort({ Rating: 1 });
            result.reverse();
        } else if (req.query.activeSort === "2") {
            result = await data
                .find({}, resSchema)
                .sort({ "Number of Ratings": 1 });
            result.reverse();
        } else if (req.query.activeSort === "3") {
            result = await data
                .find({}, resSchema)
                .sort({ "Delivery Time": 1 });
        } else {
            result = await data.find({}, resSchema);
        }
    }

    const pages = parseInt(req.query.page) * 20;
    res.status(200).json(result.slice(pages - 20, pages));
    // res.status(200).json({});
});

app.get("/resdetails", async (req, res) => {
    if (req.query.id) {
        const result = await data.find({ _id: req.query.id });
        res.status(200).json(result);
    } else {
        res.status(404).statusMessage("restaurent not found");
    }
});

app.get("/search", async (req, res) => {
    const result = await data.find({}, { "Restaurant Name": 1 });
    const lst = result.filter((ele) => {
        return ele["Restaurant Name"]
            .toLocaleLowerCase()
            .includes(req.query.keyword.toLowerCase());
    });
    res.status(200).json(lst);
});

app.get("/totalpage", async (req, res) => {
    let result = 0;
    if (req.query.veg === "1") {
        result = await data.find({ ["Pure Veg"]: "Yes" }, { _id: 1 });
    } else if (req.query.veg === "2") {
        result = await data.find({ ["Pure Veg"]: "No" }, { _id: 1 });
    } else {
        result = await data.find({}, { _id: 1 });
    }
    let pages = parseInt(result.length / 20);
    if (result.length % 20 !== 0) {
        pages += 1;
    }
    res.status(200).json(pages);
});

app.get("/menu", async (req, res) => {
    // console.log(req.query);
    const result = await data.find({ _id: req.query.id }, { Menu: 1 });
    res.status(200).json(result[0]);
});
