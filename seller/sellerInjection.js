const sellerRouter = require("express").Router();
const { getSellerUsecase } = require("./usecase/getSellerUsecase");
const { getSellerByIdRepository } = require("./repository/pgRepository");

const SellerProject = ({ getSellerByIdRepository }) => ({
    getSeller: getSellerUsecase({ getSellerByIdRepository }),
});

const SellerInjection = ({ db }) => {
    const sellerProject = SellerProject({
        getSellerById: getSellerByIdRepository({ db }),
    });

    sellerRouter.get("/", async (req, res) => {
        try {
            const { id } = req.body;
            let data = await sellerProject.getSeller({ id });
            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({ error });
        }
    });
    return sellerRouter;
};

module.exports = { SellerInjection, SellerProject };
