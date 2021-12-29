const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required:true,
    },
    firstname: {
        type: String,
        required:true
    },
    photo: {
        type: String,
        required:true
    },   
    email: {
        type: String,
        required:true
    },    
    password: {
        type: String,
        required:true
    },
    active: {
        type: Boolean,
    },
    phone: {
        type: String,
    },
    pseudo: {
        type: String
    },
    punchline: {
        type: String
    },
    bio: {
        type:String
    },
    city: {
        type:String
    },
    travail_petit: {
        type:String
    },
    travail_futur: {
        type:String
    },
    genre: {
        type:Array
    },
    love: {
        type:String
    },   
    passion: {
        type:Array
    },
    passion_image: {
        type:String
    },
    passion_audio: {
        type:String
    },
    passion_video: {
        type:String
    },
    art: {
        type:String
    },
    interets: {
        type:String
    },
    qqch_plus: {
        type:String
    },
    bests: {
        type:Array
    },
    connaissances: {
        type:Array
    },
    vetements: {
        type:String
    },
    tattoo: {
        type:String
    },
    piercing: {
        type:String
    },
    style_futur: {
        type:String
    },
    politics_tags: {
        type:Array
    },
    politics: {
        type:String
    },
    religion_tags: {
        type:Array
    },
    religion: {
        type:String
    },
    morale_tags: {
        type:String
    },
    morale: {
        type:String
    },
    message_shared: {
        type:String
    },
    life_moment: {
        type:String
    },
    travels: {
        type:Array
    },
    life_moments: {
        type:String
    },
    prud_moments: {
        type:String
    },
    challenge_futur: {
        type:Array
    },
    friends: {
        type:Array
    }
    
    
},{ timestamps:true });

const User = mongoose.model('User', userSchema);
module.exports = User;
