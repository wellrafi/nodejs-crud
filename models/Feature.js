const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

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
	itemId: {
		type: ObjectId,
		ref: 'Item',
	},
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date,
	},
});

const model = mongoose.model('Feature', featureSchema);

module.exports = model;
