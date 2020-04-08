const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodName: {
        type: String,
        required: true,
        unique: true
    },
    prodDescription: {
        type: String
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Product = mongoose.model('Product', ProductSchema);