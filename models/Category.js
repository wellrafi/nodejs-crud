const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date
	}
})

const model = mongoose.model('Category', categorySchema);

module.exports = model;