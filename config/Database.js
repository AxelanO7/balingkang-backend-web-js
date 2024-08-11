import { Sequelize } from "sequelize";

const db = new Sequelize("balingkang", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
