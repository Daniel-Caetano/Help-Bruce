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
    },
    post_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "post",
        key: "id"
      }
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    }
  },
  {
    tableName: "comment",
  }
);

module.exports = Comment;
