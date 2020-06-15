'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Barangs', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID
      },
      kode: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kategoriId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Kategori",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      produsenId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Produsen",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      supplier: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Produsen",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
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
    return queryInterface.dropTable('barangs');
  }
};