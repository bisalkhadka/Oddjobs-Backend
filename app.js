const express = require('express');
const cors = require('cors');
const fs= require('fs')
const bodyParser = require('body-parser');
const auth = require('./middleware/auth');
const mongoose = require('./db/database');

const path = require('path');
const app = express();
const async=require('async'); 

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

const User = require('./model/User');
const Contact=require("./model/Contact");


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

// ------------------------------------------------

app.get('/users', function (req, res) {
    User.find().then(function (user) {
        res.send(user);
    }).catch(function (e) {
        res.send(e)
    });

});

// -----------------------------------

// login 
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


// To post contact message 

app.post('/contact', (req, res) => {
    console.log(req.body);
    var mydata = new Contact(req.body);
    mydata.save().then(function (data) {
        //alert(Success)
        res.send(data);
 }).catch(function (e) {
      res.send(e);
    

    });
});




// ============================================//===========================================================




//  To view contact details

app.get('/contactdetails', function (req, res) {
    Contact.find().then(function (Contact) {
        res.send(Contact);
    }).catch(function (e) {
        res.send(e) 
    });

});


app.listen(1111);