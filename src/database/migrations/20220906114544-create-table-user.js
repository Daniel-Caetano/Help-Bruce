module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      linkedin: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      github: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      green_star: {
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      UpdatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  },
};
