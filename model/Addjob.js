const mongoose = require('mongoose');
const AddjobSchema = new mongoose.Schema({

        fileToUpload: { // column name
            type: String   //data type String
        },
        Title: { // column name
            type: String   //data type String
        },
        Description: { // column name
            type: String   //data type String
        },
        Category: { // column name
            type: String   //data type String
        },
        Type: { // column name
            type: String   //data type String
        },
        Location: { // column name
            type: String   //data type String
        },
        Latitude: { // column name
            type: String   //data type String
        },
        Longitude: { // column name
            type: String   //data type String
        },
        
        JobDt: { // column name
            type: String   //data type String
        },
        Email: { // column name
            type: String   //data type String
        },
        userid:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        status:{
            type:String
        }

       
    })
          
const Addjob= mongoose.model('Addjob',AddjobSchema)  
module.exports = Addjob 
 