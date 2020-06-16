'use strict';
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');

let gudangs = [
	{
		id: uuidv4(),
		nama: 'Gd Palembang',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
  },
  {
		id: uuidv4(),
		nama: 'Gd Jakarta',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
  },
  {
		id: uuidv4(),
		nama: 'Gd Bekasi',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
  },
  {
		id: uuidv4(),
		nama: 'Gd Batam',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
  },
  {
		id: uuidv4(),
		nama: 'Gd Aceh',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
  },
  {
		id: uuidv4(),
		nama: 'Gd Mentawai',
		alamat: faker.address.city(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
];

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Gudangs', gudangs, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Gudangs', null, {});
	},
};
