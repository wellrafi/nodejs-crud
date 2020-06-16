'use strict';
const kodeGudang = "GD" + Math.floor((Math.random() * 999) * 999);
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Gudangs', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
      },
      kodeGudang: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: kodeGudang
      },
			nama: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: 'Tanpa Nama',
			},
			alamat: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: 'Tanpa Alamat',
			},
			lonTd: {
				type: Sequelize.DOUBLE,
				allowNull: true,
				defaultValue: 0,
			},
			latTd: {
				type: Sequelize.DOUBLE,
				allowNull: true,
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
		return queryInterface.dropTable('Gudangs');
	},
};
