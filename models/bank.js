'use strict';
module.exports = (sequelize, DataTypes) => {
	const Bank = sequelize.define(
		'Bank',
		{
			id: {
				primaryKey: true,
				allowNull: false,
				type: DataTypes.UUID,
				defaultValue: sequelize.UUID,
			},
			namaBank: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nomorRekening: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			namaPemilik: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			userId: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			hapus: {
				type: DataTypes.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{}
	);
	Bank.associate = function (models) {
		// associations can be defined here
	};
	return Bank;
};
