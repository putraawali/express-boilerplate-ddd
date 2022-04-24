require("dotenv").config();

const { App } = require("./app");
const { db } = require("./db");
const { SellerInjection } = require("./seller/sellerInjection");
const PORT = process.env.SERVER_PORT;

const app = App({
    seller: SellerInjection({ db }),
});
app.listen(PORT, () => console.log("Server listening on port =", PORT));
