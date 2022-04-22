const getSellerUsecase =
    ({ getSellerById }) =>
    async ({ id }) => {
        return await getSellerById(id);
    };

module.exports = { getSellerUsecase };
