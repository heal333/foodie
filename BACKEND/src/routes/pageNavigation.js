const express = require("express");
const data = require("../models/restaurantsData");

const router = express.Router();

router.get("/totalpage", async (req, res, next) => {
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

module.exports = router;
