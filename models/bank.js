'use strict';
module.exports = (sequelize, DataTypes) => {
	const Bank = sequelize.define(
		'Bank',
		{
			id: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			namaBank: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			nomorRekening: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			namaPemilik: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userId: {
				type: Sequelize.UUID,
				allowNull: false,
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
		},
		{}
	);
	Bank.associate = function (models) {
		// associations can be defined here
	};
	return Bank;
};
