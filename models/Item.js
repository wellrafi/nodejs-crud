const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const itemSchema = Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	country: {
		type: String,
		default: 'Indonesia',
	},
	city: {
		type: String,
		required: true,
	},
	isPopular: {
		type: Boolean,
	},
	description: {
		type: String,
		required: true,
	},
	categoryId: {
		type: ObjectId,
		ref: "Category",
	},
	imageId: [
		{
			type: ObjectId,
			ref: 'Image',
		},
	],
	featureId: [
		{
			type: ObjectId,
			ref: 'Feature',
		},
	],
	activityId: [
		{
			type: ObjectId,
			ref: 'Activity',
		},
	],
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date
	}
});

const model = mongoose.model('Item', itemSchema);

module.exports = model;
