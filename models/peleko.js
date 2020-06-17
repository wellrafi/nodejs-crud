'use strict';
module.exports = (sequelize, DataTypes) => {
	const PelakuEkonomi = sequelize.define(
		'Peleko',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: sequelize.UUID,
			},
			kodePeleko: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			namaPeleko: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			namaKontak: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			kota: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			provinsi: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			negara: {
				type: DataTypes.STRING,
				defaultValue: 'Indonesia',
				allowNull: true,
			},
			kodePos: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			alamat: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			lonTd: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			latTd: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			nomorTelepon: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: true,
			},
			fotoProfilUrl: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: true,
			},
			jenisId: {
				type: DataTypes.UUID,
				references: {
					model: 'JenisPeleko',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			gudangId: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: 'Gudang',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			createdById: {
				type: DataTypes.UUID,
				references: {
					model: 'User',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			aktif: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			hapus: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.NOW,
			},
		},
		{}
	);
	PelakuEkonomi.associate = function (models) {
		// associations can be defined here
	};
	return PelakuEkonomi;
};
