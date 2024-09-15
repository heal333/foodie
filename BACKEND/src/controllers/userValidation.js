const { sign, verify } = require("jsonwebtoken");
const { compare } = require("bcryptjs");

const KEY = "will get it from envioronmental variable later";

function createJSONToken(email) {
    return sign({ email }, KEY, { expiresIn: "1h" });
}

function validateJSONToken(token) {
    return verify(token, KEY);
}

function isValidPassword(password, storedPassword) {
    // console.log(password, storedPassword);
    return compare(password, storedPassword);
}

function isValidEmail(value) {
    return value && value.includes("@");
}
function isValidText(value, length) {
    return value.trim().length > length;
}

function checkAuthMiddleware(req, res, next) {
    if ((req.method = "OPTIONS")) {
        return next();
    }
    if (!req.headers.authrization) {
        console.log("auth header missing");
        return next(new NotAuthError("not authenticated"));
    }
    const authFrags = req.headers.authrization.split(" ");
    if (authFrags.length !== 2) {
        console.log("invalid header");
        return next(new NotAuthError("not authenticated"));
    }
    const authToken = authFrags[1];
    try {
        const validatedToken = validateJSONToken(authToken);
        req.token = validatedToken;
    } catch (err) {
        console.log("invalid tkn");
        return next(new NotAuthError("not authenticated"));
    }
    next();
}

module.exports = {
    createJSONToken,
    validateJSONToken,
    checkAuthMiddleware,
    isValidEmail,
    isValidText,
    isValidPassword,
};
