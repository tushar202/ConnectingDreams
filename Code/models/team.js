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
    proposalLink: {
        type: String,
        default: '',
    },
  
});

const Team = mongoose.model('Team', TeamSchema);
module.exports = Team