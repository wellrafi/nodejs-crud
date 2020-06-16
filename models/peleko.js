'use strict';
const kode = "PL" + Math.floor((Math.random() * 999) * 999);
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
				defaultValue: kode
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
			province: {
				type: DataTypes.STRING,
				allowNull: true
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
			userId: {
				type: DataTypes.UUID,
				references: {
					model: 'Users',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			jenisId: {
				type: DataTypes.UUID,
				references: {
					model: 'JenisPelekos',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			gudangId: {
				type: DataTypes.UUID,
				allowNull: true,
				references: {
					model: 'Gudangs',
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
