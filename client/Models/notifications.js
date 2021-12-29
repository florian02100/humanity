const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notifSchema = new Schema({

    notif_content: {
        type: String,
        required:true
    },
    notif_profile:{
        type: String,
        required:true
    },
    notif_profile_link:{
        type: String,
        required:true
    },
    notif_link:{
        type: String
    }
    
},{ timestamps:true });

const Notif = mongoose.model('Notif', notifSchema);
module.exports = Notif;