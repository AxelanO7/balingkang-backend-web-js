import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Building = db.define(
    "building",
    {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
    },
    {
        freezeTableName: true,
    }
);

export default Building;

(async () => {
    await db.sync();
})();
