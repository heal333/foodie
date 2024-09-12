const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const data = require("./src/models/restaurantsData");
const restaurantsRoutes = require("./src/routes/restaurants");
const searchRoutes = require("./src/routes/search");
const pageNavigationRoutes = require("./src/routes/pageNavigation");

const app = express();
app.use(cors());
dotenv.config({ path: "./config.env" });

app.get("/", (req, res) => {
    res.status(200).json({ youGot: "rooted" });
});

app.use(restaurantsRoutes);
app.use(searchRoutes);
app.use(pageNavigationRoutes);

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

app.listen(3000, () => {
    console.log("on port 3000");
});
