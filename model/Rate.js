const mongoose = require('mongoose');
const RateSchema = new mongoose.Schema({

   
    jid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Addjob',
        required: true
     },
     userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
     },
     rating:{type:String,
     required:true}
    

})
          
const Rate= mongoose.model('Rate',RateSchema)  
module.exports = Rate
 