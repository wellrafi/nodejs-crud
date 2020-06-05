const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema;

const bookingSchema = Schema({
	bookingStartDate: {
		type: Date,
		required: true,
	},
	bookingEndDate: {
		type: Date,
		required: true,
	},
	itemId: [
		{
			_id: {
				type: ObjectId,
				ref: 'Item',
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
			night: {
				type: Number,
				required: true,
			},
		},
	],
	memberId: [
		{
			type: ObjectId,
			ref: 'Member',
		},
	],
	bankId: [
		{
			type: ObjectId,
			ref: 'Bank',
		},
	],
	proofPayment: {
		type: String,
		required: true,
	},
	bankFrom: {
		type: String,
		required: true,
	},
	accountHolder: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		require: true,
	},
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date
	}
});

const model = mongoose.model('Booking', bookingSchema);

module.exports = model;
