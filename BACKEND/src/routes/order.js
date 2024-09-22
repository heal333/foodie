const express = require("express");
const { addHistory, getUser } = require("../controllers/userSignup");
const { validateJSONToken } = require("../controllers/userValidation");

const router = express.Router();

router.post("/order", async (req, res) => {
    const data = req.body;

    try {
        const user = await getUser(data.user);

        if (user) {
            if (validateJSONToken(data.token)) {
                addHistory(data);
                return res.status(201).json({ done: "eheh" });
            }
        }
    } catch (err) {
        return res.status(422).json({ message: "invalid creds" });
    }

    res.status(200).json({ cl: "ear" });
});

module.exports = router;
