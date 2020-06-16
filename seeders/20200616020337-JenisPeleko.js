'use strict';

const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let jenisPelekos = [
	{ id: uuidv4(), nama: 'Produsen', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Distributor', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Sub-Distributor', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Supplier', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Sales', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Agen', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Reseller', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Warung', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Outlet', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('JenisPelekos', jenisPelekos, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('JenisPelekos', null, {});
	},
};
