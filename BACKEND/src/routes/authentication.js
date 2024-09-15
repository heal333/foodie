const express = require("express");

const {
    isValidEmail,
    isValidPassword,
    createJSONToken,
    isValidText,
} = require("../controllers/userValidation");
const { addUser, getUser, getEmail } = require("../controllers/userSignup");

const router = express.Router();

//for signup
router.post("/signup", async (req, res, next) => {
    const data = req.body;
    console.log(data);

    let err = {};
    if (!isValidEmail(data.email)) {
        err.email = "invalid email";
    } else {
        try {
            const existingUser = await getUser(data);
            if (existingUser.length > 0) {
                err.user = "username already exists";
            }
            const existingEmail = await getEmail(data);
            if (existingEmail.length > 0) {
                err.email = "email already exists";
            }
        } catch (errors) {}
    }

    if (!isValidText(data.password, 6)) {
        err.password = "invalid password. must be atleast 6 char";
    }
    if (!isValidText(data.password, 3)) {
        err.password = "invalid user. must e atleast 3 chars";
    }
    if (Object.keys(err).length > 0) {
        return res.status(422).json({
            message: "sign up errors",
            err,
        });
    }
    try {
        const newUser = await addUser(data);
        const authtoken = createJSONToken(newUser.email);
        res.status(201).json({
            message: "user Created.",
            user: newUser,
            token: authtoken,
        });
    } catch (error) {
        next(error);
    }
});

//for login
router.post("/login", async (req, res) => {
    const data = req.body;

    let user;
    try {
        user = await getUser(data);
    } catch (error) {
        return res.status(401).json({ message: "authentication failed" });
    }

    const isValid = await isValidPassword(data.password, user.password);
    if (!isValid) {
        return res.status(422).json({
            message: "invalid credentials",
            errors: {
                credentials: "invalid email or password entered",
            },
        });
    }

    const token = createJSONToken(user.email);
    res.status(201).json({ token });
});

module.exports = router;
