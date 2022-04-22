const { SellerData } = require("./data");

const getSellerById =
    (
        getSellerByIdImpl = async (id) => {
            throw new Error(
                `Can't retrieved seller of id ${id} : missing implementation`
            );
        }
    ) =>
    async (id) => {
        try {
            const sellerData = await getSellerByIdImpl(id);
            return SellerData(sellerData);
        } catch (err) {
            return err;
        }
    };

module.exports = { getSellerById };
