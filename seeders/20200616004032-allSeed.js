'use strict';
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let kategoriBarangs = [
	{ id: uuidv4(), nama: 'Mie Instan', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Air Mineral', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Minuman Energi', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Minuman Teh', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Minuman Kopi', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{
		id: uuidv4(),
		nama: 'Minuman Karbonasi',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{ id: uuidv4(), nama: 'Bumbu Makanan', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Nasi', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Beras', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Kopi Sachet', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Coklat', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Permen', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Pasta Instan', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Selai', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Ciki', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('KategoriBarangs', kategoriBarangs, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('KategoriBarangs', null, {});
	},
};
