const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    cateName: {
        type: String,
        required: true,
        unique: true
    },
    cateDescription: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Category = mongoose.model('Category', CategorySchema);