const { getSellerById: generateSeller } = require("../domain/getSellerById");

const getSellerByIdRepository = ({ db }) => {
    return generateSeller(async (id) => {
        try {
            const data = await db.query(
                `select * from "Seller" s where id = $1`,
                [id]
            );
            if (data.rows.length === 0) {
                throw "Seller Not found!";
            } else {
                return data.rows[0];
            }
        } catch (error) {
            throw error;
        }
    });
};

module.exports = { getSellerByIdRepository };
