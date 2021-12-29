const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({

    tag: {
        type: String,
        required:true
    },
    icon:{
        type: String
    },
    color:{
        type: String
    }
    
},{ timestamps:true });

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;