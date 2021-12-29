const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    post_content: {
        type: String,
        required:true
    },
    post_media:{
        type: String
    },
    post_like:{
        type: Number
    },
    post_profile:{
        type: String,
        required:true
    },
    post_profile_link:{
        type: String,
        required:true
    },
    post_comment:{
        type: Array
    }
    
},{ timestamps:true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;