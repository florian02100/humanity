const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({

    friend_firstname: {
        type: String,
        required:true
    },
    friend_name: {
        type: String,
        required:true
    },
    friend_photo: {
        type: String,
        required:true
    },
    friend_punchline:{
        type: String,
        required:true
    },
    friend_tags:{
        type: Array,
        required:true
    },
    friend_best:{
        type: Boolean,
        required:true
    }
    
},{ timestamps:true });

const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;