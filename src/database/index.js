const Sequelize = require("sequelize");
const Connect_db = require("../config/database");
const sequelize = new Sequelize(Connect_db);

module.exports = sequelize;
