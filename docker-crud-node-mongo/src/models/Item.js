const mongoose = require('mongoose');

const Item_model = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Item_model', Item_model);
