const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bankSchema = Schema({
	nameBank: {
		type: String,
		required: true,
	},
	nomorRekening: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date,
	},
});

const model = mongoose.model('Bank', bankSchema);

module.exports = model;
