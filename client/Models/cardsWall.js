const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wallSchema = new Schema({

    wall_icon: {
        type: String,
        required:true
    },
    wall_content:{
        type: String,
        required:true
    },
    wall_tags:{
        type: Array,
        required:true
    },
    wall_profil_link:{
        type: String,
        required:true
    }
    
},{ timestamps:true });

const Wall = mongoose.model('Wall', wallSchema);
module.exports = Wall;