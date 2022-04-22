const { getSellerUsecase } = require("./usecase/getSellerUsecase");
const { getSellerById } = require("./repository/pgRepository");
const { db } = require("../db");

const SellerProject = ({ getSellerById }) => ({
    getSeller: getSellerUsecase({ getSellerById }),
});

const sellerProject = SellerProject({
    getSellerById: getSellerById({ db }),
});

module.exports = { sellerProject };
