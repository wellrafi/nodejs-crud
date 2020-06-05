const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featureSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	qty: {
		type: Number,
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
		type: Date
	}
});

const model = mongoose.model('Feature', featureSchema);

module.exports = model;
