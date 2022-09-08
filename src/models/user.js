const Sequelize = require("sequelize");

const sequelize = require("../database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    linkedin: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    github: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    green_star: {
      type: Sequelize.INTEGER,
    },
  },
  {
    tableName: "user",
  }
);

module.exports = User;