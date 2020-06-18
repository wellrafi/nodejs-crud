'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Akses', {
			id: {
				allowNull: false,
				primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID,
      },
      kodeAkses: {
        type: Sequelize.STRING,
        allowNull: true,
      },
			nama: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			akses: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 0,
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
		return queryInterface.dropTable('Akses');
	},
};
