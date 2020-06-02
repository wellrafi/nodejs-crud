const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = Schema({
    imageUrl: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Image', imageSchema);

module.exports = model;