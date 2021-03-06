'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Banks', {
			id: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			namaBank: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nomorRekening: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			namaPemilik: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fotoUrl: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			userId: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			hapus: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Banks');
	},
};
