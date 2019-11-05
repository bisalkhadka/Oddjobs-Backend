const mongoose = require('mongoose');
const CVSchema = new mongoose.Schema({
    Username: { // column name
        type: String   //data type String
    },
    Email: { // column name
        type: String   //data type String
    },
    Education:{
        type:String
    },
    Qualifications: { // column name
        type: String   //data type String
    },
    Experience:{
        type:String
    },
    jid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Addjob',
        required: true
     },
     userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
     }  
})
          
const CV= mongoose.model('CV',CVSchema)  
module.exports = CV
 