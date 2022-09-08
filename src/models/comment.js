const Sequelize = require("sequelize");

const sequelize = require("../database");

const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "comment",
  }
);

module.exports = Comment;
