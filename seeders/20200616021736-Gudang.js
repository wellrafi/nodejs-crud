'use strict';
const { v4: uuidv4 } = require('uuid');
const faker = require('faker');


let gudangs = [
	{
		id: uuidv4(),
		kodeGudang: "GD-" + Math.floor(Math.random() * 1000),
		nama: 'Gd Palembang',
		fotoUrl: "https://source.unsplash.com/user/erondu/400x400",
		alamat: faker.address.state(),
		kota: faker.address.city(),
		provinsi: faker.address.county(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		id: uuidv4(),
		kodeGudang: "GD-" + Math.floor(Math.random() * 1000),
		nama: 'Gd Bakauni',
		fotoUrl: "https://source.unsplash.com/user/erondu/400x400",
		alamat: faker.address.state(),
		kota: faker.address.city(),
		provinsi: faker.address.county(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
		{
		id: uuidv4(),
		kodeGudang: "GD-" + Math.floor(Math.random() * 1000),
		nama: 'Gd Lampung Tengah',
		fotoUrl: "https://source.unsplash.com/user/erondu/400x400",
		alamat: faker.address.state(),
		kota: faker.address.city(),
		provinsi: faker.address.county(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		id: uuidv4(),
		kodeGudang: "GD-" + Math.floor(Math.random() * 1000),
		nama: 'Gd Unit 2',
		fotoUrl: "https://source.unsplash.com/user/erondu/400x400",
		alamat: faker.address.state(),
		kota: faker.address.city(),
		provinsi: faker.address.county(),
		lonTd: faker.address.longitude(),
		latTd: faker.address.latitude(),
		hapus: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	},
	{
		id: uuidv4(),
		kodeGudang: "GD-" + Math.floor(Math.random() * 1000),
		nama: 'Gd Pekalongan',
		fotoUrl: "https://source.unsplash.com/user/erondu/400x400",
		alamat: faker.address.state(),
		kota: faker.address.city(),
		provinsi: faker.address.county(),
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
