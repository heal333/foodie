const express = require("express");
const data = require("../models/usersData");

const router = express.Router();

router.get("/test", async (req, res) => {
    console.log("tested positive");
    const result = await data.find();
    data.insertMany([{ email: "new sdfk", password: "sdlsfjldkjf" }]);
    res.status(200).json({ data: result });
});
router.post("/test", async (req, res) => {
    console.log("testing post");
    console.log(req.body);
    res.status(200).json({ get: "bugged" });
});
router.put("/test", async (req, res) => {
    console.log("testing post");
    console.log(req.body);
    res.status(200).json({ get: "bugged" });
});

module.exports = router;
