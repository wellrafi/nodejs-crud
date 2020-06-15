'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produsens', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
        defaultValue: Sequelize.UUID,
      },
      kode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      noTelp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hapus: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Produsens');
  }
};