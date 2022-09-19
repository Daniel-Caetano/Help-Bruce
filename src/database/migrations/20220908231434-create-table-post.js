module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("post", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id"
        }
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      UpdatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("post");
  },
};
