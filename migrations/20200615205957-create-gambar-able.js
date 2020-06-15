'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('GambarAbles', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			gambarId: {
				type: Sequelize.UUID,
			},
			gambarAbleId: {
				type: Sequelize.UUID,
			},
			gambarAbleType: {
				type: Sequelize.UUID,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('GambarAbles');
	},
};
