'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Barangs', {
			id: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			kodeBarang: {
				type: Sequelize.STRING,
				allowNull: false
			},
			kodeScan: {
				type: Sequelize.DOUBLE,
				allowNull: true,
			},
			nama: {
				type: Sequelize.STRING,
				allowNull: false,
      },
      hargaEceran:{
        type: Sequelize.DOUBLE,
				allowNull: false,
      },
      hargaGrosir: {
        type: Sequelize.DOUBLE,
				allowNull: false,
      },
      jumlah: {
        type: Sequelize.DOUBLE,
				allowNull: false,
      },
      satuan: {
        type: Sequelize.STRING,
				allowNull: true
			},
			masuk: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			kategoriBarangId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'KategoriBarangs',
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
			pelekoId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Pelekos',
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
		return queryInterface.dropTable('barangs');
	},
};
