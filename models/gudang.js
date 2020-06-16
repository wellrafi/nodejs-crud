'use strict';
module.exports = (sequelize, DataTypes) => {
	const Gudang = sequelize.define(
		'Gudang',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
      },
      kode: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 
      },
			nama: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			alamat: {
				type: DataTypes.STRING,
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
			hapus: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.NOW(),
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				defaultValue: sequelize.NOW(),
			},
		},
		{}
	);
	Gudang.associate = function (models) {
		// associations can be defined here
	};
	return Gudang;
};
