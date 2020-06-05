const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
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
