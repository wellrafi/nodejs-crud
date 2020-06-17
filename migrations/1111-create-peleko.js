'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Pelekos', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			kodePeleko: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			namaPeleko: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			namaKontak: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			kota: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			provinsi: {
				type: Sequelize.STRING,
				allowNull: true
			},
			negara: {
				type: Sequelize.STRING,
				defaultValue: 'Indonesia',
				allowNull: true,
			},
			kodePos: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			alamat: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			lonTd: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			latTd: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			nomorTelepon: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: true,
			},
			fotoProfilUrl: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: true,
			},
			// ternyata bug nya model sama migrations nggk sama nama columnya
			// jadi query nge run terus nggk mau berhenti
			createdById: {
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			jenisId: {
				type: Sequelize.UUID,
				references: {
					model: 'JenisPelekos',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			gudangId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Gudangs',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			aktif: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
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
		return queryInterface.dropTable('PelakuEkonomis');
	},
};
