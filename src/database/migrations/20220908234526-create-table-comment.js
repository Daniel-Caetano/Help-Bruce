module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("comment", {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      post_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Post",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      green_star: {
        type: Sequelize.DataTypes.BOOLEAN,
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
    return queryInterface.dropTable("comment");
  },
};
