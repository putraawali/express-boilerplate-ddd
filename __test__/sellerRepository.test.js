const { Pool } = require("pg");
const {
    getSellerByIdRepository,
} = require("../seller/repository/pgRepository");

jest.mock("pg", () => {
    const mockPool = {
        // connect: jest.fn(),
        query: jest.fn(),
    };
    return {
        Pool: jest.fn(() => mockPool),
    };
});

describe("Seller Repository Test Case", () => {
    const db = new Pool();
    const getSellerById = getSellerByIdRepository({ db });
    test("Success get seller", async () => {
        db.query.mockResolvedValue({
            rows: [{ id: 1, name: "Test seller name", email: "test@mail.com" }],
        });
        try {
            let res = await getSellerById(1);
            expect(res.success).toEqual(true);
            expect(res.data).toEqual({
                id: 1,
                name: "Test seller name",
                email: "test@mail.com",
            });
        } catch (error) {
            console.error(error);
        }
    });

    test("Seller not found", async () => {
        db.query.mockResolvedValue({
            rows: [],
        });
        try {
            let res = await getSellerById(1);
            expect(res.success).toEqual(false);
            expect(res.message).toEqual("Seller Not found!");
        } catch (error) {
            console.error(error);
        }
    });
});
