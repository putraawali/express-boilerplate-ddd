const { Pool } = require("pg");

const db = new Pool({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DBNAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    maxUses: 10,
});

db.connect()
    .then(() => console.log("Success connect to database"))
    .catch((err) => {
        console.log(err);
        process.exit();
    });

module.exports = {
    db,
};
