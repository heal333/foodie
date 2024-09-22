const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./src/models/restaurantsData");
const restaurantsRoutes = require("./src/routes/restaurants");
const searchRoutes = require("./src/routes/search");
const pageNavigationRoutes = require("./src/routes/pageNavigation");
const testRoutes = require("./src/routes/test");
const authRoutes = require("./src/routes/authentication");
const orderRoutes = require("./src/routes/order");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
    res.status(200).json({ youGot: "rooted" });
});

app.use(testRoutes);
app.use(restaurantsRoutes);
app.use(searchRoutes);
app.use(pageNavigationRoutes);
app.use("/auth", authRoutes);
app.use(orderRoutes);

app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    res.status(status).json({ message: message });
});

app.get("/resdetails", async (req, res) => {
    if (req.query.id) {
        const result = await data.find({ _id: req.query.id });
        res.status(200).json(result);
    } else {
        res.status(404).statusMessage("restaurent not found");
    }
});

app.get("/menu", async (req, res) => {
    // console.log(req.query);
    const result = await data.find({ _id: req.query.id }, { Menu: 1 });
    res.status(200).json(result[0]);
});

const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
    console.log("successfully connected with the database");
    app.listen(3000, () => {
        console.log("on port 3000");
    });
});
