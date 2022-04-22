const { getSellerById: generateSeller } = require("../domain/getSellerById");

const getSellerById = ({ db }) => {
    return generateSeller(async (id) => {
        try {
            const data = await db.query(
                `select * from "Seller" s where id = $1`,
                [id]
            );
            return data.rows[0];
        } catch (error) {
            return error;
        }
    });
};

module.exports = { getSellerById };
