const mongoose = require('mongoose');


const DreamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    titleOfDream: {
        type: String,
        required: true
    },
    drive: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps:true})


const Dream = mongoose.model('Dream', DreamSchema);
module.exports = Dream