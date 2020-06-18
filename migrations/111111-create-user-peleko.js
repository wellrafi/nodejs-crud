'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserPelekos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      pelekoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Pelekos",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserPelekos');
  }
};