const express = require('express');
const cors = require('cors');
const fs= require('fs')
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const mongoose = require('./db/database');
const multer = require('multer');
const path = require('path');
const app = express();
const async=require('async'); 
app.use(cors());
app.use(express.static(path.join(__dirname,'JobsImages')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
const User = require('./model/User');
const Contact=require("./model/Contact");
const Addjob=require("./model/Addjob");
const CV=require("./model/CV");
const Rate=require("./model/Rate")
const Comment=require("./model/Comment");
const middleware = require('./middleware/middleware');
 require('./db/database');

 app.get("/test11", middleware, function(req, res){
    console.log("this should load after the middleware");
    })
app.use(bodyParser.urlencoded({ extended: false }));



// -------------------------------------------------------

// -register a user 

app.post('/register', (req, res) => {
    console.log(req.body);
    var mydata = new User(req.body);
    mydata.save().then(function (data) {
        // console.log(maadey);
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    

    });
});

// -------------------//==============---------------------------------//
// ==============To view users by admin===============================//
app.get('/users', function (req, res) {
    User.find().then(function (user) {
        res.send(user);
    }).catch(function (e) {
        res.send(e)
    });

});

// ================================//=============================////===============//

// ==========To delete users by admin=====================//=============================//


app.delete('/userdelete/:id',function(req,res){
    uid=req.params.id.toString();
    User.findByIdAndDelete(uid).then(function(){
        res.send({message:"success"})
    })
  })


//============================//=========To login to the system=============================//
app.post('/login', async function(req, res){

    const user = await User.checkCrediantialsDb(req.body.Email,req.body.Password)
    
    if(user != null){
        const token = await user.generateAuthToken()
        console.log(token)
    
        res.send({token:token,
    userdata:user}) 
    }
    else{
        res.send(user)
    }
   })

   app.get('/user/me',auth,function(req,res)
   {  
       res.send(req.user);
   })

// ------------------------------------------------



// -------------To update user profile------------------------//

app.put('/profileupdate',auth, function (req, res) {   //update product
    User.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, notes) => {
      res.send("succesfull");
    });
  });

//   ================================//===============//==================================================//

// To post contact message 
app.post('/contact', (req, res) => {
    var mydata = new Contact(req.body);
    mydata.save().then(function (data) {
        //alert(Success)
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    });});
// ============================================//===========================================================
//  To view contact details to admin
app.get('/contactdetails', function (req, res) {
    Contact.find().then(function (Contact) {
        res.send(Contact);
    }).catch(function (e) {
        res.send(e) 
    });});
// ===================To delete contacts by admin===============//=/===========================//
app.delete('/contactdelete/:id',function(req,res){
    uid=req.params.id.toString();
    Contact.findByIdAndDelete(uid).then(function(){
        res.send({message:"success"})
    })
  })
// =================//========================//=================================//====================//
// To post job by user

app.post('/addjobs', (req, res) => {
    var mydata = new Addjob(req.body);
    mydata.save().then(function (data) {
        //alert(Success)
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    

    });
});

// =================================//========================================//==============================//

// ========================//=========To show jobs to user ==================================================//

app.get('/showjobs', function (req, res) {
    Addjob.find().then(function (Addjob) {
        res.send(Addjob);
    }).catch(function (e) {
        res.send(e)
    });

});

// ===============================///================================================//==========================//


// ====================//=================To show job details by id to user============================================//
app.get('/jobdetails/:id', function (req, res) {
    uid=req.params.id.toString();
    Addjob.find({_id:uid}).then(function (addjob) {
        res.json({
            add:addjob.map(add=>{
                return{
                    _id:add._id,
                    Title:add.Title, 
                    Description:add.Description,  
                    Category:add.Category,  
                    Type:add.Type,
                    Location:add.Location,
                    Latitude:add.Latitude,
                    Longitude:add.Longitude,
                    JobDt:add.JobDt,
                    Email:add.Email,    
                    userid:add.userid,
                    fileToUpload:add.fileToUpload
                }
            })
        });
    }).catch(function (e) {                        
        res.send(e)
    });});

// ===============//================================//===========================//==========================//

//  To show job details to admin 

app.get('/addjobs', function (req, res) {
    Addjob.find().then(function (Addjob) {
        res.send(Addjob);
    }).catch(function (e) {
        res.send(e)
    });

});
// ========================================//===================================//=============================================

// =============//=========To delete job details by admin===========================================//
app.delete('/jobdelete/:id',function(req,res){
    uid=req.params.id.toString();
    Addjob.findByIdAndDelete(uid).then(function(){
        res.send({message:"success"})
    })
  })


//----------------------approval

app.post('/approvejobs/:id',function(req,res){
    uid=req.params.id.toString();
    Addjob.findByIdAndUpdate(uid,{$set:{status:"approved"}}).then(function(){
        res.send({message:"success"})
    })
  })




// =========================//=================================//=============================================//

//  To upload image

var storage = multer.diskStorage({
    destination: 'JobsImages',
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, 'Addjob' + Date.now() + ext);
    }
});


var imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|PNG|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 1000000 }
});

    app.post('/uploadImg', upload.single('imageFile'), (req, res) => {
       res.send(req.file)
    });


// ============================//=========================================//===============================//

//  logout 

app.post('/users/logout', auth, async (req, res) => {
    try {
        console.log( req.user.tokens);
    req.user.tokens = req.user.tokens.filter((token) => {
    return token.token !== req.token
    })
    await req.user.save()
    res.send()
    } catch (e) {
    res.status(500).send()
    }
   }) 



    // ==================To view CV send by user with details ================================================//

   app.get('/cv/:id', function (req, res) {
    uid=req.params.id.toString();
    CV.find({_id:uid}).then(function (cv) {
        console.log(cv)
        res.json({
            cov:cv.map(cov=>{
                return{
                   
                    fileToUpload:cov.fileToUpload
                       
                }
            })
        });
    }).catch(function (e) {                        
        res.send(e)
    });
});

    // =====================================//=================================//=======================//
// ====================To add cv along with other information===========================//

app.post('/addcv', (req, res) => {
    var mydata = new CV(req.body);
    mydata.save().then(function (data) {
        //alert(Success)
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    

    });
});

// =========================//===============================//================================//

    app.get('/cv', function (req, res) {
        CV.find()
        .populate('jid')
        .exec() 
        .then(function (cv) {
     res.send(cv)
           }
        ).catch(function (e) {
            res.send(e)
        });
    
    });

///applly job


//------------------rate job--------------------//
app.post('/jobrating', auth, function (req, res) {
   Rate.findOne({ jid: req.body.jid, userid: req.body.userid }).then(function (rate) {
      
      if (rate) {
      rates=req.body.rating;
        Rate.updateOne({ jid: req.body.jid, userid: req.body.userid }, { $set: { rating:rates} }).then(function () {
          res.send('update');
          console.log('update');
        })
      } else {
  console.log('asfd')
        data = {
          'jid': req.body.jid,
          'userid': req.body.userid,
          'rating': req.body.rating
        }
        const ratejob = new Rate(data);
        ratejob.save().then(function () {
          res.send('success');
        })
      }
    })
  });
  //==============
  // Comment
  app.post('/comments',(req,res)=>{
      const comment=new Comment(req.body);
      comment.save().then(function () {
        res.json(comment);
      });
    // Comment.find({JobID: req.params.id},function(err,comment){
    //   if (err) return callback(err);
    //   res.json(comment);
    // });
  });
  app.get('/jobreview/:id', (req, res) => {
      Comment.find({JobID: req.params.id})
      .populate('User')
      .exec()
      .then(function(docs){
          res.send(docs);
      })
      
    });    

app.listen(1111);