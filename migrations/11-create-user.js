'use strict';
const kodeUR = "UR" + Math.floor((Math.random() * 999) * 999);
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUID,
			},
			kodeUser: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: kodeUR
			},
			nama: {
        type: Sequelize.STRING,
        allowNull: false,
			},
			username: {
				type: Sequelize.STRING,
				allowNull:false,
			},
			email: {
				type: Sequelize.STRING,
        allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
        allowNull: false,
			},
			slug: {
				type: Sequelize.STRING,
				allowNull: false
			},
			fotoUrl: {
				type: Sequelize.STRING,
				allowNull: true,
				default: process.env.DOMAIN + "/images/user.png"
			},
			noTelp: {
				type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
			},
			alamat: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null
      },
			jabatanId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Jabatans',
					key: 'id',
				},
				onDelete: "SET NULL",
				onUpdate: "CASCADE"
			},
			aktif: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			hapus: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Users');
	},
};
