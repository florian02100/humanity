const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 9000
const app = express()
const path = require('path');

const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');


//Permet d'activer HTTPS
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('host.key', 'utf8');
var certificate = fs.readFileSync('host.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//Permet de crypter les données
var bcrypt = require('bcrypt');


//Permet l'envoi de mail
var nodemailer = require('nodemailer');

//Permet de faire un upload des fichiers
const fileUpload = require('express-fileupload');

//Permet de créer une vignette en rapport avec des liens 
const puppeteer = require('puppeteer');

//Import de models MongoDB
const User = require('./client/Models/user')
const Tag = require('./client/Models/tags')
const Post = require('./client/Models/posts')
const notif = require('./client/Models/notifications')
const friend = require('./client/Models/friends')
const Tchat = require('./client/Models/tchatMessages')
const Wall = require('./client/Models/cardsWall')
const Vote = require('./client/Models/cardsVote')

//Variables database 
const mongoose = require('mongoose');
const dbURI = 'mongodb://identity-0001:30121991@cluster0-shard-00-00.129oo.mongodb.net:27017,cluster0-shard-00-01.129oo.mongodb.net:27017,cluster0-shard-00-02.129oo.mongodb.net:27017/Identity?ssl=true&replicaSet=atlas-tn62yy-shard-0&authSource=admin&retryWrites=true&w=majority';
const Schema = mongoose.Schema;

//Variable utilisateur
var userId = '';
var sessionstorage = require('sessionstorage');

//Connexion à la base de donnee
mongoose.connect(dbURI, { useNewUrlParser:true , useUnifiedTopology:true })
    .then((result) => httpsServer.listen(PORT, () => { console.log(`le serveur est lancé sur le port : ${PORT}`)}))
    .catch((err)=> console.log(err))


//Use module in backend 
app.use(express.urlencoded());
app.use(express.json())
app.use(express.static("client/build"))
app.use(express.static(__dirname+'/public'))
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/identity', (req,res)=> {
    res.send({
        msg: 'Hello'
    })
})

//Fonctions d'envoi de mail 
function sendMailNewUser(emailAddress){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'f.dordain02100@gmail.com',
          pass: 'lnlkucwjueuycppa'
        }
      });
      
      var mailOptions = {
        from: 'f.dordain02100@gmail.com',
        to: emailAddress,
        subject: 'Sending Email using Node.js',
        html: '<b>Hello Florian</b><p> it s mail 2.</p>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

//Envoi email 

app.post('/sendEmail', async (req, res) => {
    sendMailNewUser('f.dordain02100@gmail.com')
    res.setHeader("Content-Type", "text/html");
    res.redirect('/')
})

//Routage du frontend 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/Login', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/Tchat', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/Explorer', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/UserProfile', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/Profil/General', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/subscriptions', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
app.get('/dashboard', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//CRUD MongoDB 
//--------------------------------------------------------------------------------------------------------------

app.post('/user/search', async (req, res) => {


    console.log(req.body.email);

    const query  = User.where({ email: req.body.email });
    query.findOne(function (err, user) {
    if (err) return handleError(err);
    
    if (user) {
        // doc may be null if no document matched
        const query  = User.where({ email: req.body.email });

        query.findOne()
        .then((result) =>{
            //userId = result.id;
            res.setHeader("Content-Type", "text/html");
            res.redirect('/')
        })

    }else{
        res.redirect('/Subscriptions?name='+req.body.name+'&mail='+req.body.email+'&url='+req.body.image);
        res.end();
    }
    });

});

app.post('/user/login', async (req, res) => {

    console.log('email : '+req.body.email+' '+req.body.password)

    if(req.body.email != '' && req.body.password != ''){
        const query  = User.where({ email: req.body.email });

        await query.findOne()
        .then((result) =>{
            //userId = result.id;
            bcrypt.compare(req.body.password,result.password)
            .then((Compresult) => {
                console.log('user connected');
                if(Compresult){
                    res.setHeader("Content-Type", "text/html");
                    console.log(result);
                    res.send(result);
                }else{
                    res.status(400).send('Mot de passe incorrect')
                }
            })
        })
    }
});

app.post('/addUser', async (req, res) => {

    console.log("New user ....");   
    console.log(req.body);

    const UserName = req.body.name;
    const UserFirstname = req.body.firstname;
    const UserMail = req.body.mail;
    const UserPhone = req.body.phone;
    const UserPassword1 = req.body.pass1;
    const UserPassword2 = req.body.pass2;
    let hashedPassword = ''

    if(UserPassword1 === UserPassword2){
        //Cryptage du mot de passe 
        try{
        
        //const salt = bcrypt.genSalt();
        await bcrypt.hash(req.body.pass1,10)
        .then((result) => {
            hashedPassword = result;
        })
        
        console.log(hashedPassword);
       
        const newUser = new User({
            name:UserName,
            firstname:UserFirstname,
            email:UserMail,
            phone:UserPhone,
            password:hashedPassword,
            active:false,
            pseudo: '',
            punchline: '',
            bio: '',
            city: '',
            travail_petit: '',
            travail_futur: '',
            genre: '',
            love: '',   
            passion: '',
            passion_image: '',
            passion_audio: '',
            passion_video: '',
            art: '',
            interets: '',
            qqch_plus: '',
            bests: '',
            connaissances: '',
            vetements: '',
            tattoo: '',
            piercing: '',
            style_futur: '',
            politics_tags: '',
            politics: '',
            religion_tags: '',
            religion: '',
            morale_tags: '',
            morale: '',
            message_shared: '',
            life_moment: '',
            travels: '',
            life_moments: '',
            prud_moments: '',
            challenge_futur: '',
            color:'',
            profile_photo:'',
            website:'',
            data_protect:'',
            facebook:'',
            instagram:'',
            youtube:'',
            linkedin:''
        });

        try {
            await newUser.save( (err, newUserResults) => {
                if (err) res.end('Error Saving.');
                console.log(err);
               // execute(sendMailNewUser(UserMail));
                res.redirect('/');
                res.end();
            });
        } catch(err) {
            console.log(err);
            res.end();
        }
    }
    catch(err) {
        console.log(err);
        res.end();
    }
    }else{
        res.status(400).send('Password incorrect');
    }
});


app.post('/activeUser', async (req,res) => {

    console.log('user id : ')
    console.log('query response : '+req.body.uid)

    const UID = req.body.uid;

     User.findById(UID)
    .then((result) => {
        console.log(result.firstname)
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
        res.send('')
    });
})

app.post('/activeUserFriend', async (req,res) => {

    console.log('user id : ')
    console.log('query response friend : '+req.body.uid)

    let arrFriends =['']
    const UID = req.body.uid;

     User.findById(UID)
    .then((result) => {

        console.log(result)
        res.send(result)
        
       /* data.map((element,index) => {
            User.findById(element)
            .then((resFr) =>{
                console.log('result friend : '+resFr)
                //remplir un tableau de friend et l'envoyer dans le res après 
                arrFriends.push(resFr)
            })
        })*/


    })
    .catch((err) => {
        console.log(err)
        res.send('')
    });
})

app.get('/allUser', async (req,res) => {

   /* ------------------------------------
    Creation de vignette de lien 
   ---------------------------------------
   const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'pupeteer_google.png' });
  
    await browser.close();*/

    User.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------
//UPDATES du profil USER
//Il y a plusieurs updates faites selon les forms du profil user 

//UPDATE FRIEND

app.post('/addFriend', async (req,res) => {

    console.log("new friend added !" + req.body.fid);
    var arrFriend = []

    const query  = User.where({ _id: req.body.uid });
    query.findOne(function (err, user) {
    if (err) return handleError(err);
    
    if (user) {
        // doc may be null if no document matched
        const query  = User.where({ _id: req.body.uid });

        query.findOne()
        .then((result) =>{

            arrFriend = result.friends;
            const filter = { _id: req.body.uid };

            arrFriend.push(req.body.fid)

            const update = { 
                friends: arrFriend
            }
            
            User.findOneAndUpdate(filter, update)
                .then((result) => {
                    //res.send(result)
                })
                .catch((err) => {
                    console.log(err)
                });
        })

    }else{
        res.redirect('/Subscriptions?name='+req.body.name+'&mail='+req.body.email+'&url='+req.body.image);
        res.end();
    }
    })
})

    
//UPDATE MAIN PROFILE

app.post('/updateMainProfile', (req,res) => {

    const filter = { id: req.body.UserProfileID };

    if(req.files.ProfilePhoto){
            /*const PostMedia = req.body.media;*/
            let ProfileImg = req.files.ProfilePhoto;
    
            let uploadPhoto = '/profil/'+req.body.UserProfileID+'.jpg' ;
    
        
            // Use the mv() method to place the file somewhere on your server
            ProfileImg.mv('public/' + uploadPhoto, function(err) {
        
            });
        
        
    
    const update = { 
        name: req.body.ProfileName,
        firstname : req.body.ProfileFirstname,
        punchline : req.body.ProfilePunchline,
        photo: uploadPhoto
    };
    
    User.findOneAndUpdate(filter, update)
        .then((result) => {
            console.log('founded and updated');
            res.redirect('/Profil/General')
        })
        .catch((err) => {
            console.log(err)
        });
    }
})


//UPDATE GENERAL

app.post('/updateUserGen', (req,res) => {

const filter = { id: userId };

console.log(req.body.genre);

const update = { 
    bio: req.body.bio, 
    city:req.body.city,
    travail_petit:req.body.travail_petit,
    travail_futur:req.body.travail_futur,
    genre: req.body.genre,
    love: req.body.love,
    passion: req.body.passion,
    passion_image: req.body.passion_image,
    art: req.body.art,
    qqch_plus: req.body.qqch_plus
};

User.findOneAndUpdate(filter, update)
    .then((result) => {
        res.redirect('/Profil')
    })
    .catch((err) => {
        console.log(err)
    });
})


//UPDATE STYLE

app.post('/updateUserStyle', (req,res) => {

    const filter = { name: 'Dordain' };
    
    console.log(req.body);

    const update = { 
        piercing: req.body.piercing,
        tattoo: req.body.tattoo,
        vetements: req.body.vetements,
        style_futur: req.body.style_futur
    };
    
    
    User.findOneAndUpdate(filter, update)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    })


//UPDATE CONVICTIONS

app.post('/updateUserConv', (req,res) => {

    const filter = { name: 'Dordain' };
    
    const update = { 
        politics: req.body.politics,
        religion: req.body.religion,
        morale: req.body.morale
    };
    
    
    User.findOneAndUpdate(filter, update)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    })

//UPDATE EXPERIENCE

app.post('/updateUserExpe', (req,res) => {

    const filter = { name: 'Dordain' };
    
    console.log(req.body);

    const update = { 
        message_shared:req.body.message_shared,
        life_moment: req.body.life_moment,
        travels : req.body.travels,
        life_moments: req.body.life_moments,
        prud_moments: req.body.prud_moments,
        challenge_futur: req.body.challenge_futur
    };
    
    
    User.findOneAndUpdate(filter, update)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    })

//UPDATE PARAMETRES

app.post('/updateUserParam', (req,res) => {

    const filter = { name: 'Dordain' };

    console.log(req.body);

    
    const update = { 
        color: req.body.color,
        profile_photo: req.body.profile_photo,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website ,
        data_protect: req.body.data_protect,
        facebook: req.body.facebook,
        youtube: req.body.youtube,
        instagram: req.body.instagram,
        linkedin: req.body.linkedin,
    };
    
    
    User.findOneAndUpdate(filter, update)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
    })
//---------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------
//TAG
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW TAG
//--------------------------------------------------------------------------------------------------------------

app.post('/searchTag', async (req, res) => {


    console.log(req.body.in);
    const regex = new RegExp(req.body.in, 'i') 

    Tag.find({ 'tag': { $regex: regex}})
    .then((result) =>{
        console.log('res : '+result);
        res.send(result);
       /* res.setHeader("Content-Type", "text/html");
        res.redirect('/')*/
    });

});

app.post('/add-tag', async (req, res) => {
    
    const tagName = req.body.tagName;
    const tagColor = req.body.tagColor;

    console.log('tag : '+tagName+' '+tagColor)
    console.log(req.files);


        /*const PostMedia = req.body.media;*/
        let TagImg = req.files.tagIcon;
    
        let uploadPath = '/tag_icon/'+ TagImg.name;

    
        // Use the mv() method to place the file somewhere on your server
        TagImg.mv('public/' + uploadPath, function(err) {
    
        });
    

    const newTag = new Tag({
        tag:tagName,
        icon:uploadPath,
        color:tagColor
    });

    try {
        await newTag.save( (err, newTagResults) => {
            if (err) res.end('Error Saving.');
            /*res.redirect('/all-tag');*/
            res.end();
        });
    } catch(err) {
        console.log('erreur');
        console.log(err);
        /*res.redirect('/all-tag');*/
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ TAG
//--------------------------------------------------------------------------------------------------------------


app.get('/all-tag', (req,res) => {
    Tag.find()
    .then((result) => {
        console.log('all tag '+result)
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE TAG
//--------------------------------------------------------------------------------------------------------------


app.get('/read-tag', (req,res) => {
    const tagName = req.body.tagname;
    Tag.findOne({tag:tagName})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE TAG
//--------------------------------------------------------------------------------------------------------------

app.get('/update-tag', (req,res) => {
    const tagName = req.body.tagname;
    const tagIcon = req.body.icon;

    Tag.update({name:tagName},{name:tagName,icon:tagIcon})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// DELETE TAG
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-tag', (req,res) => {

    const tagName = req.body.tagname;
    const tag = Tag;
    
    Tag.remove({tag:tagName})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------
//Post
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW Post
//--------------------------------------------------------------------------------------------------------------


app.post('/addPost', async (req, res) => {

    console.log("i'm here");

    let uploadPath;  
   
    const PostContent = req.body.post_content;
    console.log(req.body);
    console.log(req.files);

    /*const PostMedia = req.body.media;*/
    let PostMedia = req.files.media;
    const PostLike = 0;
    const PostProfile = req.body.profile;
    const PostProfileLink = req.body.profile_link;
    const PostComment = req.body.comment;

    uploadPath = '/img/'+ PostMedia.name;

    // Use the mv() method to place the file somewhere on your server
    PostMedia.mv('public/' + uploadPath, function(err) {

    });

    const newPost = new Post({
        post_content:PostContent,
        post_media:uploadPath,
        post_like:PostLike,
        post_profile:PostProfile,
        post_profile_link:PostProfileLink,
        post_comment:PostComment
    });

    try {
        await newPost.save( (err, newPostResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ Post
//--------------------------------------------------------------------------------------------------------------


app.get('/all-Post', (req,res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE Post
//--------------------------------------------------------------------------------------------------------------


app.get('/read-Post', (req,res) => {
    const PostName = req.body.Postname;
    Post.findOne({Post:PostName})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE Post
//--------------------------------------------------------------------------------------------------------------

app.get('/update-Post', (req,res) => {

    const PostContent = req.body.content;
    const PostMedia = req.body.media;
    const PostLike = req.body.like;
    const PostProfile = req.body.profile;
    const PostProfileLink = req.body.profile_link;
    const PostComment = req.body.comment;

    Post.update({post_content:PostContent},{
        post_content:PostContent,
        post_media:PostMedia,
        post_like:PostLike,
        post_profile:PostProfile,
        post_profile_link:PostProfileLink,
        post_comment:PostComment
    })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// DELETE Post
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-Post', (req,res) => {

    const PostName = req.body.Postname;
    const Post = Post;
    
    Post.remove({Post:PostName})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//Tchat
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW Tchat
//--------------------------------------------------------------------------------------------------------------


app.post('/newMessage', async (req, res) => {


    console.log('newMessage')
    const TchatMessage = req.body.message;
    const TchatPhoto = 'hahah';
    const TchatDate = '30/12';
    const TchatDateExp = '';
    const TchatProfile = req.body.linkid;
    const TchatSentBy = req.body.convid;

    console.log('newMessage : '+TchatMessage+' '+TchatProfile)

    const newTchat = new Tchat({
        message:TchatMessage,
        userPhoto:TchatPhoto,
        date:TchatDate,
        date_exp:TchatDateExp,
        link_profile:TchatProfile,
        sent_by:TchatSentBy
    });

    try {
        await newTchat.save( (err, newTchatResults) => {
            if (err) res.end('Error Saving.' + err);
            res.redirect('/Tchat');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/Tchat');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ Tchat
//--------------------------------------------------------------------------------------------------------------


app.post('/all-Tchat', async (req,res) => {

    const query  = Tchat.where({ link_profile:req.body.uid });

    await query.find()
    .then((result) => {
        console.log('Query Tchat : '+result)
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE Tchat
//--------------------------------------------------------------------------------------------------------------


app.get('/read-Tchat', async (req,res) => {

    const query  = Tchat.where({ link_profile:req.body.uid });

    await query.findOne()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE Tchat
//--------------------------------------------------------------------------------------------------------------

app.get('/update-Tchat', (req,res) => {
    
})

//--------------------------------------------------------------------------------------------------------------
// DELETE Tchat
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-Tchat', (req,res) => {

    const TchatId = req.body.id;
    const Tchat = Tchat;
    
    Tchat.remove({Tchat:TchatId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//notif
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW notif
//--------------------------------------------------------------------------------------------------------------


app.post('/add-notif', async (req, res) => {

    const notifContent = req.body.content;
    const notifProfile = req.body.profile;
    const notifProfileLink = req.body.profile_link;
    const notifLink = req.body.link;

    const notif = notif;

    const newnotif = new notif({
        notif_content:notifContent,
        notif_profile:notifProfile,
        notif_profile_link:notifProfileLink,
        notif_link:notifLink
    });

    try {
        await newnotif.save( (err, newnotifResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/notif');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/notif');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ notif
//--------------------------------------------------------------------------------------------------------------


app.get('/all-notif', (req,res) => {
    notif.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE notif
//--------------------------------------------------------------------------------------------------------------


app.get('/read-notif', (req,res) => {
    const notifId = req.body.id;
    notif.findOne({notif:notifId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE notif
//--------------------------------------------------------------------------------------------------------------

app.get('/update-notif', (req,res) => {
    
})

//--------------------------------------------------------------------------------------------------------------
// DELETE notif
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-notif', (req,res) => {

    const notifId = req.body.id;
    const notif = notif;
    
    notif.remove({notif:notifId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//friends
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW friends
//--------------------------------------------------------------------------------------------------------------

app.post('/add-friends', async (req, res) => {

    const friendsFirstname = req.body.firstname;
    const friendsName = req.body.name;
    const friendsPhoto = req.body.content;
    const friendsPunchline = req.body.profile;
    const friendsTags = req.body.profile_link;
    const friendsBest = req.body.link;

    const friend = friend;

    const newfriends = new friends({
        friend_firstname:friendsFirstname,
        friend_name:friendsName,
        friend_photo:friendsPhoto,
        friend_punchline:friendsPunchline,
        friend_tags:friendsTags,
        friend_best:friendsBest
    });

    try {
        await newfriends.save( (err, newfriendsResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/friends');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/friends');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ friends
//--------------------------------------------------------------------------------------------------------------


app.get('/all-friends', (req,res) => {
    friend.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE friends
//--------------------------------------------------------------------------------------------------------------


app.get('/read-friends', (req,res) => {
    const friendsId = req.body.id;
    friend.findOne({id:friendsId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE friends
//--------------------------------------------------------------------------------------------------------------

app.get('/update-friends', (req,res) => {
    
})

//--------------------------------------------------------------------------------------------------------------
// DELETE friends
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-friends', (req,res) => {

    const friendsId = req.body.id;
    const friend = friend;
    
    friend.remove({id:friendsId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//cardWall
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW cardWall
//--------------------------------------------------------------------------------------------------------------

app.post('/add-cardWall', async (req, res) => {

    const cardWallIcon= req.body.firstname;
    const cardWallContent = req.body.name;
    const cardWallTags = req.body.content;
    const cardWallProfileLink = req.body.profile;

    const cardWall = Wall;

    const newcardWall = new Wall({
            wall_icon:cardWallIcon,
            wall_content:cardWallContent,
            wall_tags:cardWallTags,
            wall_profile_link:cardWallProfileLink
    });

    try {
        await newcardWall.save( (err, newcardWallResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/cardWall');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/cardWall');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ cardWall
//--------------------------------------------------------------------------------------------------------------


app.get('/all-cardWall', (req,res) => {
    Wall.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE cardWall
//--------------------------------------------------------------------------------------------------------------


app.get('/read-cardWall', (req,res) => {
    const cardWallId = req.body.id;
    Wall.findOne({id:cardWallId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE cardWall
//--------------------------------------------------------------------------------------------------------------

app.get('/update-cardWall', (req,res) => {
    
})

//--------------------------------------------------------------------------------------------------------------
// DELETE cardWall
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-cardWall', (req,res) => {

})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------
//cardVote
//--------------------------------------------------------------------------------------------------------------
// CREATE NEW cardVote
//--------------------------------------------------------------------------------------------------------------

app.post('/add-cardVote', async (req, res) => {

    vote_icon
    vote_content_link
    vote_tags
    vote_profil_link
    vote_result

    const cardVoteIcon= req.body.firstname;
    const cardVoteContent = req.body.name;
    const cardVoteTags = req.body.content;
    const cardVoteProfileLink = req.body.profile;
    const cardVoteResult = req.body.result;

    const newcardVote = new Vote({
            vote_icon:cardVoteIcon,
            vote_content:cardVoteContent,
            vote_tags:cardVoteTags,
            vote_profile_link:cardVoteProfileLink,
            vote_result:cardVoteResult
    });

    try {
        await newcardVote.save( (err, newcardVoteResults) => {
            if (err) res.end('Error Saving.');
            res.redirect('/cardVote');
            res.end();
        });
    } catch(err) {
        console.log(err);
        res.redirect('/cardVote');
        res.end();
    }
});

//--------------------------------------------------------------------------------------------------------------
// READ cardVote
//--------------------------------------------------------------------------------------------------------------


app.get('/all-cardVote', (req,res) => {
    Vote.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// READ ONE cardVote
//--------------------------------------------------------------------------------------------------------------


app.get('/read-cardVote', (req,res) => {
    const cardVoteId = req.body.id;
    Vote.findOne({id:cardVoteId})
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    });
})

//--------------------------------------------------------------------------------------------------------------
// UPDATE cardVote
//--------------------------------------------------------------------------------------------------------------

app.get('/update-cardVote', (req,res) => {
    
})

//--------------------------------------------------------------------------------------------------------------
// DELETE cardVote
//--------------------------------------------------------------------------------------------------------------

app.get('/delete-cardVote', (req,res) => {

})