const { hash } = require("bcryptjs");
const userData = require("../models/usersData");

async function addUser(data) {
    const hashedPass = await hash(data.password, 12);

    userData.insertMany([
        { user: data.user, email: data.email, password: hashedPass },
    ]);
    return data;
}

async function getUser(data) {
    const user = await userData.find({ user: data.user });
    if (user.length === 0) {
        throw new Error("no user found");
    }

    return user[0];
}
async function getEmail(data) {
    const email = await userData.find({ email: data.email });
    if (email.length === 0) {
        throw new Error("no email found");
    }
    return email[0];
}

module.exports = {
    getUser,
    addUser,
    getEmail,
};
