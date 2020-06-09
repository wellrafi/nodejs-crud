const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let memberSchema = Schema({
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

memberSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified(password)) {
		user.password = await bcrypt.hash(user.password, 12);
	}
})

const model = mongoose.model('Member', memberSchema);

module.exports = model;
