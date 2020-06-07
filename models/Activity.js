const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const activitySchema = Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	isPopular: {
		type: Boolean,
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

const model = mongoose.model('Activity', activitySchema);

module.exports = model;
