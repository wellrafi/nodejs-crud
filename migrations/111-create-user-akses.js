'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('UserAkses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			userId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			aksesId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Akses',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
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
		return queryInterface.dropTable('UserAkses');
	},
};
