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
			username: {
				type: DataTypes.STRING,
				allowNull:false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			slug: {
				type: DataTypes.STRING,
				allowNull: false
			},
			fotoUrl: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: process.env.IMAGE_DOMAIN + "/images/user.png"
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
