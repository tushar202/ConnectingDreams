const mongoose = require('mongoose');

const CDFSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    pdf_link : {
        type: String,
        required: true,
    },
    // TimeLine Structure 
    application_start_date: {
        type: Date,
        required: true,
    },
    application_end_date: {
        type: Date,
        required: false,
    },
    selection_process_result: {
        type: Date,
        required: false,
    },
    implementation_start: {
        type: Date,
        required: false,
    },
    implementation_end: {
        type: Date,
        required: false,
    },
    instructions: {
        type: String,
        required: false,
    },
    tags : [{
        type: String
    }],
    location: {
        type: String,
        required: false,
    },
    
},{timestamps:true});

const CDF = mongoose.model('CDF',CDFSchema);
module.exports = CDF;