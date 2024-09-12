const express = require("express");
const data = require("../models/restaurantsData");

const router = express.Router();

router.get("/search", async (req, res) => {
    const result = await data.find({}, { "Restaurant Name": 1 });
    const lst = result.filter((ele) => {
        return ele["Restaurant Name"]
            .toLocaleLowerCase()
            .includes(req.query.keyword.toLowerCase());
    });
    res.status(200).json(lst);
});

module.exports = router;
