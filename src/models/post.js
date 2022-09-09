const Sequelize = require("sequelize");

const sequelize = require("../database");
const Comment = require("./comment");

const Post = sequelize.define(
  "post",
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
    description: {
      type: Sequelize.STRING,
      allowNull: false,
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
    tableName: "post",
  }
);

Post.hasMany(Comment, { as: "comments" });

module.exports = Post;
