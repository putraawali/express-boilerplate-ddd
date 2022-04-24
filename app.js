require("dotenv").config();

const express = require("express");
const cors = require("cors");

const App = ({ seller }) => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/seller", seller);

    return App;
};

module.exports = { App };
