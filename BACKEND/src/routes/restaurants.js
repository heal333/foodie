const express = require("express");
const data = require("../models/restaurantsData");

const router = express.Router();

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

router.get("/restaurants", async (req, res) => {
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

module.exports = router;
