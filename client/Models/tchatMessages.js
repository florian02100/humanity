const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tchatSchema = new Schema({

    message: {
        type: String,
        required:true
    },
    userPhoto:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    date_exp:{
        type: String
    },
    link_profile:{
        type: String,
        required:true
    },
    sent_by:{
        type: String,
        required:true
    },
    
},{ timestamps:true });

const Tchat = mongoose.model('Tchat', tchatSchema);
module.exports = Tchat;