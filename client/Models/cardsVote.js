const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({

    vote_icon: {
        type: String,
        required:true
    },
    vote_content:{
        type: String,
        required:true
    },
    vote_tags:{
        type: Array,
        required:true
    },
    vote_profil_link:{
        type: String,
        required:true
    },
    vote_result:{
        type: Array,
        require: true
    }
    
},{ timestamps:true });

const Vote = mongoose.model('Vote', voteSchema);
module.exports = Vote;