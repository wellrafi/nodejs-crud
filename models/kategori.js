'use strict';
module.exports = (sequelize, DataTypes) => {
	const Kategori = sequelize.define(
		'KategoriBarang',
		{
			id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.UUID,
				// defaultValue: sequelize.UUID,
			},
			nama: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			hapus: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
				// defaultValue: sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
				// defaultValue: sequelize.NOW,
			},
		},
		{}
	);
	Kategori.associate = function (models) {};
	return Kategori;
};
