const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'category'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Product = mongoose.model('Product', ProductSchema);