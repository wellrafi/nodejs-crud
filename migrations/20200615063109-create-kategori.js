'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Kategoris', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
			},
			nama: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			hapus: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Kategoris');
	},
};
