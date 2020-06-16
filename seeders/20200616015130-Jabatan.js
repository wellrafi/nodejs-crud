'use strict';
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let jabatan = [
	{ id: uuidv4(), nama: 'Direktur', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Supervisor', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Admin', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Driver', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'IT Support', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
	{ id: uuidv4(), nama: 'Staff', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Jabatans', jabatan, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Jabatans', null, {});
	},
};
