const Sequelize = require("sequelize");

const sequelize = require("../database");

const Category = sequelize.define(
  "category",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "category",
  }
);

module.exports = Category;
