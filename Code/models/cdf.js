const mongoose = require('mongoose');

const CDFSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    pdf_link : [{
        proposalLink:String,
        fileName:String
     }],
    // TimeLine Structure 
    application_start_date: {
        type: Date,
        required: false,
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
    dream_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'dream',

    },
    sio_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
    
},{timestamps:true});

const CDF = mongoose.model('CDF',CDFSchema);
module.exports = CDF;