'use strict';
module.exports = (sequelize, DataTypes) => {
	const Akses = sequelize.define(
		'Akses',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: sequelize.UUID,
			},
			kodeAkses: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			nama: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			akses: {
				type: DataTypes.TINYINT,
				allowNull: false,
				defaultValue: 0,
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
	Akses.associate = function (models) {
		// associations can be defined here
	};
	return Akses;
};
