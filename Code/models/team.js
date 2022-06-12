const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    tname: {
        type: String,
        default: '',
    },
    size: {
        type: Number,
        default: '',
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    cdf_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CDF',
        required: true
    },
    selected:{
        type:Boolean,
        default:false,
    },
    proposalLink: [{
       proposalLink:String,
       fileName:String
    }]
    
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team