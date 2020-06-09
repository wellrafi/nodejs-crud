const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date
	}
});

const model = mongoose.model('Member', memberSchema);

module.exports = model;
