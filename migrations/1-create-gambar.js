'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Gambars', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			gambarUrl: {
				type: Sequelize.STRING,
			},
			hapus: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
		return queryInterface.dropTable('Gambars');
	},
};
