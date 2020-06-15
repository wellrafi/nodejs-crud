'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Banks', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID
      },
      namaBank: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nomorRekening: {
        type: Sequelize.STRING,
        allowNull: false
      },
      namaPemilik: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        references: {
          model: "User",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Banks');
  }
};