require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.SERVER_PORT;
const { sellerProject } = require("./seller/sellerInjection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const { id } = req.body;
        let data = await sellerProject.getSeller({ id });
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
});

app.listen(PORT, () => console.log("Server listening on port =", PORT));
