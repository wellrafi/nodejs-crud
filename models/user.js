'use strict';
const kodeUR = "UR" + Math.floor((Math.random() * 999) * 999);
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: sequelize.UUID,
			},
			kodeUser: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: kodeUR
			},
			nama: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			noTelp: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: null,
			},
			alamat: {
				type: DataTypes.TEXT,
				allowNull: true,
				defaultValue: null,
			},
			fotoUrl: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			jabatanId: {
				type: DataTypes.UUID,
				allowNull: false,
				references: {
					model: 'Jabatans',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
			},
			aktif: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			hapus: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
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
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
