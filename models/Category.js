const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.exports = Category = mongoose.model('Category', CategorySchema);