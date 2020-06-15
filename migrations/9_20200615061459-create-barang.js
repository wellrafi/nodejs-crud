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
			kode: {
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
        defaultValue: "dus"
      },
			kategoriId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Kategori',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			produsenId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Produsen',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			supplierId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Produsen',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			gudangId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Produsen',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			pelekoId: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'Peleko',
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
