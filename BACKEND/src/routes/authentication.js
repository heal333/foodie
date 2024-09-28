const express = require("express");

const {
    isValidEmail,
    isValidPassword,
    createJSONToken,
    isValidText,
    checkAuthMiddleware,
    validateJSONToken,
} = require("../controllers/userValidation");
const { addUser, getUser, getEmail } = require("../controllers/userSignup");

const router = express.Router();

//for signup
router.post("/signup", async (req, res, next) => {
    const data = req.body;

    let err = {};
    if (!isValidEmail(data.email)) {
        err.email = "invalid email";
    } else {
        try {
            const existingUser = await getUser(data.user);
            // console.log(existingUser);
            if (Object.keys(existingUser).length > 0) {
                err.user = "username already exists";
            }
            const existingEmail = await getEmail(data.email);
            if (Object.keys(existingEmail).length > 0) {
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
        user = await getUser(data.user);
    } catch (error) {
        try {
            user = await getEmail(data.user);
        } catch (error) {
            return res.status(401).json({ message: "authentication failed" });
        }
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
    res.status(201).json({ token: token, user: user.user });
});

//for auto login validation
router.post("/autologin", async (req, res, next) => {
    const data = req.body;

    try {
        const user = await getUser(data.user);
        if (user) {
            if (validateJSONToken(data.token)) {
                return res.status(201).json(user);
            }
        }
    } catch (err) {
        return res.status(422).json({ message: "invalid creds" });
    }
});

module.exports = router;
